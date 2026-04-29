# ADR-0003: Standardizing Layout Configuration via LayoutFactory functions

## Status
Proposed

Date: 2026-04-28

Author: Perseus Palma Jacobs

---

For an brief overwiev look ADR.0001-project-foundation.md

---

## Context

- At the moment, the AppShell provides the shell layout based on the selected `shelConfig.js`
- The layout is defined as a JS object representing a tree structure.
- This structure is processed via `AppManager.init(layoutConfig) -> AppShell.renderNode(nodeConfig)`, which is a self calling (recursive) function.

---

## Problem

- Currently, to create a correct `ShellConfig` object, the developer needs to understand how AppShell.renderNode() works internally, including which keys and values are processed.
- This leads to a **tight coupling between configuration and render logic.**
- The readabillity of the `ShellConfig` object is poor due to deeply nested objects and arrays.
- The structure introduces a lot of overhead and feels complex and overwhelming.

---

## Decision

- To address this problem, two helper functions are introduced in `LayoutFactory.js` as a first step towards a more formal contract for `ShellConfig`.
```JS 
    node(tag = "", classes = [], children = [])
    slot(tag = "", slotName = "", classes = [], children = [])    
```
- These functions abstract the creation of default-nodes and slot-nodes.
- This serves as an **initial step towards standardisation** and improved developer experience.

---

## Consequences

### Positiv
- Imporves readability of the `ShellConfig` object
- Reduces code size (approx. >50% fewer lines in layout definitions)
- Developers no longer need to understand internal `AppShell` rendering logic
- Introduces a first level of structure and standardisation

### Negativ
- Requires proper usage of `LayoutFactory.js` (`node()` for nodes, `slot()` for slotNodes)
- The function still return plain JS obects
- This is only a helper abstraction, not a strict contract - developers can still bypass it

---

## Future Work

Since the project is written in Vanilla JavaScript, there is no built-in type safety for layout configuration objects.

To avoid common problems with missing standardisation and invalid object structures, the Layout Factory should later provide:

- validation of required fields
- type checks for function arguments
- clear error messages for invalid layout definitions

This would move the Layout Factory closer to a formal contract, instead of being only a helper abstraction.

-- 

## References

For a visual usage/implementation of the LayoutFactory see:  
`docs/architecture-sketches/v0_2/`