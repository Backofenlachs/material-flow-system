import { AppShell } from "./src/core/AppShell.js";
import { shellConfig } from "./src/core/ShellConfig.js";
import { AppManager } from "./src/core/AppManager.js";

import { HeaderTool } from "./src/components/tools/HeaderTool.js";
import { FooterTool } from "./src/components/tools/FooterTool.js";
import { SidebarTool } from "./src/components/tools/SidebarTool.js";

import { SearchTool } from "./src/components/tools/SearchTool.js";
import { RiskTool } from "./src/components/tools/RiskTool.js"; 

$(document).ready(() => {
    
    const $app = $("#app");
    console.log("JQuery successfully loaded\n app element: ", $app);
    
    const appShell = new AppShell($app);
    appShell.init(shellConfig);

    const appManager = new AppManager(appShell);

    // register all tools
    appManager.registerTool("HeaderTool", HeaderTool);
    appManager.registerTool("SidebarTool", SidebarTool);
    appManager.registerTool("FooterTool", FooterTool);
    appManager.registerTool("SearchTool", SearchTool);
    appManager.registerTool("RiskTool", RiskTool);


    appManager.mountTool("HeaderTool", "header");
    appManager.mountTool("SidebarTool", "sidebar", { appManager }); // pass appManager to SidebarTool for tool switching
    appManager.mountTool("FooterTool", "footer");

    // initiales content tool
    appManager.mountTool("SearchTool", "content");
    
    //const riskTool = new RiskTool($app);
    //riskTool.init();

});



/**
 * Tests für SearchController

    const searchController = new SearchController("#app");
    searchController.init();
*/