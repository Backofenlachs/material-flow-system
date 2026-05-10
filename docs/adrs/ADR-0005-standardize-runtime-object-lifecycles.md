# ADR-005: Standardize Runtime Object Lifecycles

## Status
proposed

Date: 2026-05-10

Author: Perseus Palma Jacobs
---

## Context

Different runtime objects have different responsibilities:

- UI tools (`BaseTool`)
- System/manager classes (`MountingEngine`, `AppShell`)
- Application orchestration (`AppController`)

As the project grows, inconsistent lifecycle structures increase complexity,
reduce readability, and make runtime behavior harder to reason about.

Previously, `ShellConfig` was treated as a one-time bootstrap object.

This caused conflicts with:

- dynamic tool mounting
- persistent tool instances
- runtime layout changes
- centralized lifecycle orchestration

---

## Problem

The project currently has inconsistent intialization and runtime handling.

Examples:
- configuration passed through constructors
- DOM elements stored too early
- tools recreated on every mount
- unclear seperation between object creation and runtime initialization

---

## Decision

The `AppController` becomes the central orchestration layer.

It owns and manages the active `Shellconfig` object as the runtime source of thruth.

`ShellConfig` is no logner treated as a one-time startup configuration.
Instead, it becomes a persistent runtime object.
that can be modified during application execution.

Two lifecycle categries are introduced. 

### UI Tool Lifecycle

Used by `BaseTool` and all future UI tools.
```JS
constructor() // creates a valid empty instance
init(config, runtime), // injects runtime dependencies and configuration
render($rootElement) // attaches the dom to a concrete dom slot
destroy() // removes DOM bindings and runtime state
```

---

### System Manager Lifecycle

Base structure:
```JS
constructor()
init(...)
destroy()
```

**Mounting Engine**:
```JS
constructor()
init(appShell)
registerTool(toolname, ToolClass)
mountTool(toolName, slotName)
unmountTool(toolName) // removes tool from slot, keeps instance
destroyTool(toolName) // destroys toolinstance completly
destroy()
```
The `MountingEngine` seperates tool registration,
tool instantiation, and active mounting.

```JS
toolRegistry    = new Map() // toolname -> ToolClass
toolInstances   = new Map() // toolName -> persistent class instance
mountedTools    = new Map() // slotName -> toolName
```
`toolRegistry` stores all available tools definitions.

Toll instances are created lazily on first mount and reused afterwards

This seperates:
- registration
- runtime instantiation
- active DOM mounting

Mounted tool are no longer recreated on every mount operation.

This allows.
- preserving internal UI state
- reducing unnecessary reinizialization
- enabling future runtime/layout switching


**AppShell**
```JS
constructor()
init(rootElement, layoutConfig) // manages and renders the application layout structure
destroy()
```

**AppController**
```JS
constructor()
init() // init() is used insetead of start() for lifecycle consistency across the project
destroy()
```
The AppController becomes the central orchestration layer.

---

## Consequences

### positiv
- cleaarer seperation of responsibilities
- consistent lifecycle structure across the project
- imporoved readability and maintainability
- tools become independent from fixed DOM locations
- easier future runtime/layout extensions
- centralized runtime state through `ShellConfig`
- supports laźy tool creation
- supports persistent tool state across remounts
  
### negative
- additional lifecycle complexity
- more internal runtime bookkeeping
- mounting rules become stricter
- config must be resolved during mount operations