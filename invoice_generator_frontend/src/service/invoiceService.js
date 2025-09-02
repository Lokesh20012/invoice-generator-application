import axios, { Axios } from "axios";

export const saveInvoice = (baseURL, payload) => {
    return axios.post(`${baseURL}/invoices/`, payload);
}

export const getAllInvoices = (baseURL)=>{
return Axios.get(`${baseURL}/inovices/`);
}