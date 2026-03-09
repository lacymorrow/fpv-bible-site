---
title: Telemetry
description: Real-time data from your quad back to your transmitter.
---

:::caution[Stub]
This page is a stub. [Help us expand it](https://github.com/lacymorrow/fpv-bible).
:::

Telemetry is data sent back from the quad to your transmitter, giving you real-time info without looking at the OSD.

## Common Telemetry Data

- **Battery Voltage** — Critical for knowing when to land. Low voltage = damaged battery.
- **RSSI (Received Signal Strength Indication)** — How strong the radio link is. Warns you before you fly out of range.
- **GPS Position** — Latitude/longitude for return-to-home and tracking.
- **Current Draw** — How many amps the quad is pulling.
- **Flight Mode** — Which mode the FC is in (acro, angle, horizon).

## How It Works

Most modern protocols (ELRS, Crossfire, FrSky) support bidirectional communication. The receiver sends telemetry data back on the same link used for control, and your transmitter displays it on screen or announces it via voice alerts.
