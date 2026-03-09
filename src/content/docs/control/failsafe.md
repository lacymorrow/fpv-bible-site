---
title: Failsafe
description: What happens when your radio link drops — and how to crash gracefully.
---

:::caution[Stub]
This page is a stub. [Help us expand it](https://github.com/lacymorrow/fpv-bible).
:::

Failsafe is what your quad does when it loses the radio link. Configuring this properly is critical for safety.

## Failsafe Options

- **Drop** — Motors cut immediately. The quad falls from the sky. Simple but abrupt.
- **Land** — Quad attempts to descend and land at its current position. Requires altitude hold sensors.
- **Return to Home (RTH)** — Quad flies back to its takeoff point and lands. Requires GPS.
- **Hold position** — Quad holds its current GPS position and altitude until the link recovers.

## Best Practices

- Always configure failsafe before your first flight.
- Test failsafe on the ground with props off — turn off your transmitter and verify the FC enters failsafe mode.
- For racing, "drop" is usually preferred (predictable, no flyaway risk).
- For long-range, GPS-based RTH is essential.
