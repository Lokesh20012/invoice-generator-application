
import { forwardRef } from "react"
import formatInvoiceData from "../util/formatInvoiceData";
import TemplateComponents from "../util/TemplateComponents";

const InvoicePreview = forwardRef( ({invoiceData, template}, ref)=>{
     const formattedData = formatInvoiceData(invoiceData);

     const SelectedTemplate = TemplateComponents[template] || TemplateComponents['Template1'];

    return(
        <div ref={ref} className="invoice-preview px-2 py-2 overflow-x-auto">
         <SelectedTemplate data = {formattedData}/>
        </div>
    )
}
)

export default InvoicePreview;