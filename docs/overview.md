# Architecture Overview

This folder contains the architectural documentation of the UI system.

---

## Quick Idea (Speed Run)

The system is **config-driven and runtime-composed**.

* The layout is defined via a configuration (`ShellConfig`)
* The `AppShell` renders this structure and exposes slots
* The `AppManager` mounts tools into these slots
* Tools can be swapped dynamically at runtime

```text
Config → AppShell → Slots → AppManager → Tools → UI
```

There is no fixed page structure — everything is composed dynamically.

---

## Structure

### architecture-sketches/

Early ideas, drafts, and experiments.

* used to explore concepts
* not necessarily consistent or complete

---

### v0_1/

First stable version of the architecture.

* config-driven layout system implemented
* runtime tool composition working
* tool lifecycle (register, mount, switch) implemented

Feature modules:

* SearchTool
* RiskTool

This version represents the current baseline.

---

## Summary

* config defines structure
* tools define functionality
* runtime composition builds the UI

Further versions will build on this.
