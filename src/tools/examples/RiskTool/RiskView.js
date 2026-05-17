export class RiskView {
    constructor() {
        this.dom = {
            riskToolContainer: null,
            form: null,
            input: {
                name: null,
                age: null,
                loanAmount: null,
                interestRate: null
            },
            result: null
        };
    }
    
    render($root) {
        $root.html(this.renderLayout());

        this.cacheDom($root);

        return this.dom;
    }

    renderLayout() {
        return `
            <div class="risk-tool">
                <form class="risk-form">

                    <div class="risk-form-row">
                        <label for="applicant-name">Name:</label>
                        <input type="text" class="risk-input" id="applicant-name" />
                    </div>

                    <div class="risk-form-row">
                        <label for="applicant-age">Age:</label>
                        <input type="number" class="risk-input" id="applicant-age" />
                    </div>

                    <div class="risk-form-row">
                        <label for="loan-amount">Loan:</label>
                        <input type="number" class="risk-input" id="loan-amount" />
                    </div>

                    <div class="risk-form-row">
                        <label for="interest-rate">Interest %:</label>
                        <input type="number" step="0.1" class="risk-input" id="interest-rate" />
                    </div>

                    <button type="submit">Analyse starten</button>

                </form>

                <div class="risk-result"></div>
            </div>
        `;
    }

    renderResult(result) {
        console.log("[RiskView.renderResult]")
        const html = `
            <p><strong>Score:</strong> ${result.score}</p>
            <p><strong>Category:</strong> ${result.category}</p>
            <p><strong>Decision:</strong> ${result.decision}</p>
        `;

        this.dom.result.html(html);
    }

    cacheDom($root) {
        this.dom.riskToolContainer = $root.find(".risk-tool");
        this.dom.form = $root.find(".risk-form");

        this.dom.input.name = $root.find("#applicant-name");
        this.dom.input.age = $root.find("#applicant-age");
        this.dom.input.loanAmount = $root.find("#loan-amount");
        this.dom.input.interestRate = $root.find("#interest-rate");

        this.dom.result = $root.find(".risk-result");
    }
}