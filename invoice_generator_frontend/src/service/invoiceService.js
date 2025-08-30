import axios from "axios";

export const saveInvoice = (baseURL, payload) => {
    return axios.post(url: '${baseURL}/invoices', payload);
}