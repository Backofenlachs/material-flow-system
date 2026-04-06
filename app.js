//import { SearchTool } from "./src/components/tools/SearchTool.js";
import { RiskTool } from "./src/components/tools/RiskTool.js"; 

import { AppShell } from "./src/core/AppShell.js";
import { AppManager } from "./src/core/AppManager.js";
import { SearchTool } from "./src/components/tools/SearchTool.js";

$(document).ready(() => {
    const $app = $("#app");
    console.log("JQuery successfully loaded\n app element: ", $app);
    
    const appShell = new AppShell($app);
    appShell.init();

    const appManager = new AppManager(appShell);


    appManager.registerTool("SearchTool", SearchTool);
    appManager.mountTool("SearchTool", "content");

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