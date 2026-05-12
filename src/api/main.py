from fastapi import FastAPI
from typing import List
import uvicorn

app = FastAPI(title="NexusFlow AI Backend")

@app.get("/health")
def health_check():
    return {"status": "operational", "agents": ["SentinelScout", "ContextualNavigator", "StrategicOrchestrator"]}

@app.post("/trigger-analysis")
async def trigger_analysis(data: dict):
    # Entry point for Fivetran Webhooks
    return {"task_id": "task_123", "message": "Analysis initiated"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)