/**
 * RiskTool.js
 *
 * Input:
 * - applicant data (e.g. name, age, income)
 * - loan data (optional later)
 * - interest rate
 *
 * Output:
 * - risk score
 * - risk category
 * - decision record
 *
 * Purpose:
 * Simple frontend demo module for the CR-DSS UI.
 * In this stage, it simulates a basic credit risk evaluation
 * with simplified rules and mock data.
 *
 * Planned context:
 * CR-DSS Version 2.0
 */

import { RiskController } from "../../controllers/RiskController.js";

export class RiskTool {
    constructor($rootElement) {
        this.$root = $rootElement;
        this.riskController = null;
    }

    init() {
        this.riskController = new RiskController(this.$root);
        this.riskController.init();
    }

    render() {
        if (this.riskController) {
            this.riskController.render();
        }
    }

    destroy() {
        if (this.$root) {
            this.$root.empty();
        }
    }
}