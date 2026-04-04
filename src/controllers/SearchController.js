// model
import { mockData } from "../models/mockData.js";
import { SearchModel } from "../models/SearchModel.js";

// View
import { MaterialListView } from "../views/MaterialListView.js"

export class SearchController {
    /*constructor(rootSelector) {

        this.dom = {
            root: $(rootSelector),
            form: null,
            input: null,
            results: null
        };

        this.model = new SearchModel(mockData);
        this.view = null;
    }*/

    constructor($rootElement) {

        this.dom = {
            root: $rootElement,
            form: null,
            input: null,
            results: null
        };

        this.model = new SearchModel(mockData);
        this.view = null;

    }

    init() {
        this.renderLayout(); // erstellt html gerüst
        this.setupViews(); // erstellt die einzelnen views und componenten
        this.render(); // momentan nur für erstes rendering. später wenn filter angewendet werden soll das hier ausgebaut werden
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
        this.view = new MaterialListView(this.dom.results);
    }

    render() {
        this.view.render(this.model.getCurrentData());
    }

    bindEvents() {
        // Submit event
        this.dom.form.on("submit", (e) => {
            e.preventDefault();
            this.executeSearch(this.dom.input.val());
        });

        // Live Search for later
        this.dom.input.on("input", (e) => {
            //console.log("liveSearch...");
        });
    }

    
    executeSearch(searchTerm) {
        console.log("start search");

        const results = this.model.fetchMaterials(searchTerm);
        this.view.render(results);
    }

    /*
    filterMaterials(searchTerm) {
        if (!searchTerm) {
            return this.materials;
        }

        return this.materials.filter(material =>
            material.name.toLowerCase().includes(searchTerm)
        );
    }*/


}