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

    constructor() {
        if (new.target === BaseTool) {
            throw new Error("BaseTool darf nicht direkt instanziiert werden.");
        }
        
        // Internal lifecycle state
        this.initialized = false;
        this.rendered = false;

        // shared runtime references
        this.config = null;
        this.runtime = null;

        // DOM references
        this.$root = null;
    }

    /**
     * Initialize the tool runtime.
     * Must be implemented by concrete tools.
     *
     * Typical responsibilities:
     * - create internal controller / model / view instances
     * - prepare local state
     *
     * @abstract
     * @returns {void}
     */
    init(config={}, runtime={}) {
        this.config = config;
        this.runtime = runtime;

        this.initialized = true;
        
        return this;
    }

    /**
     * Render the tool UI into the assigned root element.
     * Must be implemented by concrete tools.
     *
     * @abstract
     * @returns {void}
     */
    render($root) {
        if (!$root || !$root.jquery || $root.length === 0) {
            throw new Error(
                "[BaseTool.render] Invalid $root: expected non-empty jQuery object"
            );
        }

        this.$root = $root;

        this.rendered = true;
    }

    /**
     * Cleanup hook for mounted tools.
     * Concrete tools may override this to remove events,
     * DOM bindings, or internal references before unmounting.
     *
     * @returns {void}
     */
    destroy() {
        if (this.$root) {
            this.$root.empty();
        }

        this.$root = null;
        this.rendered = false;
        this.initialized = false;
    }
}