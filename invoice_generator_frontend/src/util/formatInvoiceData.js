
const formatInvoiceData = (invoiceData) =>{

const {
        title,
        company = {},
        invoice = {},
        account = {},
        billing = {},
        shipping = {},
        tax = {},
        notes = "",
        items = [],
        logo = "",

        } = invoiceData || {};

const currencySymbol = "&";
const subTotal = items.reduce((acc, item) => acc + (item.qty * item.amount), 0);
const taxAmount = subTotal *(tax / 100);
const total = subTotal + taxAmount;

return{

    title,
    companyName: company.name ,
    companyPhone: company.phone,
    companyAddress: company.address,

    invoiceNumber: invoice.number,
    invoiceDate: invoice.date,
    paymentData: invoice.dueDate,

    accountName: account.name,
    accountNumber: account.number,
    accountIFSC: account.ifscCode,

    billingName: billing.name,
    billingPhone: billing.phone,
    billingAddress: billing.address,

    shippingName: shipping.name,
    shippingPhone: shipping.phone,
    shippingAddress: shipping.address,

    currencySymbol,
    tax,
    notes,
    items,
    logo,
    subTotal,
    taxAmount,
    total
}


}

export default formatInvoiceData;