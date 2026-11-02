---
title: Required Mods
description: Canonical Steam Workshop names, IDs, roles, and local player guides for the server stack.
verification: verified
guide: {"goal":"Check the exact Enhanced mods required by the server.","before":"Let Steam finish pending Workshop downloads.","result":"Match canonical names and IDs and open the corresponding local instructions."}
---

# Required Mods

Use the exact Workshop name and ID below when checking your client. The **Wiki coverage** column
opens the instructions in this wiki; you do not need to leave the site to learn what a mod does or
how to use its documented player controls.

## Check your client

1. Let Steam finish all Workshop downloads.
2. Compare exact names and IDs in the table below.
3. Open the game's ESC menu and use [Simple Modlist](../qol/simple-modlist.md) to inspect loaded versions.
4. If a mismatch remains, follow the [repair sequence](./mod-troubleshooting.md#mod-mismatch-or-version-error).

A version string helps diagnose the running session; the Workshop ID identifies the exact mod.
The table is an identity and coverage directory, not an independently verified load-order instruction.

## Required stack

| # | Required Enhanced mod | Workshop ID | Wiki coverage |
| ---: | --- | ---: | --- |
| 1 | Simple Modlist v5.0.6 (by Xevyr) | `3719546290` | [Active-mod display and copying](../qol/simple-modlist.md) |
| 2 | The Damage Meter (by Xevyr) - v5.0.9 | `3719585133` | [Combat tracking and controls](../qol/damage-meter.md) |
| 3 | [Enhanced] Player Ignores Follower Collision | `3720753923` | [Movement and personal settings](../followers/follower-collision.md) |
| 4 | Unlock Plus v2.0.6 (Enhanced) | `3720948133` | [Storage and crafting workflows](../building/unlock-plus.md) |
| 5 | Better Thralls v3.3.0 (Enhanced) | `3720904511` | [Follower management](../followers/better-thralls.md) |
| 6 | Simple Minimap (by Xevyr) v5.1.9 | `3719513784` | [Minimap and markers](../qol/simple-minimap.md) |
| 7 | Stacksize Plus v2.0.3 (Enhanced) | `3720915336` | [Stack behavior](../qol/stacksize-plus.md) |
| 8 | Fashionist v5.0.9 (Enhanced) | `3720921242` | [Appearance and equipment styling](../qol/fashionist.md) |
| 9 | Proximity Party (by Xevyr) - v5.0.7 | `3718878457` | [Nearby health-bar display](../qol/proximity-party.md) |
| 10 | Mystical Travel Shelf (by Xevyr) | `3718830483` | [Compact maproom travel](../travel/mystical-travel-shelf.md) |
| 11 | Domain's Magic Enhanced | `3724192567` | [Casting system and player settings](../magic/domain-magic.md) |
| 12 | Less Building Placement Restrictions (Enhanced) - v1.0.3 | `3755091710` | [Building placement](../building/lbpr.md) |
| 13 | ExilesExtreme - v2.0.7 | `3721151274` | [Player-safe content coverage](../combat/exiles-extreme.md) |
| 14 | Extended Thrall Stats (Enhanced) | `3720737911` | [Follower stat fields](../followers/extended-thrall-stats.md) |
| 15 | [Enhanced] Armory and Arsenal v1.2.9 | `3718199031` | [Classes, gear, and endgame systems](../progression/armory-and-arsenal.md) |
| 16 | [Enhanced] EAA - Enhanced Perks & Level | `3720326124` | [Combined progression status](../progression/eaa-perks-level.md) |
| 17 | Wings Of Valhalla (Beta) | `3719965485` | [Progression, equipment, and world systems](../progression/wings-of-valhalla.md) |
| 18 | Wings Of Valhalla Equipment (Beta) | `3721036709` | [Equipment-module coverage](../progression/wings-of-valhalla.md) |
| 19 | [Enhanced] Pippi - User & Server Management - v4.0.6 | `3725018456` | [Ordinary-player server systems](../reference/player-facing-server-systems.md) |
| 20 | Highmane's Arsenal: Enhanced | `3721926604` | [Gear, crafting, building, and companions](../combat/highmanes-arsenal.md) |

The server framework appears because it is part of the required client stack. Its local guide covers
only the ordinary-player systems available through the installed interface.

Use the [Player Controls](../reference/player-controls.md) page for one consolidated key and menu
reference. Exact Workshop links and source attribution remain available in the
[Mod Directory](../reference/mod-directory.md) for installation checks and corrections.
