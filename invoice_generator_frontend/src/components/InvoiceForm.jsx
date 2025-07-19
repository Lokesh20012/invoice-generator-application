
import {assets} from '../assets/assets';
import { Trash2 } from "lucide-react";


const InvoiceForm =()=>{
    return(
        <div className="invoiceform container py-4">
            {/* company logo */}
            <div className="mb-4">
             <h5>Company Logo</h5>
                <div className="de-flex align-items-center gap-3">
                  <label htmlFor="image" className="form-label">
                    <img src={assets.upload_area} alt="upload" width={98} />
                  </label>
                  <input type="file" name="Logo" id="image" hidden className='form-control' accept="image/*" />
                </div>

            </div>
            {/* compony info */}
            <div className="mb-4">
                <h5>Company Information</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder='Company Name' />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder='Company Phone' />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder='Company Address' />
                    </div>
                </div>
            </div>
            {/* bill to */}
            <div className="mb-4">
                <h5>Bill To</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder='Phone Number' />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder='Billing Address' />
                    </div>
                </div>
            </div>
            {/* ship to */}
            <div className="mb-4">

            {/* create new div and insert heading and checkbox and move checkboc to right with the help of justify content between */}
                <div className="d-flex justify-content-between">
                    <h5>Ship to</h5>
                 <div className="form-check">
                        <input type="checkbox" className='form-check-input' id="sameAsBill" />
                        <label htmlFor="sameAsBill" className='form-check-label'>
                        Same As Bill
                        </label>
                 </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder='Phone Number' />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder='Shipping Address' />
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
                                <input type="text"  disabled className="form-control" placeholder='Invoice Name' id='invoiceNumber' />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="invoiceDate" className='form-label'>Invoice Date</label>
                                <input type="Date" className="form-control" id='invoiceDate'/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="invoiceDueDate" className='form-label'>Invoice Due Date</label>
                                <input type="Date" className="form-control" id='invoiceDueDate' />
                            </div>
                        </div>
                </div>
            </div>
            {/* Item details */}
            <div className="mb-4">
                <h5>Item Details</h5>
                <div className='card p-3 mb-3'>
                    <div className="row g-3 mb-2">
                        <div className="col-md-3">
                            <input type="text" placeholder='Item' className='form-control' />
                        </div>
                        <div className="col-md-3">
                            <input type="number" placeholder='Qty' className='form-control'/>
                        </div>
                        <div className="col-md-3">
                            <input type="number" placeholder='Amt' className='form-control' />
                        </div>
                        <div className="col-md-3">
                            <input type="number" placeholder='Total' className='form-control' />
                        </div>
                    </div>

                    <div className="d-flex gap-2 mb-2">
                        <textarea  className='form-control' placeholder='Description'/>
                        <button className="btn btn-outline-danger" type='button'>
                            <Trash2 size={17} />
                        </button>
                    </div> 
                </div>
                <button className="btn btn-primary" type='button'>Add Item</button>
            </div>
            {/* bank acocunt */}
            <div className="mb-4">
                 <h5>Bank Details</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder='Account Name' />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder='Account Number ' />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder='Branch/Ifsc Code' />
                    </div>
                </div>
            </div>
            {/* tootal */}
            <div className="mb-4">
                <div>
                    <div className="w-100 w-md-50">
                        <div className="d-flex justify-content-between">
                            <span>SubTotal</span>
                            <span>${1000}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <label htmlFor="tax" className='me-2'>Tax Rate 2%</label>
                            <input type="number" id='tax' className='form-contol' placeholder='2' />
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Tax Amount</span>
                            <span>${1000}</span>
                        </div>
                        <div className="d-flex justify-content-between fw-bold mt-2">
                            <span>Grand Total</span>
                            <span>${1000}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* notes */}
            <div className="mb-4">
                <h5>Notes</h5>
                    <div w-5>
                      <textarea name="notes" className='form-control' rows={3}> </textarea>
                    </div> 
            </div>

        </div>
    )
}

export default InvoiceForm;