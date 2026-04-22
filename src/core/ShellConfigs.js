import { SlotNames } from "./SlotNames.js";
import { node, slot } from "./LayoutFactory.js"


export const sidebarLayout = node("div", ["app-shell"],[
    slot("header", SlotNames.HEADER, ["app-header", "wireframe"]),
    node("main", ["app-body"], [
        slot("aside", SlotNames.SIDEBAR, ["app-sidebar", "wireframe"]),
        slot("section", SlotNames.CONTENT, ["app-content", "wireframe"]) 
    ]),
    slot("footer", SlotNames.FOOTER, ["app-footer", "wireframe"])
]);

export const dualLayout = node("div", ["app-shell"], [
    slot("header", SlotNames.HEADER, ["app-header", "wireframe"]),
    node("main", ["app-body"], [
        slot("section", SlotNames.SEARCH, ["app-content", "wireframe"]),
        slot("section", SlotNames.RISK, ["app-content", "wireframe "])
    ], ["flex-direction: column"])
]);
