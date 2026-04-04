//import { SearchController } from "./src/controllers/SearchController.js";

import { AppShell } from "./src/components/layout/AppShell.js";

$(document).ready(() => {
    console.log("JQuery successfully loaded");
    
    const appShell = new AppShell("#app");
    appShell.init();
    

});



/**
 * Tests für SearchController

    const searchController = new SearchController("#app");
    searchController.init();
*/