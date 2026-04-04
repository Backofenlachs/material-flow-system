import { RiskModel } from "../models/RiskModel.js";
import { RiskView } from "../views/RiskView.js";

export class RiskController {
    constructor($rootElement) {
        this.dom = {
            root: $rootElement,
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

        this.model = null;
        this.view = null;
    }

    init() {

        this.renderLayout();
        this.cacheDom();


        this.model = new RiskModel();
        this.view = new RiskView(this.dom.result);
        

        this.bindEvents();
    }
    renderLayout() {
        const html = `
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

        this.dom.root.html(html);
    }

    cacheDom() {
        this.dom.riskToolContainer = this.dom.root.find(".risk-tool");
        this.dom.form = this.dom.root.find(".risk-form");

        this.dom.input.name = this.dom.root.find("#applicant-name");
        this.dom.input.age = this.dom.root.find("#applicant-age");
        this.dom.input.loanAmount = this.dom.root.find("#loan-amount");
        this.dom.input.interestRate = this.dom.root.find("#interest-rate");

        this.dom.result = this.dom.root.find(".risk-result");
    }

    bindEvents() {
        this.dom.form.on("submit", (e) => {
            e.preventDefault();

            const applicantData = this.getFormData();

            console.log("Applicant Data:", applicantData);

            // später:
            const result = this.model.evaluateApplicant(applicantData);
            console.log(this.dom.root);
            this.dom.riskToolContainer.addClass("has-result");
            this.view.renderResult(result);
        });
    }

    getFormData() {
        return {
            name: this.dom.input.name.val().trim(),
            age: Number(this.dom.input.age.val()),
            loanAmount: Number(this.dom.input.loanAmount.val()),
            interestRate: Number(this.dom.input.interestRate.val())
        };
    }
}