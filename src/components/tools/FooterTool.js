import { BaseTool } from "../../core/BaseTool.js";


export class FooterTool extends BaseTool {
    constructor($rootElement) {
        super($rootElement);

        this.text = "© 2026 Material Flow System. All rights reserved. ";
    }  

    init() {
        // aktuell kein setup nötig, da Footer nur statischen Text anzeigt
    }
    
    render() {
        const $html = $(`
            <p>${this.text}</p>
        `);

        this.$root.html($html);
    }

    destroy() {
        this.$root.empty();
    }
}