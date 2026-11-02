---
title: Follower Collision
description: How the Enhanced follower-collision quality-of-life mod affects player movement.
verification: verified
guide: {"goal":"Stop owned followers from blocking movement.","before":"Open personal settings with dc PIFCSettings.","result":"Choose the available collision scope and understand which actors it affects."}
---

# Follower Collision

This mod lets players move through owned followers rather than being physically blocked by them.
The follower continues to fight, take damage, and block other actors normally.

## Choose your collision scope

1. Open the in-game console.
2. Run `dc PIFCSettings`.
3. Review the available per-character options.
4. Choose whether the behavior applies only to the active follower or to all owned followers.

Clan-owned followers count as owned for the documented behavior.

## Available player choices

| Choice | Scope |
| --- | --- |
| Enable or disable | Turns the personal behavior on or off when the server permits it. |
| Active follower or all owned followers | Chooses the group affected by the setting. |
| Include hostile NPCs | An optional scope that is off by default in the mod. |

A server-wide setting can override a personal choice. The player menu does not bypass that restriction.

## What changes in combat?

Only the owning player's collision behavior changes. This does not remove follower combat,
damage, or ordinary blocking against other actors.

For group movement and clearing crowded doorways, review
[Better Thralls Warcry commands](./better-thralls.md#warcry-quick-start).

[Current Enhanced Workshop page](https://steamcommunity.com/sharedfiles/filedetails/?id=3720753923)

## Mod identity

![Official Workshop image for Player Ignores Follower Collision](/media/mods/follower-collision.png)
**Source mod:** [Enhanced] Player Ignores Follower Collision (`3720753923`)
