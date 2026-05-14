/**
 * SearchTool is an adapter between the AppShell and the mountingsystem
 */

import { BaseTool } from "../../core/BaseTool.js";
import { SearchController } from "../../controllers/SearchController.js";

export class SearchTool extends BaseTool {
    constructor() {
        super();

        this.controller = null;
    }

    init(config, runtime) { 
        super.init(config, runtime);

        this.controller = new SearchController();
        this.controller.init(config, runtime);
    }

    render($root) {
        super.render($root);
        this.controller.render($root);
    }

    destroy() {
        this.controller.destroy()

        super.destroy();
    }
}