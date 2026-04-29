# ADR-0002: Use jQuery for DOM Manipulation

## Status
Accepted

Date: 2026-04-22  

Author: Perseus Palma Jacobs

---

## Context

The UI-Library uses direct DOM manipulation without a frontend framework or virtual DOM.

A simple and familiar utility is needed to handle common DOM operations.

---

## Problem

Native DOM APIs can be verbose and reduce readability, especially for event handling and updates.

---

## Decision

Use **jQuery (v4)** as a lightweight utility for:

- DOM selection and updates
- event handling

jQuery is included locally under `src/lib/` to keep the library standalone.  
This requires manual updates of the library version when needed.

---

## Consequences

### Positive

- Less boilerplate
- Improved readability
- Faster development

### Negative

- External dependency
- No reactive system
- Manual library updates required

---

## Notes

This is a pragmatic decision.  
The focus is on architecture, not framework selection.