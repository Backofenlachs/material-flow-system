import { SlotNames } from "../core/SlotNames.js";
import { node, slot } from "../core/LayoutFactory.js"

// tools
import { HeaderTool } from "../tools/standard/HeaderTool.js";
import { SearchTool } from "../tools/examples/SearchTool/SearchTool.js";
import { RiskTool } from "../tools/examples/RiskTool/RiskTool.js";


export const layoutConfig = {
    layout: node("div", ["app-shell"], [
        slot("header", SlotNames.HEADER, ["app-header", "wireframe"]),
        node("main", ["app-body"], [
            slot("section", SlotNames.PRIMARY, ["app-content", "wireframe"]),
            slot("section", SlotNames.SECONDARY, ["app-content", "wireframe "])
        ], ["flex-direction: column"])
    ]),
    mounts: [
        {
            slotName: SlotNames.HEADER,
            toolName: "header",
            toolClass: HeaderTool,
            config: null,
            activeOnLoad: true
        },
        {
            slotName: SlotNames.PRIMARY,
            toolName: "search",
            toolClass: SearchTool,
            config: null,
            activeOnLoad: true
        },
        {
            slotName: SlotNames.SECONDARY,
            toolName: "risk",
            toolClass: RiskTool,
            config: null,
            activeOnLoad: true
        }
    ]

};