
import { useContext } from 'react';
import {assets} from '../assets/assets';
import { Trash2 } from "lucide-react";
import { AppContext} from '../context/AppContext';


const InvoiceForm =()=>{

        const{invoiceData, setInvoiceData} = useContext(AppContext);

        const addItem = () => {
            setInvoiceData((prev) => ({...prev,
                items: [...prev.items,
                    { name: "", qty: "", amount: "", description: "", total: 0}
                ]
            }))
        }

        const deleteItem = (index) => {
        setInvoiceData( prev => ({...prev, items: invoiceData.items.filter((_ , i) => i!==index)}))
        }


        const handleChange = (section, field, value) =>{
        setInvoiceData(prev =>({
            ...prev, section:{
                ...prev.section, field:value
            }
        }))
        }

        const handleSameAsBilling = () => {
        setInvoiceData(prev => ({
                //  copy state of billing and if you override name use name:"Lokesh Saini" then it will alway Lokesh Saini
                // in name field and all field same as billing.
                ...prev,
                shipping: {...prev.billing}
            })
        )
    }

            // create this funtcion for items array and got element from items with help of index then 
            // update the state of items element and if any change of qty and amount then total amount is updated
            //and (items[index].qty ||0) and (items[index]*amount ||0)  used 0 for handling error if write - value in fields
        const handleItemChange = (index, field, value) =>{
            const items = [...invoiceData.items];
            items[index][field] = value;
            if(field === "qty" || field ==="amount"){
                items[index].total = (items[index].qty ||0)*(items[index].amount ||0)
            }

            setInvoiceData(prev =>({
                ...prev, items
            }))
        }


         const calculateTotal = () =>{
            const subTotal  = invoiceData.items.reduce((sum, item) => (sum + (item.total) || 0) ,0);
            const taxRate  = Number(invoiceData.tax);
            const taxAmount  = (subTotal*taxRate)/100;
            const grandTotal = subTotal + taxAmount;
            return{ subTotal, taxAmount, grandTotal}

         }
         const{subTotal, taxAmount, grandTotal} = calculateTotal();



          const handleLogoUpload = (e) =>{
                const file = e.target.files[0];
                if(file){
                    const reader = new FileReader();
                    reader.onloadend = () =>{
                        setInvoiceData(prev =>({
                            ...prev, logo:reader.result
                        }))
                    }
                
                reader.readAsDataUrl(file);
                }
           }
        
          

return(
    <div className="invoiceform container py-4">
        {/* company logo */}
        <div className="mb-4">
        <h5>Company Logo</h5>
            <div className="de-flex align-items-center gap-3">
            <label htmlFor="image" className="form-label">
                <img src={invoiceData.logo ? invoiceData.logo : assets.upload_area} alt="upload" width={98} />
            </label>
            <input type="file"
            name="Logo" id="image" 
            hidden className='form-control' 
            onChange={handleLogoUpload}
             />
            </div>

        </div>
        {/* compony info */}
        <div className="mb-4">
            <h5>Company Information</h5>
            <div className="row g-3">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder='Company Name' value={invoiceData.company.name}
                    onChange={(e) => handleChange("company", "name", e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder='Company Phone' value={invoiceData.company.number}
                    onChange={(e) => handleChange("company", "phone", e.target.value)}
                    />
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Company Address' value={invoiceData.company.address}
                    onChange={(e) => handleChange("company", "address", e.target.value)}
                    />
                    
                </div>
            </div>
        </div>
        {/* bill to */}
        <div className="mb-4">
            <h5>Bill To</h5>
            <div className="row g-3">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder='Name' value={invoiceData.billing.name}
                    onChange={(e) => handleChange("billing","name",e.target.value)}/>
                    {invoiceData.billing.name}
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder='Phone Number' value={invoiceData.billing.phone}
                    onChange={(e) => handleChange("billing","phone", e.target.value)} />
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Billing Address' value={invoiceData.billing.address}
                    onChange={(e) => handleChange("billing", "address", e.target.value)} />
                </div>
            </div>
        </div>
        {/* ship to */}
        <div className="mb-4">

        {/* create new div and insert heading and checkbox and move checkboc to right with the help of justify content between */}
            <div className="d-flex justify-content-between">
                <h5>Ship to</h5>
            <div className="form-check">
                    <input type="checkbox" className='form-check-input' id="sameAsBill" onChange={handleSameAsBilling} />
                    <label htmlFor="sameAsBill" className='form-check-label'>
                    Same As Bill
                    </label>
            </div>
            </div>
            <div className="row g-3">
                <div className="col-md-6">
                    {/* Always use value={...} in your inputs (controlled components).
                    But if inputs are uncontrolled (i.e., no value={...}), React won't know to re-render. */}
                    <input type="text" className="form-control" placeholder='Name' value={invoiceData.shipping.name} 
                    onChange={(e) => handleChange("shipping","name", e.target.value)}/>
                    
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder='Phone Number' value={invoiceData.shipping.phone}
                    onChange={(e) => handleChange("shipping","phone", e.target.value)}/>
                    
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Shipping Address' value={invoiceData.shipping.address}
                    onChange={(e) => handleChange("shipping","address", e.target.value)}/>
                </div>
            </div>
        </div>
        {/* invoice form */}
        <div className="mb-4">
            <h5>Invoice Form</h5>
            <div className='card p-3 mb-3' >
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="invoiceNumber" className='form-label'>Invoice Number</label>
                            <input type="text"  disabled className="form-control" placeholder='Invoice Number' id='invoiceNumber'
                            value={invoiceData.invoice.number} 
                            onChange={(e) => handleChange("invoice","number", e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="invoiceDate" className='form-label'>Invoice Date</label>
                            <input type="Date" className="form-control" id='invoiceDate'
                            value={invoiceData.invoice.date} 
                            onChange={(e) => handleChange("invoice","date", e.target.value)}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="invoiceDueDate" className='form-label'>Invoice Due Date</label>
                            <input type="Date" className="form-control" id='invoiceDueDate'
                            value={invoiceData.invoice.dueDate} 
                            onChange={(e) => handleChange("invoice","dueDate", e.target.value)}/>
                            {invoiceData.invoice.dueDate}
                        </div>
                    </div>
            </div>
        </div>
        {/* Item details */}
        <div className="mb-4">
            <h5>Item Details</h5>
            {/* write map for ierate the invoicedata items and create every time new div for new items*/}
            {invoiceData.items.map((item, index)=>(
            <div key={index} className='card p-3 mb-3'>
                <div className="row g-3 mb-2">
                    <div className="col-md-3">
                        <input type="text" placeholder='Item' className='form-control' 
                            value={item.name} 
                            onChange={(e) => handleItemChange(index,"name", e.target.value)}/>
                    </div>

                    <div className="col-md-3">
                        <input type="number" placeholder='Qty' className='form-control'
                            value={item.qty} 
                            onChange={(e) => handleItemChange(index,"qty", e.target.value)}/>
                    </div>

                    <div className="col-md-3">
                        <input type="number" placeholder='Amt' className='form-control' 
                        value={item.amount} 
                            onChange={(e) => handleItemChange(index,"amount", e.target.value)}/>
                    </div>

                    <div className="col-md-3">
                        <input type="number" placeholder='Total' className='form-control'
                        value={item.total} disabled />
                    </div>
                </div>
    {/* we can not use if codition in jsx, if there need we can use outside the return   */}


                <div className="d-flex gap-2 mb-2">
                    <textarea  className='form-control' placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleItemChange(index,"description", e.target.value)}/>

                    {/* write this expression, trash button will visisble when the items is more than one  */}

                    {invoiceData.items.length >1 &&(
                        // never use onClick={deleteItem(index)} beacuase when componenet render deleteitme called
                        // immediately due to this appcontect provider or parent component setInvoicedata. 
                        // cannot update appcontext provider 
                    <button className="btn btn-outline-danger" type='button' onClick={()=>deleteItem(index)}>
                        <Trash2  size={17} />
                    </button>
                    )
}
                </div> 
            </div>
            ))}
            <button className="btn btn-primary" type='button' onClick={addItem}>Add Item</button>
        </div>
        {/* bank acocunt */}
        <div className="mb-4">
            <h5>Bank Details</h5>
            <div className="row g-3">

                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder='Account Name'
                    value={invoiceData.account.name}
                    onChange={(e) => handleChange("account","name",e.target.value)} />
                </div>

                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder='Account Number'
                    value={invoiceData.account.number}
                    onChange={(e) => handleChange("account","number",e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Branch/Ifsc Code'
                    value={invoiceData.account.ifscCode}
                    onChange={(e) => handleChange("account","ifscCode",e.target.value)}/>
                </div>
            </div>
        </div>
        {/* tootal */}
        <div className="mb-4">
            <div>
                <div className="w-100 w-md-50">
                    <div className="d-flex justify-content-between">
                        <span>SubTotal</span>
                        <span>{subTotal}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <label htmlFor="tax" className='me-2'>Tax Rate 2%</label>
                        <input type="number" id='tax' className='form-contol' placeholder='2'
                        // directly update the state of tax without creating the function
                        value={invoiceData.tax}
                        onChange={(e) => setInvoiceData(prev =>({
                            ...prev, tax:(e.target.value)
                        }))}/>

                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Tax Amount</span>
                        <span>{taxAmount}</span> 
                    </div>
                    <div className="d-flex justify-content-between fw-bold mt-2">
                        <span>Grand Total</span>
                        <span>{grandTotal}</span>
                    </div>
                </div>
            </div>
        </div>
        {/* notes */}
        <div className="mb-4">
            <h5>Notes</h5>
                <div w-5>
                <textarea 
                    name="notes" 
                    className='form-control' 
                    rows={3}
                    value={invoiceData.notes}
                        // directly update the state of notes without creating the function
                    onChange={ (e) => setInvoiceData(prev =>({
                        ...prev, notes:(e.target.value)
                        }))}> 
                </textarea>
                {invoiceData.notes}                        </div> 
        </div>

    </div>
)
}

export default InvoiceForm;