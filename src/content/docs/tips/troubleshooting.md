---
title: Troubleshooting
description: Common problems and how to fix them.
---

:::caution[Stub]
This page is a stub. [Help us expand it](https://github.com/lacymorrow/fpv-bible).
:::

## Motors Won't Spin

- Check motor order and direction in Betaflight.
- Verify ESC signal wires are soldered to the correct FC pads.
- Check that the ESC is receiving power.
- Try spinning motors in Betaflight Motors tab (props off!).

## No Video Feed

- Is the VTX antenna connected? **Never power on without an antenna.**
- Check VTX power — is it getting voltage?
- Verify channel/band match between VTX and goggles.
- Try a different channel — interference can blank a feed.

## Quad Flips on Takeoff

- Motor order is wrong. Re-check motor numbering in Betaflight.
- Motor direction is wrong. Verify spin direction matches Betaflight config.
- Props on wrong motors (CW on CCW or vice versa).

## Bad Video / Static

- Check antenna connections on both VTX and goggles.
- Add a capacitor across main power pads to filter noise.
- Route video wires away from ESC and motor wires.
- Ensure antenna polarization matches (both RHCP or both LHCP).

## Quad Drifts / Won't Hold Level

- Calibrate accelerometer in Betaflight.
- Ensure FC is mounted flat and secure.
- Check for bent motor shafts or damaged props causing vibration.
