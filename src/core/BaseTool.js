/**
 * Abstract base class for all mountable tools.
 * 
 * A Tool is a self-contained component that is mounted into a slot provided by the AppShell.
 * the Shell itself only provides layout slots, while the AppController/mount coordinator decides
 * which tool is mountet Into wich slot.
 * 
 * In v0.1, a tool acts as a lightweight adapter between the slot container and the tools internal 
 * runtime (for example controller, model, view). This keeps the layout seperate from tOol-specefic
 * UI-logic.
 * 
 * Lifecycle:
 * constructor() -> init() -> render() -> destroy()
 * 
 * Responsibilities:
 * - recieve a root container
 * - initialize internal tool logic
 * - render only inside the assigned root
 * - cleanup on unmount 
 * 
 * @abstract
 * @param {jQuery} $rootElement - Root element where the tool will render its content
 * @param {Object} [config={}] - Optional configuration object for the tool
 */
export class BaseTool {
    constructor($rootElement, config) {
        if (new.target === BaseTool) {
            throw new Error("BaseTool darf nicht direkt instanziiert werden.");
        }

        if (!$rootElement) {
            throw new Error("Tool benötigt ein gültiges Root-Element.");
        }


        this.$root = $rootElement;
        this.config = config || {};
    }

    /**
     * Initialize the tool runtime.
     * Must be implemented by concrete tools.
     *
     * Typical responsibilities:
     * - create internal controller / model / view instances
     * - bind events
     * - prepare local state
     *
     * @abstract
     * @returns {void}
     */
    init() {
        throw new Error("init() muss vom Tool implementiert werden.");
    }

    /**
     * Render the tool UI into the assigned root element.
     * Must be implemented by concrete tools.
     *
     * @abstract
     * @returns {void}
     */
    render() {
        throw new Error("render() muss vom Tool implementiert werden.");
    }

    /**
     * Cleanup hook for mounted tools.
     * Concrete tools may override this to remove events,
     * DOM bindings, or internal references before unmounting.
     *
     * @returns {void}
     */
    destroy() {
        // optional override

        if (this.$root) {
            this.$root.empty();
        }
    }
}