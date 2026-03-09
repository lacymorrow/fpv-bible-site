---
title: OSD (On Screen Display)
description: Telemetry data overlaid on your FPV video feed.
---

:::caution[Stub]
This page is a stub. [Help us expand it](https://github.com/lacymorrow/fpv-bible).
:::

The OSD overlays flight data directly on your FPV video feed, so you can see critical information without looking away.

## Common OSD Elements

- **Battery voltage** — Most critical. Land before you damage your battery.
- **Flight time** — Timer since arming.
- **RSSI** — Radio signal strength.
- **Current draw (A)** — Real-time power consumption.
- **mAh used** — How much battery capacity you've consumed.
- **Flight mode** — Acro, angle, horizon, etc.
- **GPS data** — Speed, altitude, coordinates, satellite count.
- **Warnings** — Low battery, failsafe, overheating.

## How It Works

The flight controller generates the OSD overlay and mixes it into the video signal before it reaches the VTX. Most modern FCs have a built-in OSD chip. Betaflight and other firmware let you configure the layout through their configurator.
