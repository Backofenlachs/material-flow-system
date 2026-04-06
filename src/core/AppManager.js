/**
 * Erstmal funktionsfähig
 * dann mit interfaces und patterns weiter modularisieren
 * 
 * 1. AppShell mit Header, Sidebar, Content und Footer erstellen
 * 2. AppManager erstellen, der die Slots verwaltet und Tools mounten/unmounten kann
 */

import { BaseTool } from "./BaseTool.js";

export class AppManager {
    constructor(appShell) {
        this.appShell = appShell;

        this.slots = {
            header: this.appShell.getHeaderSlot(),
            sidebar: this.appShell.getSidebarSlot(),
            content: this.appShell.getContentSlot(),
            footer: this.appShell.getFooterSlot()
        };

        this.toolRegistry = new Map();
        this.mountedTools = new Map();
    }

    registerTool(toolName, ToolClass) {
        if (!toolName || !ToolClass) {
            throw new Error("registerTool benötigt toolName und ToolClass.");
        }

        if ( !(ToolClass.prototype instanceof BaseTool) ) { // check if ToolClass extends BaseTool
            throw new Error(`ToolClass für "${toolName}" muss von BaseTool erben.`);
        }

        this.toolRegistry.set(toolName, ToolClass);
    }

    mountTool(toolName, slotName) {
        const ToolClass = this.toolRegistry.get(toolName);
        const $slot = this.slots[slotName];

        if (!ToolClass) {
            throw new Error(`Tool "${toolName}" ist nicht registriert.`);
        }

        if (!$slot) {
            throw new Error(`Slot "${slotName}" existiert nicht.`);
        }

        if (this.mountedTools.has(slotName)) {
            this.unmountTool(slotName);
        }

        const toolInstance = new ToolClass($slot);


        if (typeof toolInstance.init === "function") {
            toolInstance.init();
        }

        if (typeof toolInstance.render === "function") {
            toolInstance.render();
        }

        this.mountedTools.set(slotName, {
            name: toolName,
            instance: toolInstance
        });
    }

    unmountTool(slotName) {
        const mounted = this.mountedTools.get(slotName);

        if (!mounted) return;

        const { instance } = mounted;

        if (typeof instance.destroy === "function") {
            instance.destroy();
        }

        this.slots[slotName].empty();
        this.mountedTools.delete(slotName);
    }

    getMountedTool(slotName) {
        return this.mountedTools.get(slotName) || null;
    }
}