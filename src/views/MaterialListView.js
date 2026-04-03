export class MaterialListView {
    constructor(rootSelector) {
        this.root = rootSelector;
    }

    render(materials) {
        const $html = materials.map(m => `
        <div class="card">
            <h3>${m.name}</h3>
            <p>Location: ${m.location}</p>
            <p>Stock: ${m.stock}</p>
        </div>
        `).join("");
        
        this.root.html($html);

    }
}