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
import { BaseTool } from "../../core/BaseTool.js";

export class RiskTool extends BaseTool {
    constructor() {
        super();
        
        this.riskController = null;
    }

    init(config, runtime) {
        super.init(config, runtime);

        this.riskController = new RiskController();
        this.riskController.init(config, runtime);
    }

    render($root) {
        this.validateController("RiskTool.render");

        super.render($root);

        this.riskController.render($root);
    }

    destroy() {
        this.validateController("RiskTool.destroy");

        this.riskController.destroy();

        super.destroy();
    }

    validateController(context) {
        if (!this.riskController) {
            throw new Error(
                `[${context}] Controller does not exist yet. make sure to call Risk.init() as first`
            );
            return false;
        }
    }
}