# ADR-0006:Define Simple and Composite Tool Structure

## Context
During development of the UI-Library, serveral tool-related terms such as `SimpleTool`, `CompositeTool` (tool with internal MVC-based structure), and `ControlTool` (runtime-dependent tool) appeared in sketches, architecture diagrams, and discussions without being formally defined in a single place.

At the same time ADR-0005 introduced a standardized lifecycle used by the `MountingEngine`:

- `init(config, runtime)`
- `render($root)`
- `destroy()`

However, the internal structure and responsibilities of diffrent tool variants are currently not formally defined.

--- 

## Problem
At the current stage of the project, only a small number of tools exist, therefore the missing distinction between different tool variants is not yet a major issue.

However, with increasing tool count and growing internal complexity, the lack of clearly defined tool structures can lead to:
- inconsistent lifecycle handling
- unclear architectural responsibilities
- tighter coupling between tools and the `MountingEngine`
- unstable runtime dependency integration
- reduced maintainability and scalability

Currently, there is no formal definition describing:
- which tool variants exist
- how they internally operate
- how they interact with the standardized lifecycle introduced in ADR-0005

without such definitions, future extensions and validation mechanism would become increasingly difficult to implement consistently.

---

## Decision
The UI-Library distinguishes between two primary tool variants:
- `SimpleTool`
- `CompositeTool`

Both variants can be integrated through the same standardized `BaseTool` lifecycle defined in ADR-0005.

---

### SimpleTool
```
    MountingEngine -> BaseTool -> Tool  
```

A `SimpleTool` contains only lightweight internal logic.

Characteristics:
- may render DOM directly
- may bind events directly
- manages its own internal state
- must clean up DOM binings and runtime references in `destroy()`

This variant is intended for smaller or less complex tools where a dedicated internal architecture would introduce unnecessary complexity.

---

### CompositeTool 
```
    MountingEngine -> BaseTool -> Tool Adapter -> ToolController -> Model/View.
```

A `CompositeTool` uses an internal controller-based architecture.

Characteristics:
- the Tool creates and connects internal components
- the Controller orchestrates application logic and statechanges
- Views handle DOM rendering and exposesing DOM references.
- The controller handles user interaction, event binding, and state coordination.
-`destroy()` must clean up DOM bindings and internal runtime references.

The `MountingEngine` only interacts with the generic `BaseTool` lifecycle and remains independent from internal tool implementation.

Diagram:
`docs/architecture-sketches/v0_2/compositeTool-lifecycle-integration.pdf`

---

### Runtime-dependent Tool
Earlier sketches (`docs/architecture-sketches/v0_2/architecture_v0_2.pdf`) introduced the term `ControlTool` for tools with strong runtime interactions.

After evaluation, no dedicated runtime-specific inheritance structure will be introduced at the current project stage.

Instead, all tools recieve runtime access throug the generic lifecycle:
```JS
    init(config, runtime)
```

This keeps the core architecture simpler while still allowing future extensions if additional specialization becomes necessary.

## Consequences
### Positive
- establishes a clear distinction between lightweight and complex tools
- keeps the `MountingEngine` independent from internal tool structures
- standardizes lifecycle integration across all tool variants
- allows internal tool architectures to evolve without affecting the core system
- enables easier unit testing due to isolated tool structures
- avoids unnecessary abstraction and inheritance complexity at the current project stage
- creates a stable foundation for future validation and runtime integration mechanisms  

### Negative
- lifecycle contracts are currently enforced only by convention
- no strict validation exists for internal tool structures
- `CompositeTool` adds more internal complexity
- controller-based tools may accumulate to many responsibilities if seperation of concerns is not maintained
- some architectural conepts remain theoretical untill more variants are implemented