import { AppShell } from "./src/core/AppShell.js";
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
    appShell.init();

    const appManager = new AppManager(appShell);

    // Header
    appManager.registerTool("HeaderTool", HeaderTool);
    appManager.mountTool("HeaderTool", "header");

    // Sidebar
    appManager.registerTool("SidebarTool", SidebarTool);
    appManager.mountTool("SidebarTool", "sidebar");

    // Footer
    appManager.registerTool("FooterTool", FooterTool);
    appManager.mountTool("FooterTool", "footer");

    // SearchTool
    appManager.registerTool("SearchTool", SearchTool);
    appManager.mountTool("SearchTool", "content");

    // RiskTool
    appManager.registerTool("RiskTool", RiskTool);
    appManager.mountTool("RiskTool", "content");

    
    //const riskTool = new RiskTool($app);
    //riskTool.init();

});



/**
 * Tests für SearchController

    const searchController = new SearchController("#app");
    searchController.init();
*/