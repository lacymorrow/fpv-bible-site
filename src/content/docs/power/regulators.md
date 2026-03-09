---
title: Regulators
description: Voltage regulators step down battery voltage for sensitive components.
---

:::caution[Stub]
This page is a stub. [Help us expand it](https://github.com/lacymorrow/fpv-bible).
:::

Your battery outputs 14.8V (4S) or 22.2V (6S), but many components need 5V or 3.3V. Voltage regulators (or BECs) step the voltage down.

## Types

- **Linear Regulator** — Simple but inefficient. Converts excess voltage to heat.
- **Switching Regulator (BEC)** — More efficient. Battery Eliminator Circuit. Standard on most modern PDBs and FCs.

## Common Voltage Rails

- **5V** — Flight controller, receiver, GPS
- **9-12V** — Video transmitter, FPV camera
- **3.3V** — Some receivers and sensors
