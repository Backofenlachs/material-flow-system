// core
import { AppController } from "./src/core/AppController.js";

// configurationFiles
import { sidebarLayout as layoutConfig} from "./src/core/ShellConfigs.js" ;


$(document).ready(() => {
    
    const $app = $("#app");
    console.log("JQuery successfully loaded\n app element: ", $app);
    
    const appController = new AppController();
    appController.init($app, layoutConfig);

});
