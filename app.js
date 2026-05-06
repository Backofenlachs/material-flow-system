// core
import { AppShell } from "./src/core/AppShell.js";
import { MountingEngine } from "./src/core/MountingEngine.js";

// configurationFiles
import { sidebarLayout as shellConfig} from "./src/core/ShellConfigs.js" ;
import { SlotNames } from "./src/core/SlotNames.js";

// Tools
import { HeaderTool } from "./src/components/tools/HeaderTool.js";
import { FooterTool } from "./src/components/tools/FooterTool.js";
import { SidebarTool } from "./src/components/tools/SidebarTool.js";
import { SearchTool } from "./src/components/tools/SearchTool.js";
import { RiskTool } from "./src/components/tools/RiskTool.js"; 

$(document).ready(() => {
    
    const $app = $("#app");
    console.log("JQuery successfully loaded\n app element: ", $app);
    
    const appShell = new AppShell($app);
    appShell.init(shellConfig.layout);
    
    const mountingEngine = new MountingEngine(appShell);

    loadLayout(mountingEngine, shellConfig.mounts);

});

function loadLayout(mountingEngine, mounts){

    mounts.forEach((tool) => {
        if (!tool.activeOnLoad) {
            mountingEngine.registerTool(tool.toolName, tool.toolClass);

            return;
        }
        
        mountingEngine.registerTool(tool.toolName, tool.toolClass);
        
        // momentan wird jedem tool mountingEngine übergeben, aber eigentlich sollten nur controllTools das benutzen dürfen
        mountingEngine.mountTool(tool.toolName, tool.slotName, { mountingEngine });
    });
}
