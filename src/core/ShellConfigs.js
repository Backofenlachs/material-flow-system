import { SlotNames } from "./SlotNames.js";

export const sidebarLayout = {
    tag: "div",
    classes: ["app-shell"],
    children: [
        {
            tag: "header",
            slot: SlotNames.HEADER,
            classes: ["app-header", "wireframe"]
        },
        {
            tag: "main",
            classes: ["app-body"],
            children: [
                {
                    tag: "aside",
                    slot: SlotNames.SIDEBAR,
                    classes: ["app-sidebar", "wireframe"]
                },
                {
                    tag: "section",
                    slot: SlotNames.CONTENT,
                    classes: ["app-content", "wireframe"]
                }
            ]
        },
        {
            tag: "footer",
            slot: SlotNames.FOOTER,
            classes: ["app-footer", "wireframe"]
        }
    ]
};

export const dualLayout = {
    tag: "div",
    classes: ["app-shell"],
    children: [
        {
            tag: "header",
            slot: SlotNames.HEADER,
            classes: ["app-header", "wireframe"]
        },
        {
            tag: "main",
            classes: ["app-body"],
            style: ["flex-direction:column"],
            children: [
                {
                    tag: "left-section",
                    slot: SlotNames.SEARCH,
                    classes: ["app-content", "wireframe"]
                },
                {
                    tag: "right-section",
                    slot: SlotNames.RISK,
                    classes: ["app-content", "wireframe"]
                }
            ]
            
        }
    ]
};