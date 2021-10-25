from typing import Optional
from fastapi import FastAPI

app = FastAPI()

  

@app.get("/")
def read_root():
  return {"Hello": "World"}


@app.get("/predict")
def predict(squarefeet: int):
  prediction = squarefeet * 50000
  return {"prediction": prediction}
