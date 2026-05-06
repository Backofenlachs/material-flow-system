# ADR-0005: Runetime Dependencie injection for Tools

## Status
proposed

Date: 2026-05-06

Author: Perseus Palma Jacobs

aufbauend auf: ADR-0004: declarative-mount-configuration.md

## Context
ADR-0004 Introduced an enhanced deklarative Konfiguration. we decieded to extend the `Shell Config`about. ShellConfig.layout, Shellconfig.mounts.

Current lifecycle:
```
ShellConfig → AppShell → AppManager → register → mounting
                                     ↑
                               mount.options (appManager)
```

## Problem
But one Problem still remains. the injection of Dependencies like the appManager while runtime. 

-> needed at the moment especially by ControlTools like sidebarTool: calls appManager.switch(tool)



## Descision

1frst-step: (with workaround)
```JS
mounting:
mount(toolConfig) {
    const instance = new toolConfig.toolClass();

    const runtime = {
        appManager: this,
    };

    instance.init(toolConfig.options, runtime);
}

init(options, { appManager }) {
    this.appManager = appManager;
}
```


2nd step
```JS
const runtimeContext = {
    appManager,
    eventBus
    // later: router, state, service
}

toolInstance.init({
    config: mount.options,
    runtime: {
        appManager,
        eventBus
    }
})

const handlers = {
    switchTool: (toolName) => appManager.mountTool(toolName)
};
```

masterplan: = runtime : eventbus (sevicelayer)
```JS
// Erweiterung der ADR-0004 Konfiguration
const shellConfig = {
    layout: node("div", ...),
    // NEU: Zentrale Dependencies für alle Tools
    services: {
        api: new ApiService(),
        events: new EventBus()
    },
    mounts: [
        {
            slotName: SlotName.SIDEBAR,
            toolName: "sidebar",
            toolClass: SidebarTool,
            // In ADR-0004 stand hier noch: options: { appManager }
            // NEU: Dependencies werden über Keys deklariert
            inject: ["api", "appManager"] 
        }
    ]
}
```

## Consequences

### Positive

### Negative