---
title: Fashionist
description: Local player guide to Fashionist armor, weapon, warpaint, saddle, follower, and attached-equipment styling.
verification: server-verification-required
---

# Fashionist

**Source mod:** Fashionist v5.0.9 (Enhanced) (`3720921242`)

![Official Workshop image for Fashionist](/media/mods/fashionist.png)

Fashionist separates visible style from equipped combat gear and adds appearance tools for players,
followers, armor, weapons, warpaint, saddles, and attached equipment.

## Current Enhanced feature map

| Feature | Player use |
| --- | --- |
| Armor style | Apply a preferred appearance while retaining the statistics of the equipped armor. |
| Weapon style | Change a weapon's appearance within supported weapon categories without changing its values. |
| Warpaint style | Select appearance and color independently from the functional equipment loadout. |
| Attached equipment | Choose which weapons and tools appear on the character and where supported categories display. |
| Armor stand | Store complete style sets for later transfer. |
| Thrall Outfitters Bench | Apply supported appearance sets to followers. |
| Color picker | Select colors for supported armor and saddle channels. |
| Character editor | Use the currently integrated appearance-editing interface when available. |

## Open player settings

Use the blue Fashionist control beside the character inventory to open the player interface. If the
control is not visible, run `DataCmd Fashionist Config` in the in-game console. This opens ordinary
player settings and does not require elevated permissions. Apply changes with **Save** before closing
the window.

Player choices documented for attached equipment include hiding all weapons, hiding all tools,
hiding them while mounted or seated, and choosing supported display slots by category. Each weapon
or tool category can use its default display, be hidden, or use one of its supported alternate
positions. A grayed-out option means that choice has been disabled for players by the server.

![Legacy-era Fashionist player settings screen from the author's documentation](/media/mods/fashionist-legacy-player-settings.png)

_Legacy-era author reference for the player settings concept. The current Enhanced layout may
differ._

![Legacy-era Fashionist attached weapon display choices from the author's documentation](/media/mods/fashionist-legacy-attached-equipment.png)

_Legacy-era author reference for attached weapon display choices, a feature independently confirmed
by the current Enhanced Workshop page. Labels and layout may differ in Enhanced._

## Styling followers

The current Enhanced source includes the Thrall Outfitters Bench and Fashionist Armor Stand. A
stored style set can be transferred through the outfitting workflow to supported followers. Exact
bench range, supported follower types, and any changed Enhanced behavior should be confirmed in the
installed interface before reorganizing a base around the feature.

To apply supported warpaint or dyes to a follower, place the warpaint and desired dyes in a
Fashionist Armor Stand, prepare the style there, and transfer it with the Thrall Outfitters Bench.

## Fashionist Mirror

After learning the corresponding knowledge, craft the Fashionist Mirror directly from the player
inventory. The mirror opens the integrated character editor for supported appearance changes. Hair
physics can behave incorrectly on characters far from the default body size; moving the size closer
to its default in the mirror can help.

## Full-PvP boundary

A server can require armor styles to stay within the same armor class and can prevent players from
hiding worn armor. This matters in full PvP because opponents may need to read light, medium, or
heavy armor visually. The effective restrictions on this server have not been supplied, so the wiki
does not promise unrestricted restyling or hidden armor.

## Troubleshooting

- Save the player settings before closing the interface; otherwise the selected display changes do
  not take effect.
- If an attached weapon or tool clips badly, return that category to its default position or hide
  it individually.
- A placed Fashionist object showing zero health is a base-game placement issue rather than a style
  failure. When available, Unlock Plus can expose an alternate pickup action.
- If an option is grayed out, the server has disabled that player choice. The wiki does not assume
  it can be enabled locally.

## Workshop

- [Current Enhanced Workshop page](https://steamcommunity.com/sharedfiles/filedetails/?id=3720921242)
