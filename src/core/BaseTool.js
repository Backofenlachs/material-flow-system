/**
 * Abstract base class for all tools
 * 
 * @class BaseTool
 * @constructor  @param {jQuery} $rootElement - Root element where the tool will render its content
 * @method init() - obligated - Method to initialize the tool (setup logic, controllers, events)
 * @method render() - obligated - Method to render the tool's UI
 * @method destroy() - Method to cleanup (events, DOM, references) when the tool is unmounted
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

        if (this.$root) {
            this.$root.empty();
        }
    }
}