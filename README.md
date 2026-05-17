# UI-Engine

### Modular UI Engine for CR-DSS

A modular UI engine built in Vanilla JavaScript to explore long-term UI architecture,
runtime composition, and maintainable frontend system design.

Originally developed as the frontend foundation for the **Credit Risk Decision Support System (CR-DSS)**

---

## Goals

The project focuses on:
- modular UI architecture
- runtime-based tool mounting
- configurable layouts
- lifecycle standardization
- maintainable frontend structures
- logn-term system evolution
The focus is architecture and system design rather than visual styling.

---

## Core Idea

The UI structure is defined declaratively through configuration objects.

Layouts are composed from reusable layout nodes and slots, while tools are mounted
dynamically throug a standardized lifecycle.

```
LayoutConfig -> AppShell -> MountingEngine -> BaseTool livecycle -> mounted tools
```

---

## Core Architecture

### AppController
Main orchestration layer responsible for:
- runtime initialization
- AppShell initializaion
- MountingEngine coordination
- processing LayoutConfig

### AppShell
Renders the structural Layout and provides mountable slot containers.

### Mounting Engine
Handles:
- tool registration
- mounting/unmounting
- runtime tool switching
- lifecycle execution

### BaseTool
Standardize lifecycle contracts for all mountable tools.
```JS
constructor()
    -> init(config, runtime)
    -> render($root)
    -> destroy()
```

---

## Tool Patterns

### SimpleTool
Lightweight tools with direct rendering logic.
Examples:
- HeaderTool
- FooterTool

### CompositeTool
Controller-based tools with seperated logic and rendering.
```
CompositeTool
    -> ToolController
        -> ToolModel
        -> ToolView
```
Examples:
-  SearchTool
-  RiskTool

---

## Layout System
Layouts are created through configuration objects using helper functions from
`LayoutFactory.js`
```JS
node(...)
slot(...)
```
The LayoutFactory improves:
- readability
- consistency
- validation of layout structures

---

## Current Features
- declarative layout configuration
- dynamic tool mounting
- runtime tool switching
- standardized lifecycle handling
- configurable slot-based layouts
- MVC-style composite tools
- ADR and architecture documentation

---

## Documentation

- `docs/adrs`
- `docs/v_2`
- `docs/architecture-sketches`

---

## Technical Notes

- Vanilla JavaScript
- jQuery-based DOM handling
- no frontend framework
- configuration-driven UI composition

---

## Author

Perseus Palma Jacobs

Part of a long-term exploration into modular frontend architecture and maintainable
software engineering.
