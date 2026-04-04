export class RiskView {
    constructor($rootElement) {
        this.dom = {
            root: $rootElement,
        };
    }
    
    renderResult(result) {
    const html = `
            <p><strong>Score:</strong> ${result.score}</p>
            <p><strong>Category:</strong> ${result.category}</p>
            <p><strong>Decision:</strong> ${result.decision}</p>
        `;

        this.dom.root.html(html);
    }
}