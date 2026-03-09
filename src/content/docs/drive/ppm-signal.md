---
title: PPM Signal
description: Pulse Position Modulation — a legacy multi-channel signal format.
---

:::caution[Stub]
This page is a stub. [Help us expand it](https://github.com/lacymorrow/fpv-bible).
:::

PPM (Pulse Position Modulation) encodes multiple channels into a single signal wire. It was an improvement over PWM (which required one wire per channel) but has been superseded by digital protocols like SBUS and CRSF.

## How It Works

PPM sends a series of pulses where the position (timing) of each pulse represents a channel value. A synchronization gap separates each frame of channel data.

## Why It's Obsolete

- Higher latency than digital protocols
- More susceptible to noise and interference
- Limited channel count
- No error detection

If you encounter PPM, it's probably on legacy equipment. Modern builds use SBUS, CRSF, or ELRS serial protocols.
