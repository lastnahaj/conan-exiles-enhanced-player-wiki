---
title: Domain's Magic
description: Local player guide to Domain's Magic casting commitments, elemental mechanics, progression interface, and aura settings.
verification: server-verification-required
---

# Domain's Magic

**Source mod:** Domain's Magic Enhanced (`3724192567`)

![Official Workshop image for Domain's Magic Enhanced](/media/mods/domains-magic.png)

Domain's Magic is a standalone high-fantasy spell system built around a dedicated mage playstyle.
The current Enhanced source describes elemental schools, strategic casting commitments, status
effects, and optional custom progression. Blood Magic is identified as part of the current release.

## How combat casting behaves

| Mechanic | Player implication |
| --- | --- |
| Cast time | A spell can require a readable wind-up before it resolves. |
| Movement penalty | Positioning matters while preparing a cast. |
| Interruption | An opponent can punish a committed cast. |
| Elemental effects | Schools can use damage-over-time effects, traps, and ultimate-style abilities. |
| Stat scaling | Damage uses Authority by default in the mod, but the effective scaling stat is configurable. |

In full PvP, do not treat a cast as instant or assume the default scaling model. Exact spells,
damage, timing, cooldowns, interruptions, and scaling must reflect the live server.

## Player menus

Run `datacmd ddmagicplayer` in the in-game console to open the personal casting-aura visual toggle.
This changes the player's aura visuals, not spell balance.

The source also documents `datacmd ddmagiclevel` or **Ctrl+N** for the element-level interface when
custom progression has been configured. If that interface is absent or empty here, do not infer
that a progression path is active.

## What is still withheld

- Spell-by-spell availability and unlock requirements
- Damage, status strength, range, cast time, and cooldown values
- Effective scaling attributes and progression milestones
- Server-specific PvP tuning

## Sources

- [Current Enhanced Workshop page](https://steamcommunity.com/sharedfiles/filedetails/?id=3724192567)
- [Author-linked spell guide](https://docs.google.com/document/d/1V55KOwctM_VPTZH7rmVC_n4r_X2sjLlpHI8zAhCiQSQ/edit?usp=sharing)
