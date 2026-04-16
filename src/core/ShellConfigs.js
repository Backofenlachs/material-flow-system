export const sidebarLayout = {
    tag: "div",
    classes: ["app-shell"],
    children: [
        {
            tag: "header",
            slot: "header",
            classes: ["app-header", "wireframe"]
        },
        {
            tag: "main",
            classes: ["app-body"],
            children: [
                {
                    tag: "aside",
                    slot: "sidebar",
                    classes: ["app-sidebar", "wireframe"]
                },
                {
                    tag: "section",
                    slot: "content",
                    classes: ["app-content", "wireframe"]
                }
            ]
        },
        {
            tag: "footer",
            slot: "footer",
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
            slot: "header",
            classes: ["app-header", "wireframe"]
        },
        {
            tag: "main",
            classes: ["app-body"],
            style: ["flex-direction:column"],
            children: [
                {
                    tag: "left-section",
                    slot: "search",
                    classes: ["app-content", "wireframe"]
                },
                {
                    tag: "right-section",
                    slot: "risk",
                    classes: ["app-content", "wireframe"]
                }
            ]
            
        }
    ]
};