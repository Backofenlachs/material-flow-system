/*
 * LayoutFactory
 * 
 * Currently the LayoutFactory acts as helper module to build valid LayoutObjects. 
 * that can be translated by the AppShell class.
 * 
 * These helper functions are the first step toward a more formal contract for ShellConfig generation.
 * 
 * The goal is to standadize layout objects and significantly improve their readability.
 * 
 * 
 * Note: This structrue is not final yet. In future, a dedicated Layout class may be introduced as an
 * alternative, espacially for dynamic or runtime layout manipulation.
 * 
 * Note:
 * The optional style field is currently intended as a temporary escape hatch
 * for quick layout prototyping. Regular styling should still be handled via CSS classes.
*/


export function node(tag="div", classes=[], children=[], style=null) {

     // --- tag validation ---
    if (typeof tag !== "string" || tag.trim() === "") {
        throw new Error(`[LayoutFactory.slot] Invalid "tag": expected non-empty string, got ${typeof tag}`);
    }

    // --- classes validation ---
    if (!Array.isArray(classes)) {
        throw new Error(`[LayoutFactory.slot] Invalid "classes": expected array of strings, got ${typeof classes}`);
    }

    classes.forEach((cls, index) => {
        if (typeof cls !== "string") {
            throw new Error(`[LayoutFactory.slot] Invalid class at index ${index}: expected string, got ${typeof cls}`);
        }
    });

    // --- children validation ---
    if (!Array.isArray(children)) {
        throw new Error (`[LayoutFactory.slot] Invalid "children": expected array, got ${typeof children}`);
    }

    children.forEach((child, index) => {
        if (typeof child !== "object" || child === null) {
            throw new Error(`[LayoutFactory.slot] Invalid child at index ${index}: expected object, got ${typeof child}`);
        }
    });

    // --- style reminder ---
    if (style !== null && !Array.isArray(style)) {
        throw new Error(`[LayoutFactory.node] "style" is currently only for fast prototyping. Regular styling should be done via css classes.`);
    }


    return {
        tag: tag,
        classes: classes,
        children: children,
        style: style
    };
}

export function slot(tag="div", slotName, classes=[], children=[]) {

    // --- tag validation ---
    if (typeof tag !== "string" || tag.trim() === "") {
        throw new Error(`[LayoutFactory.slot] Invalid "tag": expected non-empty string, got ${typeof tag}`);
    }

    // --- slotName validation ---
    if (typeof slotName !== "string" || slotName.trim() === "") {
        throw new Error( `[LayoutFactory.slot] Invalid "slotName": expected non-empty string, got ${typeof slotName}`);
    }

    // --- classes validation ---
    if (!Array.isArray(classes)) {
        throw new Error(`[LayoutFactory.slot] Invalid "classes": expected array of strings, got ${typeof classes}`);
    }

    classes.forEach((cls, index) => {
        if (typeof cls !== "string") {
            throw new Error(`[LayoutFactory.slot] Invalid class at index ${index}: expected string, got ${typeof cls}`);
        }
    });

    // --- children validation ---
    if (!Array.isArray(children)) {
        throw new Error (`[LayoutFactory.slot] Invalid "children": expected array, got ${typeof children}`);
    }

    children.forEach((child, index) => {
        if (typeof child !== "object" || child === null) {
            throw new Error(`[LayoutFactory.slot] Invalid child at index ${index}: expected object, got ${typeof child}`);
        }
    });

    return {
        tag: tag,
        slot: slotName,
        classes: classes,
        children: children,
    };
}