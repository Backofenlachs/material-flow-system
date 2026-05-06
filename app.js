// core
import { AppShell } from "./src/core/AppShell.js";
import { AppManager } from "./src/core/AppManager.js";

// configurationFiles
import { dualLayout as shellConfig} from "./src/core/ShellConfigs.js" ;
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
    
    const appManager = new AppManager(appShell);

    loadLayout(appManager, shellConfig.mounts);

});

function loadLayout(appManager, mounts){

    mounts.forEach((tool) => {
        console.log(`tool: ${tool.toolName} ${tool}`);
        if (!tool.activeOnLoad) {
            appManager.registerTool(tool.toolName, tool.toolClass);

            return;
        }
        appManager.registerTool(tool.toolName, tool.toolClass);
        
        // momentan wird jedem tool appManager übergeben, aber eigentlich sollten nur controllTools das benutzen dürfen
        appManager.mountTool(tool.toolName, tool.slotName, { appManager });
    });
}
