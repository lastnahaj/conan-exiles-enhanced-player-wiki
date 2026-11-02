<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { withBase } from "vitepress";

const status = ref(null);
const loading = ref(true);
const copied = ref(false);
const now = ref(Date.now());
const stale = computed(() => {
  const checked = Date.parse(status.value?.updatedAt ?? "");
  return Number.isFinite(checked) && now.value - checked > 15 * 60_000;
});
let refreshTimer;

const online = computed(() => status.value?.status === "online");
const playerCount = computed(() => {
  if (!online.value || stale.value) return "—";
  return `${status.value.players} / ${status.value.maxPlayers}`;
});
const updatedAt = computed(() => {
  if (!status.value?.updatedAt) return "Not available";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(status.value.updatedAt));
});

async function loadStatus() {
  now.value = Date.now();
  try {
    const response = await fetch(`${withBase("/server-status.json")}?t=${Date.now()}`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Status feed unavailable");
    status.value = await response.json();
  } catch {
    status.value = {
      status: "unavailable",
      connect: "192.34.101.207:7785",
    };
  } finally {
    loading.value = false;
  }
}

async function copyAddress() {
  if (!status.value?.connect || !navigator.clipboard) return;
  try {
    await navigator.clipboard.writeText(status.value.connect);
    copied.value = true;
    window.setTimeout(() => {
      copied.value = false;
    }, 1500);
  } catch {
    copied.value = false;
  }
}

onMounted(() => {
  loadStatus();
  refreshTimer = window.setInterval(loadStatus, 60_000);
});

onUnmounted(() => window.clearInterval(refreshTimer));
</script>

<template>
  <section class="server-status" aria-live="polite" aria-label="Live server status">
    <div class="server-status__header">
      <div>
        <p class="server-status__eyebrow">Conan Exiles Enhanced</p>
        <h2>{{ status?.name || "Server Status" }}</h2>
      </div>
      <span
        class="server-status__badge"
        :class="online ? 'server-status__badge--online' : 'server-status__badge--offline'"
      >
        <span aria-hidden="true"></span>
        {{ loading ? "Checking" : stale ? "Status out of date" : online ? "Online" : status?.status === "offline" ? "Offline" : "Unavailable" }}
      </span>
    </div>

    <div class="server-status__grid">
      <div class="server-status__metric">
        <span>Players</span>
        <strong>{{ playerCount }}</strong>
      </div>
      <div class="server-status__metric server-status__metric--address">
        <span>Connect</span>
        <strong>{{ status?.connect || "192.34.101.207:7785" }}</strong>
        <button type="button" @click="copyAddress">{{ copied ? "Copied" : "Copy" }}</button>
      </div>
      <div class="server-status__metric">
        <span>Last checked</span>
        <strong>{{ updatedAt }}</strong>
      </div>
    </div>

    <p v-if="stale">The last response is more than 15 minutes old. Current availability and player counts are unknown.</p>
    <div v-if="online && !stale && status.playerListAvailable" class="server-status__players">
      <h3>Players online</h3>
      <ul v-if="status.playerNames.length">
        <li v-for="player in status.playerNames" :key="player">{{ player }}</li>
      </ul>
      <p v-else>No players are currently online.</p>
    </div>
  </section>
</template>

<style scoped>
.server-status {
  margin: 1.5rem 0 2.5rem;
  padding: 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.9rem;
  background:
    radial-gradient(circle at top right, rgba(216, 154, 82, 0.12), transparent 16rem),
    var(--vp-c-bg-soft);
}

.server-status__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.server-status__eyebrow {
  margin: 0 0 0.25rem;
  color: var(--vp-c-brand-1);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.server-status h2 {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 1.3rem;
}

.server-status__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-2);
  font-size: 0.78rem;
  font-weight: 700;
}

.server-status__badge span {
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 50%;
  background: #a4715a;
}

.server-status__badge--online span {
  background: #58c983;
  box-shadow: 0 0 0 0.2rem rgba(88, 201, 131, 0.14);
}

.server-status__grid {
  display: grid;
  grid-template-columns: 0.7fr 1.4fr 1fr;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.server-status__metric {
  min-width: 0;
  padding: 0.8rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.65rem;
  background: color-mix(in srgb, var(--vp-c-bg) 54%, transparent);
}

.server-status__metric > span {
  display: block;
  color: var(--vp-c-text-3);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.server-status__metric strong {
  display: block;
  margin-top: 0.2rem;
  color: var(--vp-c-text-1);
  font-size: 0.96rem;
  overflow-wrap: anywhere;
}

.server-status__metric--address {
  position: relative;
  padding-right: 4.25rem;
}

.server-status__metric button {
  position: absolute;
  top: 50%;
  right: 0.75rem;
  padding: 0.32rem 0.55rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.4rem;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-brand-1);
  cursor: pointer;
  transform: translateY(-50%);
}

.server-status__players {
  margin-top: 1rem;
}

.server-status__players h3 {
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
}

.server-status__players ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.server-status__players li {
  padding: 0.28rem 0.55rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.4rem;
  background: var(--vp-c-bg-elv);
  font-size: 0.82rem;
}

.server-status__players p {
  margin: 0;
  color: var(--vp-c-text-2);
}

@media (max-width: 700px) {
  .server-status__grid {
    grid-template-columns: 1fr;
  }
}
</style>
