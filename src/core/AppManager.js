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
            header: this.appShell.getSlot('header'),
            sidebar: this.appShell.getSlot('sidebar'),
            content: this.appShell.getSlot('content'),
            footer: this.appShell.getSlot('footer')
        };

        this.toolRegistry = new Map();
        this.mountedTools = new Map();
    }

    /**
     * Regestriert ein Tool mit einem eindeutigen Namen(string) und der Tool-Klasse 
     * Die Tool-Klasse muss von BaseTool erben und mindestens init() und render() implementieren
     * 
     * @param {string} toolName 
     * @param {BaseTool} ToolClass 
     */
    registerTool(toolName, ToolClass) {
        if (!toolName || !ToolClass) {
            throw new Error("registerTool benötigt toolName und ToolClass.");
        }

        if ( !(ToolClass.prototype instanceof BaseTool) ) { // check if ToolClass extends BaseTool
            throw new Error(`ToolClass für "${toolName}" muss von BaseTool erben.`);
        }

        this.toolRegistry.set(toolName, ToolClass);
    }

    /**
     * 
     * @param {string} toolName 
     * @param {string} slotName soll noch geändert werden zu einem enum 
     */
    mountTool(toolName, slotName, config=null) {
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

        const toolInstance = new ToolClass($slot, config); 


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

    switchTool(slotName, toolName, config={}) {
        this.unmountTool(slotName);
        this.mountTool(toolName, slotName, config);
    }

    getMountedTool(slotName) {
        return this.mountedTools.get(slotName) || null;
    }
}