from fastapi import APIRouter, Response, status

designs_router = APIRouter()

@designs_router.get('/overview', status_code=status.HTTP_200_OK)
def designs_router_overview():
    return {
        "Designs_API_Routes": {
            "/": "base"
        }
    }