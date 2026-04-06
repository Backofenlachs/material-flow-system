import { BaseTool } from "../../core/BaseTool.js";

export class HeaderTool extends BaseTool {
    constructor($rootElement, title) {
        super($rootElement);

        this.title = title || "Material Flow System";
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