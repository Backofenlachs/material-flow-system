export class Footer {
    constructor($rootElement) {
        this.dom = {
            root: $rootElement,
        };
    }

    render() {
        const $html = $(`
            <div>&copy; 2026 Material Flow System</div>
        `);

        this.dom.root.html($html);
    }
}