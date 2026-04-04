export class Sidebar {
    constructor($rootElement) {
        this.dom = {
            root: $rootElement,
        };
    }

    render() {
        const $html = $(`
            <nav>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Materials</a></li>
                    <li><a href="#">Suppliers</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        `);

        this.dom.root.html($html);
    }
}