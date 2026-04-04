/**
 * SearchTool is an adapter between the AppShell and the mountingsystem
 */
export class SearchTool {
    constructor($rootElement) {
        this.$root = $rootElement;
        this.controller = null;
    }

    init() { 
        this.controller = new SearchController(this.$root);
        this.controller.init();
    }

    destroy() {
        // später: event listener entfernen etc.
    }

    getController() {
        return this.controller;
    }
}