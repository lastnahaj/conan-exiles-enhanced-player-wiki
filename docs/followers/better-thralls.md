---
title: Better Thralls
description: Local player guide to Better Thralls pickup, Warcry, teams, healing, hauling, home, and follower utility.
verification: server-verification-required
---

# Better Thralls

**Source mod:** Better Thralls v3.3.0 (Enhanced) (`3720904511`)

![Official Workshop image for Better Thralls](/media/mods/better-thralls.png)

Better Thralls expands follower management through several independent, configurable systems. This
page incorporates the current Enhanced feature documentation; it does not assume every optional
system is enabled here.

Open its player settings from the green control beside the character inventory. If that control is
hidden, run `DataCmd BetterThralls` in the in-game console. The command opens ordinary player
settings and does not require elevated permissions.

## Warcry quick start

Press **T** by default to open the Warcry menu for nearby followers and pets.

| Base command | Documented result |
| --- | --- |
| Follow All | Orders nearby followers to follow while respecting the active follower limit. |
| Stop Follow | Stops all followers currently following you. |
| Go Away | Moves nearby followers a short distance away to clear doors and narrow spaces. |

Extra commands appear only when their related feature—such as teams, non-lethal combat, or follower
hauling—is enabled.

## Pickup and follower slots

The pickup feature applies to eligible followers and pets with empty inventories that are not
companions or restricted DLC content. Full health, land claim, and a cooldown can also be required.

The mod supports up to ten additional follower slots on top of the base-game limit and can require
the War Party perk. The actual number available is the limit enforced when a follower is asked to
follow.

## Teams

The documented team system allows named teams with up to five followers or pets in each team. Use a
follower's radial **Team(s)** entry to create a team, add the selected follower, or remove a team.
When at least one team exists, Warcry gains a **Follow (Team)** submenu. The ordinary follower limit
still applies.

## Base and combat utility

- **Lamplighter:** a dedicated follower type can maintain lights around a base. The source describes
  three tiers. Their approximate working radii are 15 foundations for T1, 25 for T2, and 40 for T3.
- **Defense experience:** idle followers can earn a configurable share of kill experience while
  defending a base, up to a configurable limit. This does not raise the follower's underlying
  maximum level.
- **Healing:** followers can automatically use healing potions below a lower health threshold until
  they pass an upper threshold, subject to a cooldown.
- **Weapon intent:** optional Warcry commands can switch followers between lethal weapons and an
  attempt to use non-lethal weapons.
- **Home:** a follower radial menu can expose **Set Home** and **Teleport Home** when enabled.
- **Extended stats:** the follower panel can show ranged and melee damage multipliers, health per
  Vitality, damage bonuses per Strength and Agility, and the follower's thrall group.
- **Fall damage:** follower fall damage can range from none to the full player-equivalent amount;
  the base-game reference is 40%.

All thresholds, areas, experience shares, cooldowns, and enabled states require live verification.

## Carrying an unconscious follower

When the hauling feature is enabled:

1. Put the unconscious target on your binding.
2. Open an eligible follower's radial menu and choose **Hand Over Thrall**.
3. Return to the wheel location.
4. Equip a binding, open the follower radial menu, and choose **Take Over Thrall**.

The source limits hauling to thralls, mounts, and some larger pets. Teleporting followers can make an
attached target temporarily appear missing; take the target back from the follower before placing
it in a wheel.

## Troubleshooting

- The old green follow action no longer exists. Use the normal white **Follow** action for every
  follower.
- Only compatible follower groups can travel together. Human thralls and most pets use the Warrior
  group; zombies, undead, some summoned followers, and some modded followers may use incompatible
  groups.
- Only one mount can follow because mounts use their own base-game follower group.
- A **Refuses to follow** message commonly means the follower was not assigned a current follower
  group by the mod that added it.
- Better Thralls does not alter follower combat statistics or the follower's underlying maximum
  level.
- Additional followers receive experience through the game's normal follower experience system.
- A Better Thralls Lamplighter has a small **BT** mark on its icon. A similar-looking thrall without
  that mark is not a Lamplighter from this mod.

## Workshop

- [Current Enhanced Workshop page](https://steamcommunity.com/sharedfiles/filedetails/?id=3720904511)
