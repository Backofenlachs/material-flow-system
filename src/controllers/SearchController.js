// model
import { materials } from "../models/SearchModel.js";

// View
import { MaterialListView } from "../views/MaterialListView.js"

export class SearchController {
    constructor(rootSelector) {
        this.materials = materials;
        this.filteredMaterials = materials;
        this.searchTerm = "";

        this.dom = {
            root: $(rootSelector),
            form: null,
            input: null,
            results: null
        };

        this.materialListView = null;
    }

    init() {
        this.renderLayout(); // erstellt html gerüst
        this.setupViews(); // erstellt die einzelnen views und componenten
        this.render();
        this.bindEvents();
    }

    renderLayout() {
        const html = `
            <div class="search-and-results">
                <form class="search-form">
                    <input
                        type="text"
                        class="search-input"
                        placeholder="Material suchen..."
                    />
                    <button type="submit">Search</button>
                </form>
                <div class="results-container"></div>
            </div>
        `;

        this.dom.root.html(html);

        this.dom.form = this.dom.root.find('.search-form');
        this.dom.input = this.dom.root.find('.search-input');
        this.dom.results = this.dom.root.find('.results-container');
    }

    setupViews() {
        this.materialListView = new MaterialListView(this.dom.results);
    }

    render() {
        this.materialListView.render(this.filteredMaterials);
    }

    bindEvents() {
        // Submit event
        this.dom.form.on("submit", (e) => {
            e.preventDefault();
            this.handleSearchInput(this.dom.input.val());
        });

        // Live Search for later
        this.dom.input.on("input", (e) => {
            //console.log("liveSearch...");
        });
    }


    handleSearchInput(value) {
        console.log("start search");
        this.searchTerm = value.trim().toLowerCase();
        this.filteredMaterials = this.filterMaterials(this.searchTerm);
        this.materialListView.render(this.filteredMaterials);
    }

    filterMaterials(searchTerm) {
        if (!searchTerm) {
            return this.materials;
        }

        return this.materials.filter(material =>
            material.name.toLowerCase().includes(searchTerm)
        );
    }


}