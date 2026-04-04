export class Header {
    constructor($rootElement) {
        this.dom = {
            root: $rootElement
        }

        // console.log("Header: Constructor dom.root:", this.dom.root);
    }
    
    render() {
        const $html = $(`
            <h1>Material Flow System</h1>
        `);
        this.dom.root.html($html);
    }
}