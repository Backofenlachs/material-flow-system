import { SlotNames } from "./SlotNames.js";
import { node, slot } from "./LayoutFactory.js"

// tools
import { HeaderTool } from "../components/tools/HeaderTool.js";
import { SidebarTool } from "../components/tools/SidebarTool.js";
import { SearchTool } from "../components/tools/SearchTool.js";
import { RiskTool } from "../components/tools/RiskTool.js";
import { FooterTool } from "../components/tools/FooterTool.js";


export const sidebarLayout = {
    layout: node("div", ["app-shell"],[
        slot("header", SlotNames.HEADER, ["app-header", "wireframe"]),
        node("main", ["app-body"], [
            slot("aside", SlotNames.SIDEBAR, ["app-sidebar", "wireframe"]),
            slot("section", SlotNames.CONTENT, ["app-content", "wireframe"]) 
        ]),
        slot("footer", SlotNames.FOOTER, ["app-footer", "wireframe"])
    ]),
    mounts:[
        {   // HeaderTool in HEADER slot
            slotName: SlotNames.HEADER,
            toolName: "header",
            toolClass: HeaderTool,
            config: null,
            activeOnLoad: true
        },
        {   // SidebarTool in SIDEBAR slot
            slotName: SlotNames.SIDEBAR,
            toolName: "sidebar",
            toolClass: SidebarTool,
            config: null,  
            activeOnLoad: true
        },
        {   // SearchTool in CONTENT slot
            slotName: SlotNames.CONTENT,
            toolName: "search",
            toolClass: SearchTool,
            config: null,
            activeOnLoad: true
        },
        {   // RiskTool but just in regestry
            slotName: null, // not mounted by default
            toolName: "risk",
            toolClass: RiskTool,
            config: null,
            activeOnLoad: false // only registered but not mounted on load 
        },
        {   // FooterTool in FOOTER slot
            slotName: SlotNames.FOOTER,
            toolName: "footer",
            config: null,
            toolClass: FooterTool,
            activeOnLoad: true
        }
    ]
};

export const dualLayout = {
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


export const CRDSS = {
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
