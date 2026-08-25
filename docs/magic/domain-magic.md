---
title: Domain's Magic
description: Complete local player guide to Domain's Magic casting, six elemental schools, spells, progression, controls, and troubleshooting.
verification: server-verification-required
---

# Domain's Magic

**Source mod:** Domain's Magic Enhanced (`3724192567`)

![Official Workshop image for Domain's Magic Enhanced](/media/mods/domains-magic.png)

Domain's Magic is a hotbar-based spell system built around Ember, Arctic, Umbra, Radiant,
Voltaic, and Sanguine magic. Every spell is a usable item with a long in-game description. The
spells are learned from the **Sorcery → Domain's Magic** section of the Knowledge menu.

> The spell effects and numbers below are the author's published Enhanced defaults. Damage,
> healing, scaling, cast duration, cooldowns, and friendly-target behavior can be configured for a
> server.

## Casting spells

1. Learn the Domain's Magic knowledge and the elemental spell knowledge you want to use.
2. Put a spell item on the hotbar.
3. Read the item's long description for its cast time, cooldown, and elemental interaction.
4. Activate the spell and aim at the target or ground location required by that spell.

Casting has a wind-up, slows movement, and can be interrupted. Weapons can remain equipped: they
hide during the cast and return afterward. A spell cannot begin during a weapon swing, but it can
begin as soon as the attack animation finishes. Magic damage scales from **Authority** by default.

## Ember — fire and explosions

Ember builds a stacking fire damage-over-time effect, then consumes those stacks for larger area
damage.

| Spell | Effect |
| --- | --- |
| **Ember Bolt** | Fires a projectile that deals fire damage and applies a stacking fire DOT. |
| **Ember Fire** | Sends a cone-shaped burst of flames in front of the caster, dealing area damage and adding fire DOT stacks. |
| **Ember Trap** | Places a ground trap that explodes and knocks targets upward when triggered. |
| **Detonate: Ember** | Consumes Ember DOT stacks. A fire wisp returns to the caster and produces a ground explosion that grows with the number of consumed stacks. |
| **Ultimate: Volatile Ember** | Hits a large area with Volatile Ember. Affected targets explode again after the debuff is applied, damaging the area around each target. |

The basic loop is **apply stacks → gather targets → detonate**. Volatile Ember is most effective
when several marked targets are close enough for their secondary explosions to overlap.

## Arctic — frost and control

Arctic slows targets, freezes them with a trap, and sets up a high-damage follow-up hit.

| Spell | Effect |
| --- | --- |
| **Arctic Bolt** | Deals frost damage and applies a stacking slow. At four stacks, the effect snaps for extra frost damage. |
| **Arctic Burst** | Releases frost around the caster and applies the same stacking effect as Arctic Bolt. |
| **Arctic Trap** | Places a ground trap that freezes a triggered target for five seconds by default. |
| **Detonate: Arctic** | Shatters particles on nearby enemies. The published default applies a 20-second debuff that increases the next direct hit by 70% and reduces armor by 35%. |
| **Ultimate: Arctic Field** | Creates an eight-second blizzard around the caster, dealing repeated area damage and building frost stacks. |

Use Bolt or Burst to build frost, then choose between control from the trap, a prepared direct hit
after Detonate, or sustained pressure from Arctic Field.

## Umbra — Soul Shards and zones

Umbra creates and spends **Umbral Soul Shards**. The school rewards setting up a damaging area,
building shards, and spending them on the ultimate.

| Spell | Effect |
| --- | --- |
| **Void Bolt** | Fires a projectile and consumes available Umbral Soul Shards for increased damage. |
| **Umbra Shard** | Launches a pulsing area projectile that creates a damaging void well when it reaches the ground. |
| **Umbra Sigil** | Places a trap that knocks targets upward and generates three Umbral Soul Shards. |
| **Detonate: Umbra** | An instant cast with a five-second default cooldown that grants two Umbral Soul Shards. |
| **Ultimate: Umbral Oblivion** | Consumes all current shards to deal large area damage. |

Detonate and Umbra Sigil are the direct shard generators. Void Bolt trades shards for stronger
single-projectile damage, while Umbral Oblivion spends the entire reserve on an area attack.

## Radiant — holy damage and support

Radiant combines armor reduction, healing, ally support, and direct area damage.

| Spell | Effect |
| --- | --- |
| **Branding Smite** | Deals holy damage, reduces the target's armor by 30% by default, and gives the caster healing over time. |
| **Radiant Burst** | Damages and debuffs enemies while healing allies in the area. It does not heal the caster. The published armor reduction is 30%. |
| **Holy Sigil** | Places a support trap that triggers on a player and heals allies in range. |
| **Detonate: Radiant** | Sends a blast of energy to nearby targets for heavy damage. The author marks this spell for a future rework. |
| **Ultimate: Power Within** | Buffs allies with 850 armor, knockback immunity, 20 Vitality, and healing over time by default. |

Branding Smite is the self-sustaining option. Radiant Burst and Holy Sigil support a group, while
Power Within is the school's major defensive team buff.

## Voltaic — lightning chains and instant casting

Every Voltaic cast grants a stack of the school's self-buff. At five stacks, the next spell can be
made instant—and that next spell may come from **any** Domain's Magic school.

| Spell | Effect |
| --- | --- |
| **Combo: Prime and Shackle** | The first cast fires a basic projectile that primes the target. The second sends a slower lightning bola that stuns it. |
| **Voltaic Call** | Calls lightning onto nearby enemies one after another, dealing damage and briefly applying a heavy slow. It does nothing when no valid target is nearby. |
| **Voltaic Imbue** | Increases movement and attack speed by 20% for 25 seconds by default. Every five seconds, it fires chain lightning at a random nearby target and can chain to four more targets. |
| **Detonate: Voltaic** | Makes the next Domain's Magic spell instant. |
| **Ultimate: Crimson End** | Channels red lightning through an array, stunning targets in the radius and dealing heavy damage. |

A common cross-school setup is to build five Voltaic stacks, use **Detonate: Voltaic**, then spend
the instant cast on a normally slow ultimate or area spell from another school.

## Sanguine — health sacrifice and Frenzy

Sanguine spells spend a percentage of maximum health. Sacrificed health fills the on-screen
**Sanguine Frenzy** bar. The bar reaches 100% after health equal to 50% of maximum health has been
sacrificed. Frenzy lasts 12 seconds by default and grants 400 armor, knockback immunity, stronger
versions of three spells, and healing when those Frenzy variants hit enemies.

Spell items with two names use the first effect normally and the second effect during Frenzy.
Frenzy variants are instant casts.

| Spell | Normal effect | Frenzy effect |
| --- | --- | --- |
| **Sanguine Bolt / Barrage** | Fires a blood projectile that deals damage, slows, and applies a DOT stacking up to four times. | Fires five target-seeking bolts. Each applies the same DOT and heals the caster for a percentage of maximum health. |
| **Sanguine Burst / Blast** | Sends a cone of blood forward, dealing area damage, slowing, and applying the stacking DOT. | Explodes around the caster, heals the caster, and pushes targets away. |
| **Obelisk of Blood / Curse of Blood** | Places an obelisk that pulses damage and slows enemies. Standing near it heals the caster for 1% of maximum health each second by default. | Curses nearby targets, knocks them back slightly, and draws blood to the caster. Each returning blood effect heals 4% of maximum health by default. |
| **Detonate: Sanguine** | Sacrifices 25% of maximum health to fill 50% of the Frenzy bar. It has no effect during Frenzy. | No separate Frenzy version. |
| **Ultimate: Sanguine Rain** | Coats the target in blood, reducing movement and attack speed by 50% by default. It does not deal damage. | No Frenzy version and still requires its normal cast time during Frenzy. |

The Sanguine loop is **sacrifice health → enter Frenzy → use instant Frenzy spells to heal back the
sacrifice → repeat**. Detonate reaches Frenzy quickly, but it also creates the largest immediate
health risk.

## Element progression

Press **Ctrl+N** or run `datacmd ddmagiclevel` to open the element-level interface when custom
progression is active. Each element tracks its own level. Consuming an element level-up item adds
one level, and each level supplies a 1% damage bonus for that element in the author's system.

## Player settings

Run `datacmd ddmagicplayer` in the in-game console to open the personal casting-aura setting. This
changes only the caster's visual aura.

## Troubleshooting and interactions

- A weapon that remains hidden after a cast normally returns after casting once more.
- Projectile-immunity effects also block Domain's Magic projectiles.
- Other mods that force character animations can visually interrupt a cast animation even when the
  spell itself finishes.
- If the character becomes stuck in an incorrect animation state, relogging or removing the
  bracelet can clear the temporary state.

## Sources

- [Current Enhanced Workshop page](https://steamcommunity.com/sharedfiles/filedetails/?id=3724192567)
- [Author's Domain's Magic guide](https://docs.google.com/document/d/1V55KOwctM_VPTZH7rmVC_n4r_X2sjLlpHI8zAhCiQSQ/edit?usp=sharing)
