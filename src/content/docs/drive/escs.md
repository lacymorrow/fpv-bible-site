---
title: Electronic Speed Controllers (ESCs)
description: ESCs control motor speed based on flight controller commands.
---

:::caution[Stub]
This page is a stub. [Help us expand it](https://github.com/lacymorrow/fpv-bible).
:::

An ESC (Electronic Speed Controller) takes a signal from the flight controller and drives a brushless motor at the requested speed.

## Key Specs

- **Current rating (A)** — Must handle the max current your motor draws. 30-50A is common for 5" builds.
- **Firmware** — BLHeli_S, BLHeli_32, or AM32. Affects features and tuning options.
- **Protocol** — DShot600 is the standard digital protocol. Older: OneShot, MultiShot.
- **Form factor** — Individual ESCs (one per arm) or 4-in-1 (single board for all motors).

## 4-in-1 vs. Individual

- **4-in-1** — Cleaner build, fewer wires. If one ESC dies, you replace the whole board.
- **Individual** — Can replace one at a time. Slightly more wiring.

Most modern builds use 4-in-1 ESCs.
