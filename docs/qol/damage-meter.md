---
title: The Damage Meter
description: Combat tracking, encounter history, and interface controls for The Damage Meter.
verification: verified
guide: {"goal":"Read combat performance and inspect encounter history.","before":"Hold F1 to interact with the meter using its default controls.","result":"Choose the right view and distinguish current encounter results from totals."}
---

# The Damage Meter


The Damage Meter provides real-time combat tracking for the player, followers, and nearby tracked
players.

## Choose the right comparison

| Question | View or record |
| --- | --- |
| What happened in this fight? | Current encounter |
| How much damage has been dealt across tracked activity? | Total Done |
| How much damage has been received? | Total Received |
| Which damage types contributed? | Hover the tracked row for its breakdown |
| What happened at a specific moment? | Combat log, with timestamps enabled if useful |

Keep the encounter segment consistent when comparing results. A current fight and a total since
reset describe different time spans.

## Tracked information

- Damage and damage per second
- Current and total damage dealt and received
- The last ten individual encounters plus a total since reset
- A scrollable combat log holding the most recent 1,000 damage events
- Floating damage numbers
- Damage-type breakdowns
- Client-side saved encounter data

The interface can be moved, resized, scaled, minimized, or hidden. Its settings also cover bar
colors, interface theme, timestamps, and floating-number behavior. The published default interaction
behavior uses **F1** to enable mouse interaction unless the player changes the binding.

## Reading and controlling the meter

1. Hold **F1** to free the pointer for the meter.
2. Hover a tracked character or follower row to inspect its damage-type breakdown.
3. Use the view selector to switch between **Current**, **Total Done**, and **Total Received**.
4. Use the encounter arrows to review any of the ten saved encounter segments.
5. Open the combat-log control for the event-by-event record. Timestamp display is optional in the
   meter settings.

The minus control in the top-left corner minimizes the panel. Drag and resize the panel while mouse
interaction is active. If it is moved somewhere inconvenient, use its saved-location setting to
restore the selected position.

The meter is a local combat-analysis tool. Its client-side history helps compare attacks, damage
types, and follower contribution without defining server combat rules or changing damage.

[Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3719585133)

## Mod identity

![Official Workshop image for The Damage Meter](/media/mods/damage-meter.png)
**Source mod:** The Damage Meter (by Xevyr) - v5.0.9 (`3719585133`)
