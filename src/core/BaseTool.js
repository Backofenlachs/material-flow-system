/**
 * Abstract base class for all tools
 */

export class BaseTool {
    constructor($rootElement) {
        if (new.target === BaseTool) {
            throw new Error("BaseTool darf nicht direkt instanziiert werden.");
        }

        if (!$rootElement) {
            throw new Error("Tool benötigt ein gültiges Root-Element.");
        }

        this.$root = $rootElement;
    }

    /**
     * Initialize tool (setup logic, controllers, events)
     */
    init() {
        throw new Error("init() muss vom Tool implementiert werden.");
    }

    /**
     * Render UI
     */
    render() {
        throw new Error("render() muss vom Tool implementiert werden.");
    }

    /**
     * Cleanup (events, DOM, references)
     */
    destroy() {
        // optional override
    }
}