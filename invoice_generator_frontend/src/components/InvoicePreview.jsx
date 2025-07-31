
import { forwardRef } from "react"

const InvoicePreview = forwardRef( ({invoiceData, template}, ref)=>{
    return(
        <div ref={ref} className="invoice-preview px-2 py-2 overflow-x-auto">
         Render the PDF
        </div>
    )
}
)

export default InvoicePreview;