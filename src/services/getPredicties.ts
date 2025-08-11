import { PredictJSON } from "../types/predictsTypes";
import api from "./api";

export async function getPredictJSON(body: PredictJSON){
  try{
    const response = await api.post('predict', body);
    console.log("Response PredictJSON =>", response.data)
    return response.data;
  }catch(error){
    console.log("Error getPredictJSON", error);
    if (error.response) {
      console.log("Error response =>", error.response);
      window.alert(
        `Erro ao enviar JSON:\n` +
        `Status: ${error.response.status}\n` +
        `Mensagem: ${error.response.data?.message || error.response.statusText}\n\n`
        `Response: ${error.response}`
      );
    } else {
      window.alert(`Erro ao enviar JSON:\n${error}`);
    }
    throw error;
  }
}

export async function getPredictCSV(file: File){
  try{
    const formData = new FormData();
    formData.append("file", file);
    const response = await api.post("predict/csv", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Response PredictCSV =>", response.data)
    return response.data;
  }catch(error){
    console.log("Error getPredictCSV", error);
    if (error.response) {
      console.log("Error response =>", error.response);
      window.alert(
        `Erro ao enviar JSON:\n` +
        `Status: ${error.response.status}\n` +
        `Mensagem: ${error.response.data?.message || error.response.statusText}\n\n`
        `Response: ${error.response}`
      );
    } else {
      window.alert(`Erro ao enviar JSON:\n${error}`);
    }
    throw error;
  }
}