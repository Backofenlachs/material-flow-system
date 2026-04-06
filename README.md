# Material Flow System

### Modular UI System for CR-DSS

A lightweight UI system built to create flexible, responsive interfaces for a Credit Risk Decision Support System (CR-DSS).

---

## Core Idea

Build the layout once.
Swap the functionality.

This project separates:

* responsive layout (AppShell)
* feature modules (tools)

The UI structure remains stable while the content changes dynamically.

---

## How it works

The application uses a fixed, responsive layout:

* header
* sidebar
* content
* footer

Instead of building separate pages, different tools are mounted into these areas.

```text
Same layout → different tools → different UI
```

---

## Example (CR-DSS)

Risk Analysis View

* sidebar → navigation
* content → RiskTool
* result → evaluate applicants

Data Exploration View

* sidebar → filters
* content → SearchTool
* result → explore datasets

Future Dashboard

* sidebar → minimal
* content → chart and risk overview tools
* result → aggregated risk insights

The layout stays the same, only the tools change.

---

## Purpose

This system is being developed as a frontend foundation for CR-DSS to enable:

* fast creation of different UI variants
* reusable feature modules
* flexible integration of data sources
* clear separation of layout and logic

---

## Current State

* core system implemented
* SearchTool and RiskTool working
* Sidebar with tool switching in progress

---

## Summary

A responsive UI shell combined with swappable tools, designed to build flexible interfaces for CR-DSS.
