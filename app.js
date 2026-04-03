import { SearchController } from "./src/controllers/SearchController.js";

$(document).ready(() => {
    console.log("JQuery successfully loaded");
    
    const searchController = new SearchController("#app");
    searchController.init();

});