import { createContext, useState } from "react";

export const AppContext = createContext();

export const intialInvoiceData = {
    title: "New invoice",
    billing: {name: "", phone: "", address: ""},
    shipping: {name: "", phone: "", address: ""},
    invoice: {name: "", date: "", dueDate: ""},
    account: {name: "", number: "", ifscCode: ""},
    company: {name: "", number: "", address: ""},
    tax: 0,
    notes: "",
    items: [
        { name: "", qty: "", amount: "", description: "", total: 0},
    ]
}


export const AppContextProvider = ({children}) =>{
    
    const[invoiceTitle, setInvoiceTitle] = useState("Lokesh first Invoice");
    const[invoiceData, setInvoiceData] = useState(intialInvoiceData);
    const[selectTemplate, setSelectTemplate] = useState("template1");

    const contextValue = {
        invoiceTitle,
        setInvoiceTitle,
        invoiceData, setInvoiceData,
        selectTemplate, setSelectTemplate,
        intialInvoiceData
    }
    
    return(
        <AppContext.Provider value={contextValue}>
        {children}
        </AppContext.Provider>
    )
}
