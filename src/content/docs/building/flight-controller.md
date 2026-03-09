---
title: Flight Controller
description: Installing the brain of your quad.
---

:::caution[Stub]
This page is a stub. [Help us expand it](https://github.com/lacymorrow/fpv-bible).
:::

The flight controller (FC) is the brain. It reads sensor data (gyroscope, accelerometer), processes your stick inputs, runs PID loops, and sends commands to the ESCs.

## Popular Firmware

- **Betaflight** — The standard for FPV racing and freestyle. Huge community.
- **INAV** — Navigation-focused. Better for GPS missions and long-range.
- **Ardupilot** — Full autopilot suite. Overkill for racing, great for autonomous flight.

## Installation

1. Mount on rubber grommets or soft-mount standoffs (reduces vibration noise to the gyro).
2. Orient the arrow on the FC forward (or set custom orientation in firmware).
3. Solder ESC signal wires, receiver, VTX, and other peripherals.
4. Connect USB and configure in Betaflight Configurator.

## First-Time Setup

- Flash latest firmware
- Set motor protocol (DShot600)
- Configure receiver protocol
- Set up failsafe
- Tune PID (start with defaults, tune later)
