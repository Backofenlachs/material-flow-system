import { SlotNames } from "./SlotNames.js";
import { node, slot } from "./LayoutFactory.js"

// tools
import { HeaderTool } from "../components/tools/HeaderTool.js";
import { SidebarTool } from "../components/tools/SidebarTool.js";
import { SearchTool } from "../components/tools/SearchTool.js";
import { RiskTool } from "../components/tools/RiskTool.js";
import { FooterTool } from "../components/tools/FooterTool.js";


export const testLayout = {
    layout: node("div", ["app-Shell"], [
        slot("header", SlotNames.HEADER, ["app-header", "wireframe"]),
        slot("footer", SlotNames.FOOTER, ["app-footer", "wireframe"])
    ]),
    mounts: [
        {
            slotName: SlotNames.HEADER,
            toolName: "header",
            toolClass: HeaderTool,
            config: {title: "UI-Library"},
            activeOnLoad: true
        },
        {
            slotName: SlotNames.FOOTER,
            toolName: "footer",
            toolClass: FooterTool,
            config: {text: "@ 2026 ui-library. All rights reserved."},
            activeOnLoad: true
        }
    ]
};

// SearchTool, RiskTool und SidebarTool funktionieren gerade nicht
// wegen migration der livecycles (siehe ADR-0005)
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
            config: null,  // SidebarTool benötigt eigentlich mountingEngine, aber wenn das hier übergeben wird, existiert er noch nicht. Daher wird mountingEngine direkt beim mounten übergeben. Das ist momentan etwas inkonsistent, aber es funktioniert für den Prototypen.
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
            slot("section", SlotNames.SEARCH, ["app-content", "wireframe"]),
            slot("section", SlotNames.RISK, ["app-content", "wireframe "])
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
            slotName: SlotNames.SEARCH,
            toolName: "search",
            toolClass: SearchTool,
            config: null,
            activeOnLoad: true
        },
        {
            slotName: SlotNames.RISK,
            toolName: "risk",
            toolClass: RiskTool,
            config: null,
            activeOnLoad: true
        }
    ]

};