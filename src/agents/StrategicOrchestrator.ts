import { runReasoning } from "@/lib/gemini";
import { AnomalyAlert } from "./SentinelScout";
import { RouteRisk } from "./ContextualNavigator";

/**
 * Strategic Orchestrator: Decision Synthesis & Execution
 * Inputs: Scout alerts, Risk scores, and MongoDB inventory data
 * Outputs: Rerouting instructions and automated GitLab PR actions
 */
export class StrategicOrchestrator {
  async synthesizeDecision(alert: AnomalyAlert, risks: RouteRisk[], inventory: any) {
    const prompt = `Based on the alert ${alert.description} and a risk score of ${risks[0].riskScore}, 
    what is the optimal rerouting strategy for our current inventory levels in MongoDB?`;
    
    const reasoning = await runReasoning(prompt);
    
    return {
      action: "REROUTE_SHIPMENT",
      instructions: reasoning,
      gitLabPrPayload: {
        branch: "inventory-fix-v1",
        changes: "Adjusting logic for lead-time buffers."
      }
    };
  }
}