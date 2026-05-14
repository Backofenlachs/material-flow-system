import { RiskModel } from "../models/RiskModel.js";
import { RiskView } from "../views/RiskView.js";

export class RiskController {
    constructor() {
        this.$root = null;

        this.model = null;
        this.view = null;
    }

    init(config, runtime) {
        this.view = new RiskView();
        this.model = new RiskModel();
    }

    render($root) {
        this.$root = $root;

        const rendered_dom = this.view.render(this.$root);

        this.bindEvents(rendered_dom);
    }

    destroy() {
        this.$root = null;
        this.model = null;
        if (!this.view?.dom) return;

        this.view.dom.form?.off("submit");

        this.view = null;
    }

    bindEvents(dom) {
        dom.form.on("submit", (e) => {
            e.preventDefault();

            const applicantData = this.getFormData(dom);
            console.log("Applicant Data:", applicantData);

            const result = this.model.evaluateApplicant(applicantData);

            dom.riskToolContainer.addClass("has-result");
            this.view.renderResult(result);
        });
    }

    getFormData(dom) {
        return {
            name: dom.input.name.val().trim(),
            age: Number(dom.input.age.val()),
            loanAmount: Number(dom.input.loanAmount.val()),
            interestRate: Number(dom.input.interestRate.val())
        };
    }
}