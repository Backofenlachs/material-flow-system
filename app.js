//import { SearchController } from "./src/controllers/SearchController.js";
//import { RiskTool } from "./src/components/tools/RiskTool.js"; 

import { AppShell } from "./src/components/layout/AppShell.js";

$(document).ready(() => {
    const $app = $("#app");
    console.log("JQuery successfully loaded\n app element: ", $app);
    
    const appShell = new AppShell($app);
    appShell.init();

    
    //const riskTool = new RiskTool($app);
    //riskTool.init();

});



/**
 * Tests für SearchController

    const searchController = new SearchController("#app");
    searchController.init();
*/