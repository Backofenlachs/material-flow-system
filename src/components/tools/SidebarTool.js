import { BaseTool } from "../../core/BaseTool.js";

export class SidebarTool extends BaseTool {
    constructor($rootElement) {
        super($rootElement);
    }

    init() {
        // aktuell kein setup nötig, da Sidebar nur statischen Inhalt anzeigt
    }

    render() {
        const $html = $(`
            <nav>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Materials</a></li>
                    <li><a href="#">Suppliers</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        `);

        this.$root.html($html);
    }

}