import { BaseTool } from "../../core/BaseTool.js";

export class SidebarTool extends BaseTool {
    constructor($rootElement, config = {}) {
        super($rootElement);

        this.appManager = config.appManager || null;

        this.navItems = [
            { label: "Search", toolName: "SearchTool" },
            { label: "Risk Assessment", toolName: "RiskTool" }
        ];
    }

    init() {
        this.bindEvents();
    }

    render() {
        const navItemsHtml = this.navItems.map((item) => `
            <li class="sidebar-nav__item">
                <a href="#" class="sidebar-nav__link" data-tool="${item.toolName}">
                    ${item.label}
                </a>
            </li>
        `).join("");

        this.$root.html(`
            <div class="sidebar-tool wireframe">
                <nav class="sidebar-tool__nav">
                    <ul class="sidebar-nav">
                        ${navItemsHtml}
                    </ul>
                </nav>
            </div>
        `);
    }

    bindEvents() {
        this.$root.on("click", ".sidebar-nav__link", (event) => {
            event.preventDefault();

            const $link = $(event.currentTarget);
            const toolName = $link.data("tool");

            if (!this.appManager) {
                console.warn("SidebarTool: appManager fehlt.");
                return;
            }

            this.appManager.switchTool("content", toolName);
        });
    }

    destroy() {
        this.$root.off("click", ".sidebar-nav__link");
        this.$root.empty();
    }
}