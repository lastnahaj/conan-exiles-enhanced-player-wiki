---
title: Simple Modlist
description: How to inspect and copy the active mod list from the game menu.
verification: verified
guide: {"goal":"Inspect and copy the mod names and versions actually loaded.","before":"Open the ESC menu.","result":"Produce a useful mod-list comparison when diagnosing a mismatch."}
---

# Simple Modlist

Simple Modlist shows the names and versions of the mods loaded by your current game session.
Use it when a connection fails, a feature appears missing, or you need to describe a mod problem.

## Inspect the loaded list

1. Open **ESC**.
2. Locate the active mod list.
3. Scroll to the affected mod and read its displayed name and version.
4. Copy the displayed list as text when you need to compare or report it.

The small hide control removes the list from view when you do not need it.

## Compare the right information

| Check | Why it matters |
| --- | --- |
| Canonical name | Similar names can refer to different releases. |
| Workshop ID | Identifies the exact mod, including its Enhanced edition. |
| Loaded version | Shows what the current session is using. |
| Required stack | Shows which entries belong in the server setup. |

Compare your session with the [required mods](../getting-started/required-mods.md).
A Steam subscription alone does not show which version a running session has loaded.

## If the versions do not match

Close the game and finish pending Workshop downloads before reconnecting. Follow the
[mod-mismatch repair sequence](../getting-started/mod-troubleshooting.md#mod-mismatch-or-version-error)
if the problem persists.

[Current Enhanced Workshop page](https://steamcommunity.com/sharedfiles/filedetails/?id=3719546290)

## Mod identity

![Official Workshop image for Simple Modlist](/media/mods/simple-modlist.png)
**Source mod:** Simple Modlist v5.0.6 (by Xevyr) (`3719546290`)
