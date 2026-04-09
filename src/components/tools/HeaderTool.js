import { BaseTool } from "../../core/BaseTool.js";

export class HeaderTool extends BaseTool {
    constructor($rootElement, config={}) {
        super($rootElement);
        this.title = "Material Flow System";

        //console.log(`HeaderTool: constructor: ${config.title} | title: ${this.title}`);
    }

    init() {
        // aktuell kein setup nötig, da Header nur statischen Text anzeigt
    }

    render() {
        const $html = $(`
            <h1>${this.title}</h1>
        `);

        this.$root.html($html);
    }

    destroy() {
        this.$root.empty();
    }

}