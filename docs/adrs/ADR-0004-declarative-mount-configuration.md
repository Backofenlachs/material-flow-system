# ADR-0004: Declarative Mount Configuration

## Status
proposed

Date: 2026-04-30

Author: Perseus Palma Jacobs

---

## Context 

Currently, the ShellLayout defines the structural layout of the application via the `ShellConfig`.

The mounting logic, however, is defined seperately in `app.js`:

- The developer creates a `ShellConfig` object
- `AppShell` is initialized with this configuration
- The developer must then manually orchestrate the mounting process:
    1. Register all tools via `AppManager.registerTool(toolName, toolClass)`
    2. Mount all active tools via `AppManager.mountTool(toolName, slotName, options)`

Example of the current approach:

```JS
    // creates the Layout
    const shellConfig = node("div", ["app-shell"],[
        slot("header", SlotNames.HEADER, ["app-header", "wireframe"]),
        node("main", ["app-body"], [
            slot("aside", SlotNames.SIDEBAR, ["app-sidebar", "wireframe"]),
            slot("section", SlotNames.CONTENT, ["app-content", "wireframe"]) 
        ]),
        slot("footer", SlotNames.FOOTER, ["app-footer", "wireframe"])
    ]);

    // AppShell creates AppShell and caches dom and slots
    const appShell = new AppShell($('#app')).init(shellConfig);
    // pases appShell to AppManager for slots;
    const appManager = new AppManager(appShell);

    // registers all used tools that will be used inside app
    appManager.registerTool("header", HeaderTool);
    appManager.registerTool("sidebar", SidebarTool);
    appmanager.registerTool("footer", FooterTool);
    appManager.registerTool("search", SearchTool);
    appManager.registerTool("risk", RiskTool);

    // now mounts all active tools on slots via SlotNames and configurates
    appManager.mountTool("header", SlotNames.HEADER);
    appManager.mountTool("sidebar", SlotNames.SIDEBAR, { appManager }); // pass appManager to SidebarTool for tool switching
    appManager.mountTool("search", SlotNames.CONTENT);
    appManager.mountTol("footer", SlotNames.FOOTER);

    // YAY!! NOW THE INTERAKTIVE APP WORKS
```

This leads to a split definition:
- The layout is defined in `ShellConfig`
- The mounting plan is defined imperatively in `app.js`

Regestration and mounting are conceptually diffrent concerns and remain important for astable core design.

---

## Problem

- Layout and mounting are defined seperately and must be manually orchestrated
- The developer experience feels like low-level bootstrap code
 Core functionality is directly manipulated in application code
- Repetitive and verbose setup for every application
- Increased risk of incorrect usage and typos
- Poor scalability as UI complexity grows

The current approach contradicts the goal of a configuration-drivven, declarative UI system.

---

## Decision

As a first step towards a smaller API and improved developer experience, a declarative mounting configuration will be introduced.

The `ShellConfig` will become the central configuration object that contains:

- the layout definition
- the inital mounting plan

Example:
```JS
    const shellConfig = {
        layout: node("div", ["app-shell"],[ ... ]),
        mounts: [
            {
                slotName: SlotName.HEADER, 
                toolName: "header", 
                toolClass: HeaderTool, 
                options:{},
                activeOnLoad: true
            },
            ...
        ]
    }
```

This allows the application structure and inital tool composition to be defined in a single declarative configuration.

Registration and mounting remain conceptually separate steps, but are now declared together and executed internally by the core.

---

## Consequences

### Positiv
- First step towards a fully configuration-driven system
- Reduced manual bootsrap code
- Clear and centralized definition of applöication structure
- Improved readability of layout and initial tool composition
- Smaller and more focused public API
- Better developer experience

### Negativ
- Larger configuration object
- Increased need for validation to prevent misuse
- Layout and mounting are colocated, which may increase complexity in the configuration
