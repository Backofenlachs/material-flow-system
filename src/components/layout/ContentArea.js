export class ContentArea {
    constructor($rootElement) {
        this.dom = {
            root: $rootElement,
        };

    }

    render() {
        const $html = $(`
            <h2>Welcome to the Material Flow System</h2>
            <p>This is the main content area where you can view and manage materials, suppliers, and more.</p>
        `);

        this.dom.root.html($html);
    }
}