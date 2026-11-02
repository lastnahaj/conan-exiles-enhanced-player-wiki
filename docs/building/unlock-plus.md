---
title: Unlock Plus
description: Local guide to Unlock Plus Enhanced storage, crafting, construction, and inventory workflows.
verification: server-verification-required
guide: {"goal":"Move materials, organize storage, and supply crafting recipes.","before":"Open a supported container or station; set keep/restock amounts before depositing supplies.","result":"Use the correct transfer action without emptying supplies you meant to keep."}
---

# Unlock Plus


Unlock Plus adds storage, material-pulling, distribution, restocking, and construction controls.
The Enhanced version does not yet guarantee every feature known from the older edition, so this
guide uses the current Enhanced page as its baseline.

## Choose the right transfer

- **One open container:** use Move to open storage.
- **One crafting recipe:** use Pull for its ingredients.
- **Mixed carried loot:** use the available deposit/distribution workflow.
- **Supplies that must stay with you:** configure Keep and Restock first.

These actions serve different purposes. Choose the destination and retained amounts before
using a broad deposit action.

## Resource-management workflows

| Workflow | Documented use |
| --- | --- |
| Move to open storage | Transfers items from the player inventory into the container currently open. |
| Pull materials | Collects required crafting materials from nearby storage and stations. |
| Deposit and distribute | Moves carried items into containers designated for their categories. |
| Keep and restock | Preserves configured amounts when using deposit-all workflows. |
| Automated-bench recipes | Exposes recipes in supported automated stations so the material-pull workflow can supply them. |

Open the Unlock Plus settings from the control beside the character inventory. If the control is
hidden, run `DataCmd UnlockPlus Config`. That command opens ordinary player settings and does not
require elevated permissions.

## Construction hammer

The current source documents adjustable movement speed while using construction mode, intended to
make fine placement easier.

## Storage and locking

| Feature | Player behavior documented by the Enhanced mod |
| --- | --- |
| Extended storage | Supported chests and crafting stations can use from one to ten times their standard capacity. |
| Placeable locks | Supported placeables can be locked against access by players outside the owning clan. |
| Private chest | A special large chest is accessible only to the character who placed it, including exclusion of clan members. |

Door and gate locking plus breakable locks are identified as features still being restored in the
Enhanced edition. Do not rely on those older Legacy behaviors.

## Quick workflow

1. Open the crafting station or storage container you want to work with.
2. Use the Unlock Plus control beside the character inventory.
3. Choose **Move to open storage** to clear matching inventory items into that container, or use
   **Pull** from a recipe to gather its nearby ingredients.
4. Configure keep/restock amounts before using a deposit-all action if some carried supplies must
   remain in the inventory.
5. Move a stack between inventories after any stack or capacity change so its displayed state can
   refresh.

## Troubleshooting

- If the inventory-side control is hidden, use `DataCmd UnlockPlus Config` and restore the control
  from the player settings.
- Sorcery benches can visually appear open even when locked. The radial action indicates the real
  state: an **Unlock** action means the station is currently locked; a **Lock** action means it is
  currently open.
- A private chest has no access path for other clan members. Use shared storage for anything the
  clan must reach.

## Mod identity

![Official Workshop image for Unlock Plus](/media/mods/unlock-plus.png)
**Source mod:** Unlock Plus v2.0.6 (Enhanced) (`3720948133`)

## Workshop

- [Current Enhanced Workshop page](https://steamcommunity.com/sharedfiles/filedetails/?id=3720948133)
