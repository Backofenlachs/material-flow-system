import { SlotNames } from "../core/SlotNames.js";
import { node, slot} from "../core/LayoutFactory.js"

// tools
import { HeaderTool } from "../tools/standard/HeaderTool.js";
import { SidebarTool } from "../tools/standard/SidebarTool.js";
import { SearchTool } from "../tools/examples/SearchTool/SearchTool.js";
import { RiskTool } from "../tools/examples/RiskTool/RiskTool.js";
import { FooterTool } from "../tools/standard/FooterTool.js";

export const layoutConfig = {
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