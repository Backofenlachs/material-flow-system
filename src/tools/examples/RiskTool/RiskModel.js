export class RiskModel {
    constructor() {
        this.baseScore = 100;
    }

    evaluateApplicant(data) {

        // Hier kommt später eigentlich die APIcall hin
        let score = this.baseScore;

        // --- Regeln (ganz simpel) ---

        // Age
        if (data.age < 21) {
            score -= 20;
        }

        // Loan Amount
        if (data.loanAmount > 10000) {
            score -= 20;
        }

        // Interest Rate
        if (data.interestRate > 8) {
            score -= 20;
        }

        // --- Score clamp ---
        if (score < 0) score = 0;

        const category = this.getCategory(score);
        const decision = this.getDecision(category);

        return { // später: ergebnisse aus API zurückgeben
            score,
            category,
            decision
        };
    }

    getCategory(score) {
        if (score >= 80) return "Low Risk";
        if (score >= 50) return "Medium Risk";
        return "High Risk";
    }

    getDecision(category) {
        if (category === "Low Risk") return "Approve";
        if (category === "Medium Risk") return "Manual Review";
        return "Decline";
    }
}