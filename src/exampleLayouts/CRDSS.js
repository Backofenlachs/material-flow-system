import { SlotNames } from "../core/SlotNames.js";
import { slot, node } from "../core/LayoutFactory.js";

import { HeaderTool } from "../tools/standard/HeaderTool.js";
import { RiskTool } from "../tools/examples/RiskTool/RiskTool.js";
import { FooterTool } from "../tools/standard/FooterTool.js";

export const layoutConfig = {
    layout: node("div", ["app-shell"], [
        slot("header", SlotNames.HEADER, ["app-header", "wireframe"]),
        slot("section", SlotNames.PRIMARY, ["app-content", "wireframe"]),
        slot("footer", SlotNames.FOOTER, ["app-footer", "wireframe"])
    ]),
    mounts: [
        {
            slotName: SlotNames.HEADER,
            toolName: "header",
            toolClass: HeaderTool,
            config: {title: "CR-DSS"},
            activeOnLoad: true
        },
        {
            slotName: SlotNames.PRIMARY,
            toolName: "risk",
            toolClass: RiskTool,
            config: null,
            activeOnLoad: true
        },
        {
            slotName: SlotNames.FOOTER,
            toolName: "footer",
            toolClass: FooterTool,
            config: {text: "Credit Risk - Descision Support System UI v0.1.0 with ui-engine v0.2.0"},
            activeOnLoad: true
        }
    ]
};
