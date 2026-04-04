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

import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Sidebar } from "./Sidebar.js";
import { ContentArea } from "./ContentArea.js";

export class AppShell {
    constructor(rootSelector) {
        this.dom = {
            root: $(rootSelector),
            header: null,
            sidebar: null,
            content: null,
            footer: null
        }

        this.header = null;
        this.sidebar = null;
        this.contentArea = null;
        this.footer = null;
    }

    init() {
        this.renderLayout();
        this.setupComponents();
        this.render();
    }

    renderLayout() {
        const html = `
            <div class="app-shell">
                <header class="app-header wireframe"></header>
                <main class="app-body">
                    <aside class="app-sidebar wireframe"></aside>
                    <section class="app-content wireframe"></section>
                </main>
                <footer class="app-footer wireframe"></footer>
            </div>
        `;

        this.dom.root.html(html);

        // Cache DOM elements
        this.dom.header = this.dom.root.find(".app-header");
        this.dom.sidebar = this.dom.root.find(".app-sidebar");
        this.dom.content = this.dom.root.find(".app-content");
        this.dom.footer = this.dom.root.find(".app-footer");

        console.log("AppShell: Layout rendered and DOM elements cached \n Cached DOM elements: ", this.dom);
    }

    setupComponents() {
        this.header = new Header(this.dom.header);
        this.sidebar = new Sidebar(this.dom.sidebar);
        this.contentArea = new ContentArea(this.dom.content);
        this.footer = new Footer(this.dom.footer);
    }

    render() {
        this.header.render();
        this.sidebar.render();
        this.contentArea.render();
        this.footer.render();
    }
}