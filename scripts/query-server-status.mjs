import dgram from "node:dgram";
import { readFileSync, writeFileSync } from "node:fs";

const configUrl = new URL("../data/server.json", import.meta.url);
const outputUrl = new URL("../public/server-status.json", import.meta.url);
const config = JSON.parse(readFileSync(configUrl, "utf8"));
const queryHost = config.address;
const queryPort = config.query_port;
const timeoutMs = 4_000;

function cString(buffer, offset) {
  const end = buffer.indexOf(0, offset);
  if (end === -1) throw new Error("Invalid A2S string");
  return [buffer.toString("utf8", offset, end), end + 1];
}

function query(sendInitial, expectedType, challengeResponse) {
  return new Promise((resolve, reject) => {
    const socket = dgram.createSocket("udp4");
    const fragments = new Map();
    let fragmentCount = 0;

    const timer = setTimeout(() => finish(new Error("A2S query timed out")), timeoutMs);

    function finish(error, value) {
      clearTimeout(timer);
      socket.close();
      error ? reject(error) : resolve(value);
    }

    function inspectPacket(message) {
      if (message.length < 5) return undefined;
      const header = message.readInt32LE(0);
      if (header === -1) return message;
      if (header !== -2 || message.length < 12) return undefined;

      const requestId = message.readUInt32LE(4);
      if ((requestId & 0x80000000) !== 0) return undefined;
      fragmentCount = message[8];
      fragments.set(message[9], message.subarray(12));
      if (fragments.size !== fragmentCount) return undefined;

      const joined = Buffer.concat(
        Array.from({ length: fragmentCount }, (_, index) => fragments.get(index)),
      );
      return joined.readInt32LE(0) === -1
        ? joined
        : Buffer.concat([Buffer.from([0xff, 0xff, 0xff, 0xff]), joined]);
    }

    socket.on("error", (error) => finish(error));
    socket.on("message", (message) => {
      const packet = inspectPacket(message);
      if (!packet) return;
      const type = packet[4];
      if (type === 0x41 && challengeResponse) {
        socket.send(challengeResponse(packet.subarray(5, 9)), queryPort, queryHost);
        return;
      }
      if (type === expectedType) finish(undefined, packet);
    });

    socket.bind(0, () => socket.send(sendInitial, queryPort, queryHost));
  });
}

async function queryInfo() {
  const header = Buffer.from([0xff, 0xff, 0xff, 0xff, 0x54]);
  const request = Buffer.concat([header, Buffer.from("Source Engine Query\0", "ascii")]);
  const packet = await query(request, 0x49, (challenge) => Buffer.concat([request, challenge]));
  let offset = 6;
  const [name, afterName] = cString(packet, offset);
  offset = afterName;
  const [, afterMap] = cString(packet, offset);
  offset = afterMap;
  const [, afterFolder] = cString(packet, offset);
  offset = afterFolder;
  const [, afterGame] = cString(packet, offset);
  offset = afterGame + 2;
  return {
    name,
    players: packet[offset],
    maxPlayers: packet[offset + 1],
  };
}

async function queryPlayers() {
  const prefix = Buffer.from([0xff, 0xff, 0xff, 0xff, 0x55]);
  const initial = Buffer.concat([prefix, Buffer.from([0xff, 0xff, 0xff, 0xff])]);
  const packet = await query(initial, 0x44, (challenge) => Buffer.concat([prefix, challenge]));
  const count = packet[5];
  const names = [];
  let offset = 6;

  for (let index = 0; index < count && offset < packet.length; index += 1) {
    offset += 1;
    const [name, afterName] = cString(packet, offset);
    offset = afterName + 8;
    if (name.trim()) names.push(name.trim());
  }
  return names;
}

const updatedAt = new Date().toISOString();
let publicStatus;

try {
  const info = await queryInfo();
  let playerNames = [];
  let playerListAvailable = false;
  try {
    playerNames = await queryPlayers();
    playerListAvailable = true;
  } catch {
    playerListAvailable = false;
  }
  publicStatus = {
    status: "online",
    name: info.name,
    players: info.players,
    maxPlayers: info.maxPlayers,
    playerNames,
    playerListAvailable,
    connect: `${config.address}:${config.game_port}`,
    updatedAt,
  };
} catch {
  publicStatus = {
    status: "offline",
    playerNames: [],
    playerListAvailable: false,
    connect: `${config.address}:${config.game_port}`,
    updatedAt,
  };
}

writeFileSync(outputUrl, `${JSON.stringify(publicStatus, null, 2)}\n`);
console.log(`Server status updated: ${publicStatus.status}`);
