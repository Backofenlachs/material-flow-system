/**
 * SearchTool is an adapter between the AppShell and the mountingsystem
 */

import { BaseTool } from "../../core/BaseTool.js";
import { SearchController } from "../../controllers/SearchController.js";

export class SearchTool extends BaseTool {
    constructor($rootElement) {
        super($rootElement);

        this.controller = null;
    }

    init() { 
        this.controller = new SearchController(this.$root);
        this.controller.init();
    }

    render() {
        if (this.controller) {
            this.controller.render();
        }
    }

    destroy() {
        // später: event listener entfernen etc.
    }

    getController() {
        return this.controller;
    }
}