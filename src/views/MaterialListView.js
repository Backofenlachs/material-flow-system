export class MaterialListView {
    constructor() {
        this.dom = {
            form: null,
            input: null,
            results: null
        };
    }

    render($root) {
        $root.html(this.renderLayout());
        
        this.cacheDom($root);

        return this.dom;
    }

    renderLayout() {
        return `
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
    }

    renderResults(materials)  {
        const html = materials.map(m => `
        <div class="card">
            <h3>${m.name}</h3>
            <p>Location: ${m.location}</p>
            <p>Stock: ${m.stock}</p>
        </div>
        `).join("");
        
        this.dom.results.html(html);
    }

    cacheDom($root) {
        this.dom.form = $root.find('.search-form');
        this.dom.input = $root.find('.search-input');
        this.dom.results = $root.find('.results-container');
    }
}