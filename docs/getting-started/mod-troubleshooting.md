---
title: Mod Troubleshooting
description: Local fixes for mod mismatches, missing controls, version problems, and common Enhanced interface issues.
verification: verified
guide: {"goal":"Resolve a mod mismatch, missing control, or interface problem.","before":"Record the exact message and the loaded mod version.","result":"Choose a targeted repair sequence and collect useful details if the problem persists."}
---

# Mod Troubleshooting

Use this page when the game reports a mod mismatch, an expected control is missing, or an Enhanced
feature does not behave as expected. The complete fixes are kept here so troubleshooting does not
send players to outside guides.

## Mod mismatch or version error

1. Open **ESC** and use [Simple Modlist](../qol/simple-modlist.md) to copy the loaded mod names and
   versions.
2. Compare the names and Workshop IDs with the [required mod list](./required-mods.md).
3. Confirm the mod is active in the selected list. Subscribing downloads it but does not activate it
   in a local mod list by itself.
4. Close Conan Exiles completely and let Steam finish all Workshop downloads.
5. Restart Steam if an update remains queued or the installed version does not refresh.
6. Verify the Conan Exiles game files through Steam if the mismatch continues.
7. As a last resort for one affected mod, unsubscribe from its exact Workshop page, let Steam remove
   it, subscribe again, and wait for the download to finish before launching the game.

Do not substitute a Legacy Workshop item for an Enhanced item. Matching names are not proof that
two editions share the same files, behavior, or current version.

## Missing inventory-side control

Several mods provide ordinary-player commands that reopen their settings when an inventory control
is hidden:

| System | Player command |
| --- | --- |
| [Better Thralls](../followers/better-thralls.md) | `DataCmd BetterThralls` |
| [Unlock Plus](../building/unlock-plus.md) | `DataCmd UnlockPlus Config` |
| [Fashionist](../qol/fashionist.md) | `DataCmd Fashionist Config` |
| [Follower Collision](../followers/follower-collision.md) | `dc PIFCSettings` |

An option that is absent or grayed out can be intentionally disabled by the server. A player command
opens only the ordinary-player interface; it does not override server restrictions.

## F1 does not free the pointer

Simple Minimap, The Damage Meter, and Proximity Party use **F1** as their published default mouse-
interaction key. If holding F1 does nothing, check the current key bindings and other overlays for a
conflict. Rebind the affected interaction rather than assuming the feature is missing.

## System-specific fixes

- [Better Thralls troubleshooting](../followers/better-thralls.md#troubleshooting) — follow-action
  changes, follower groups, mounts, experience, statistics, and Lamplighter identification.
- [Unlock Plus troubleshooting](../building/unlock-plus.md#troubleshooting) — hidden controls,
  sorcery-bench lock state, and private storage.
- [Fashionist troubleshooting](../qol/fashionist.md#troubleshooting) — saving, clipping, hair
  physics, disabled options, and object pickup.
- [Domain's Magic troubleshooting](../magic/domain-magic.md#troubleshooting-and-interactions) —
  casting animations, hidden weapons, and projectile immunity.

## When reporting a problem

Include the affected feature, the copied Simple Modlist entry and version, what the interface showed,
and the exact action that failed. Do not include private account information.
