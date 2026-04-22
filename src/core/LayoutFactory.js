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

export function node(tag="div", classes=[], children=[], style=[]) {
    const node = {
        tag: tag,
        classes: classes,
        children: children,
        style: style
    };

    return node;
}

export function slot(tag="div", slotName="", classes=[], children=[]) {
    const slotNode = {
        tag: tag,
        slot: slotName,
        classes: classes,
        children: children,
    };
    
    return slotNode;
}