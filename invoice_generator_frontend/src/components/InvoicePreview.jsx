import { forwardRef } from "react";
import {formatInvoiceData}  from "../util/formatInvoiceData.js";
import TemplateComponents  from "../util/TemplateComponents.js";

const InvoicePreview = forwardRef(({ invoiceData, template }, ref) => {
  const formattedData = formatInvoiceData(invoiceData);

  const SelectedTemplate =
    TemplateComponents[template] || TemplateComponents["template1"];

  return (
    <div
      ref={ref}
      className="invoice-preview container px-2 py-3 overflow-x-auto"
    >
      <SelectedTemplate data={formattedData} />
    </div>
  );
});

export default InvoicePreview;