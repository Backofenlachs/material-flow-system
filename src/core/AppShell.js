/**
 * ToDo:
 * 1. AppShell renderd das grundlayout
 * 2. Header, Sidebar, Footer rendert jeweils einfachen Inhalt
 * 3. Search als searchtool erstellen und in content-area mounten
 * 4. erst dann weiter modularisieren
 * 
 * 
  <div class="app-shell">
    <header id="app-header"></header>
    <main class="app-body">
        <aside id="app-sidebar"></aside>
        <section id="app-content"></section>
    </main>
    <footer id="app-footer"></footer>
    </div>

 */

export class AppShell {
    constructor($rootElement) {
        this.dom = {
            root: $rootElement,
            slots: {}
        };
    }

    init(layoutConfig) {
        const html = this.renderNode(layoutConfig);
        this.dom.root.html(html);
        //this.renderLayout();
        this.cacheSlots();
    }


    /**
     * DIese funktion ist reingehackt sollte schöner übersichtlicher geschreiben werden
     * nicht funktion ruft sich selbst auf.
     */
    renderNode(nodeConfig) {
        const {
            tag = "div",
            slot = null,
            id = "",
            classes = [],
            children = []
        } = nodeConfig;

        const classAttr = classes.length ? `class="${classes.join(" ")}"` : "";
        const idAttr = id ? `id="${id}"` : null;
        const slotAttr = slot ? `data-slot="${slot}"` : "";
        
        const childrenHtml = children.map(child => this.renderNode(child)).join("");

        return `
            <${tag} ${idAttr} ${classAttr} ${slotAttr}>
                ${childrenHtml}
            </${tag}>
        `;
    }

    renderLayout() { // old function uses generateSlots
        const html = `
            <div class="app-shell">
                ${this.generateSlot("header", "header", ["app-header", "wireframe"])}
                
                <main class="app-body">
                    ${this.generateSlot("sidebar", "aside", ["app-sidebar", "wireframe"])}
                    ${this.generateSlot("content", "section", ["app-content", "wireframe"])}
                </main>
                
                ${this.generateSlot("footer", "footer", ["app-footer", "wireframe"])}
            </div>
        `;

        this.dom.root.html(html);

        console.log("AppShell: layout rendered");
    }

    generateSlot(slotName, tag = "div", cssClasses = [], domID = "") {
        const classAttr = cssClasses.join(" ");
        const idAttr = domID ? `id="${domID}"` : "";

        return `
            <${tag}
                class="${classAttr}"
                data-slot="${slotName}"
                ${idAttr}
            ></${tag}>
        `;
    }

    cacheSlots() {
        this.dom.root.find("[data-slot]").each((index, element) => {
            const $element = $(element);
            const slotName = $element.data("slot");
            this.dom.slots[slotName] = $element;
        });

        console.log("AppShell: cached slots", this.dom.slots);
    }

    getSlot(slotName) {
        return this.dom.slots[slotName] || null;
    }
}