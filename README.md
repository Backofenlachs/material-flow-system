# Material Flow System

### Modular UI System for CR-DSS

A small UI system I’m building to create flexible interfaces for a Credit Risk Decision Support System (CR-DSS).

---

## Idea

Build the structure once.
Configure it however you need.
Swap the functionality at runtime.

---

## How it works

The layout is **not fixed**.

It’s defined via a configuration and can be changed freely:

* with or without sidebar
* with or without header/footer
* single or multiple content areas
* completely different layouts

Tools are then mounted into the defined slots.

```text
Custom layout → mount tools → different UI
```

---

## Architecture (short)

* **AppShell** → renders the layout from a config
* **AppManager** → registers, mounts and switches tools
* **Tools** → self-contained features (Search, Risk, etc.)

---

## Example Layouts

### Sidebar Layout

* header
* sidebar (navigation)
* content
* footer

### Dual Layout

* header
* multiple content areas (e.g. Search + Risk side by side)

Same system — just different configuration.

---

## Current Features

* SearchTool → filter and explore data
* RiskTool → simple credit risk evaluation
* SidebarTool → switch tools at runtime

---

## Why I built this

I wanted to:

* understand UI architecture deeper
* build something modular without a framework
* create a flexible base for CR-DSS

---

## Current State

* config-driven layout system working
* tools can be mounted and switched dynamically
* multiple layouts already supported

More details:

```
docs/v0_1/
```

---

## Summary

A configurable UI system with dynamic tools.

Not page-based.
Not fixed.
Fully composable.
