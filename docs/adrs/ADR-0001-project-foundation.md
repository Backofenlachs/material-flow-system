# ADR-0001: Project Foundation and Architectural Direction

## Status
Accepted

Date: 2026-04-22  
Author: Perseus Palma Jacobs

---

## Context

This project started with the intention to build a flexible UI system based on an MVC-like structure.

The initial idea was to create a UI where:
- different models (e.g. API-based or frontend filtering logic) can be used interchangeably
- multiple views can represent the same underlying data in different ways
- the system helps to better understand client-side rendering (CSR)

During this process, the idea evolved into building a dedicated frontend library
for the Credit Risk Decision Support System (CR-DSS).

The goal became:
- to quickly compose different user interfaces
- to combine different views and data sources
- to enable flexible UI configurations for different contexts (e.g. desktop, mobile, internal, public)

This led to the decision to design a **tool-based UI library with a mounting core**.

A key requirement is that the system should be **configuration-driven**, allowing dynamic composition
of layouts and tools based on use case and context.

---

## Problem

A system is needed that allows:

- fast composition of user interfaces using configurable building blocks
- dynamic combination of tools, data sources, and views
- easy creation of new tools that:
  - reuse existing models and views, or
  - define their own internal logic, or
  - combine both approaches

The system should enable rapid UI iteration and make frontend functionality easily exchangeable.

---

## Decision

The architecture is based on three core layers:

### 1. Structural Layer (AppShell)

- Responsible for rendering the base layout
- Defines slots as mounting points
- Contains no business logic

---

### 2. Tool Abstraction (BaseTool)

- Each tool follows a defined lifecycle:
  - `init()`
  - `render()`
  - `destroy()`
- BaseTool acts as a contract for all mountable tools
- Tools can:
  - control different models and views
  - dynamically switch or update internal behavior at runtime (via a controller)

---

### 3. Mounting Layer

- Connects the structural layer and tools
- Responsible for mounting tools into slots
- Enables separation of concerns between layout and feature logic
- Improves testability and extensibility

---

## Consequences

### Positive

- Configuration-driven and flexible UI composition
- Reusable tools and components
- Clear separation of concerns
- Strong foundation for future extensions
- Fast iteration of layouts and feature combinations
- Applicable beyond CR-DSS (general UI composition system)

---

### Negative

- Increased architectural complexity
- Higher initial overhead compared to building a single UI
- Requires clear discipline in defining responsibilities

---

## Notes
This ADR establishes the foundation for further architectural decisions.

The early design process and initial ideas can be found in:

- `architecture-sketches/v0_1/architecturev0_1.pdf`
- `docs/v0_1/` (finalized architecture documentation for version 0.1)

These documents illustrate the evolution from initial MVC-based concepts
to the current tool-based and mounting-driven architecture.

Future ADRs will refine specific aspects of the system, such as:
- mounting behavior
- configuration model
- tool roles and responsibilities