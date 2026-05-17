// model
import { mockData } from "./mockData.js";
import { SearchModel } from "./SearchModel.js";

// View
import { MaterialListView } from "./MaterialListView.js";

/**
 * SearchController
 * 
 * Searchcontroller
 * - orchestrates model / view
 * - binds events
 * - holds the $root
 * - destroys itself
 * 
 * View holds its dom. and renders in SearchController.$root
 */
export class SearchController {    
    constructor() {
        this.$root = null

        this.model = null;
        this.view = null;

    }

    // config and runtime for future use.
    init(config, runtime) {
        this.view = new MaterialListView();
        this.model = new SearchModel(mockData);
    }

    render($root) {
        this.$root = $root;

        const rendered_dom = this.view.render(this.$root);

        this.bindEvents(rendered_dom);
        
        this.view.renderResults(this.model.fetchMaterials(""));
    }

    bindEvents(dom) {
        // Submit event
        dom.form.on("submit", (e) => {
            console.log("cool")
            e.preventDefault();
            this.executeSearch(dom.input.val());
        });

        // Live Search for later
        dom.input.on("input", (e) => {
            //console.log("liveSearch...");
        });
    }

    
    executeSearch(searchTerm) {
        console.log("start search");

        const results = this.model.fetchMaterials(searchTerm);
        this.view.renderResults(results);
    }

    destroy() {
        this.$root = null;
        this.model = null;
        
        if (!this.view?.dom) return;

        this.view.dom.form?.off("submit");
        this.view.dom.input?.off("input");
        
        this.view = null;
    }
}