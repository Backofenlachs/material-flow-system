// core
import { MountingEngine } from "./MountingEngine.js";
import { AppShell } from "./AppShell.js";


export class AppController {
    constructor() {
        // runtime
        this.appShell = null
        this.mountingEngine = null;
        this.layoutConfig = null;

        // states
        this.initialized = false;
    }

    init($rootElement , layoutConfig) {
        // validating $rootElement as JQuery object
        if (!$rootElement || !$rootElement.jquery || $rootElement.length === 0) {
            throw new Error(
                "[AppController] Invalid root element: expected jQuery object"
            );
        }

        // checking layoutConfig is set properly
        this.validateLayoutConfig(layoutConfig);
        
        // only one init per AppController posiible.
        if (this.initialized) {
            throw new Error(
                "[AppController] Already initialized"
            );
        }

        this.layoutConfig = layoutConfig;

        // App Shell
        this.appShell = new AppShell($rootElement);
        this.appShell.init(this.layoutConfig.layout);

        // mountingEngine gets slots from appShell
        this.mountingEngine = new MountingEngine(this.appShell);
        
        
        // register everytool tool from appShell.mounts in toolRegestry
        this.layoutConfig.mounts.forEach((tool) => {
            this.mountingEngine.registerTool(tool.toolName, tool.toolClass);
            
        });

        // mount all aktive tools based on layoutConfig actieveOnload=true
        this.layoutConfig.mounts.forEach((tool) =>  {
            if (!tool.activeOnLoad) {
                return
            }

            
            this.mountingEngine.mountTool(tool.toolName, tool.slotName, { mountingEngine: this.mountingEngine});

        });

        this.initialized = true;
    }

    destroy(){
        this.mountingEngine.destroy();
        this.appShell.destroy();
        
        this.layoutConfig = null;
        this.mountingEngine = null;
        this.appShell = null;
    }

    validateLayoutConfig(layoutConfig) {
        if(!layoutConfig || typeof layoutConfig !== "object") {
            throw new Error(
                "[AppController] layoutConfig must be an object"
            );
        }

        if(!layoutConfig.layout || typeof layoutConfig.layout !== "object") {
            throw new Error(
                "[AppController] layoutConfig: layoutConfig.layout must be an object"
            );
        }

        if(!Array.isArray(layoutConfig.mounts)) {
            throw new Error(
                "[AppController] layoutConfig.mounts must be an array"
            );
        }
    }
}