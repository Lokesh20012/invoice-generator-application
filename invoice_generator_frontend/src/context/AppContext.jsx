import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) =>{
    
    const[invoiceTitle, setInvoiceTitle] = useState("Lokesh first Invoice");

    const contextValue = {
        invoiceTitle,
        setInvoiceTitle
    }
    
    return(
        <AppContext.Provider value={contextValue}>
        {children}
        </AppContext.Provider>
    )
}
