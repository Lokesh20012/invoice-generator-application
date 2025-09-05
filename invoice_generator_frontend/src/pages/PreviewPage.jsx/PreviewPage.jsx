import { useContext, useRef, useState } from "react";
import { templates } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import InvoicePreview from "../../components/InvoicePreview";
import { useNavigate } from "react-router-dom";
import { saveInvoice, deleteInvoice, sendInvoice}  from "../../service/invoiceService";
import {uploadInvoiceThumbnail} from '../../service/cloudinaryService';
import { toast } from "react-hot-toast"; 
import { Loader2, Scale } from "lucide-react";
import html2canvas from "html2canvas";
import generatedPdf from "../../util/pdfUtils.js";


export const PreviewPage= () =>{
    const navigate = useNavigate();
    const previewRef = useRef();
    const {selectTemplate, invoiceData, setSelectTemplate, baseURL} = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const[downloading, setDownloading] = useState(false);
    const [showModal, setShowModal] = useState(false);  
    const [customerEmail, setCustomerEmail] = useState("");
    const [emailing, setEmailing] = useState(false);   
   
    const handleSaveExit = async() =>{
        try{
            setLoading(true);
            // create thumbnail url

            // using html2canvas to capture  or screenshot the invoice preview as an image
            // then convert the image to base64 format
            // then upload the image to cloudinary and get the url
            // then save the invoice data along with the thumbnail url to the backend

            const canvas = await html2canvas(previewRef.current,{
                Scale:2,
                useCORS: true,
                backgroundColor: null,
                scrollY: -window.scrollY

            });
            // then convert the image to base64 format
            const imageData = canvas.toDataURL("image/png");
            // then upload the image to cloudinary and get the url
            const thumbnailUrl = await uploadInvoiceThumbnail(imageData);
            // then save the invoice data along with the thumbnail url to the backend
            console.log("thumbnail url", thumbnailUrl);
            // prepare the payload

            const payload ={
                ...invoiceData,
                thumbnailUrl,
                template: selectTemplate
            };
            const response = await saveInvoice(baseURL, payload);
            if(response.status ===200){
                toast.success("Saved Invoice Successfully");
                navigate("/dashboard");
            }
            else{
                toast.error("something went wrong");
            
            }
        }
        catch(error){
             console.log(error);
             toast.error("failed to save the invoice", error.message);
 
        }
        finally{
            setLoading(false);
        }

    }

    const handleDeleteInvoice = async() =>{
        console.log(invoiceData.id);
        if(!invoiceData.id){
            toast.success("Invoice deleted successfully");
            navigate("/dashboard");
        }
        const response = await deleteInvoice(baseURL, invoiceData.id); 
        try{
            if(response.status === 204 || response.status === 200){
                toast.success("Invoice deleted successfully");
                navigate("/dashboard");
            }
            else{
                toast.error("failed to delete invoice");
            }
        }
        catch(error){
            toast.error("failed to delete invoice", error.message);
        }
    }
   
    const handleDownloadPdf = async() =>{
        if(!previewRef.current) return;
        try{
        setDownloading(true);
        await generatedPdf(previewRef.current, `invoice_${Date.now()}.pdf`);
    }

    catch(error){
        toast.error("failed to download pdf", error.message);
    }
    finally{
        setDownloading(false);
    }
}

    // for sending invoice pdf to email
    const handleSendEmailPdf = async() =>{
        if(!previewRef.current || !customerEmail)
         return toast.error("Please enter customer email and try");
        
        try{
            setEmailing(true);
            const pdfBlob = await generatedPdf(previewRef.current, `invoice_${Date.now()}.pdf`, true);
            const formData = new FormData();
            formData.append("file", pdfBlob, `invoice_${Date.now()}.pdf`);
            formData.append("email", customerEmail);

            const response = await sendInvoice(baseURL, formData);
            if(response.status ===200){
                toast.success("PDF sent to your email successfully");
                setShowModal(false);
                setCustomerEmail("");
            }
        }
        catch(error){
            toast.error("failed to send pdf on Email", error.message)
        }
        finally{
            setEmailing(false);
        }
    }

    return(
        <div className="previewpage container-fluid d-flex flex-column p-3 min-vh-100">
           
           {/* Action Button */}
           <div className="d-flex flex-column align-items-center w-100 mb-4 gap-3">

                     {/* List of Template button */}
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {templates.map(({id, label}) =>(
                            <button key = {id}
                            className={`btn btn-sm rounded-pill p-2 ${selectTemplate === id ? 'btn-warning' : 'btn-outline-primary'}`}
                            onClick = {
                                () => {
                                    setSelectTemplate(id);
                                    navigate("/preview");
                            }
                        }>
                            {label}  

                            </button>
                        ))}

                    </div>

                    {/* List of action button */}
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        <button className="btn btn-primary d-flex align-items-center justify-content-center" 
                        onClick = {handleSaveExit} disabled = {loading}>
                            {loading && <Loader2 className="me-2 spin-animation" size ={18} />}
                            {loading? "saving..." : "Save & exit"}
                        </button>
                        <button className="btn btn-danger" onClick = {handleDeleteInvoice}>Delete Invoice</button>
                        <button className="btn btn-secondary" onClick = {() =>{navigate("/dashboard")}}> Back to Dashboard</button>
                        <button className="btn btn-info" onClick={() => setShowModal(true)}> Send Email</button>
                        <button className="btn btn-success d-flex align-items-center justify-content-center" disabled={loading}
                          onClick={handleDownloadPdf}>
                             {downloading && (<loading className="me-2 spin-animation" size={18} />)}
                             {downloading ? "Downloading" : "Download PDF"}
                             </button>
                    </div>
             
            </div>

           {/* Display the invoice preview */}

           <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-center bg-light py-3">
              <div ref={previewRef} className="invoice-preview">
                 <InvoicePreview invoiceData={invoiceData} template={selectTemplate}/>
              </div>
           </div>

       

        { showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Send Invoice</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Customer Email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSendEmailPdf}
                  disabled={emailing}
                >
                  {emailing ? "Sending..." : "Send"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}  

     </div>
    )
}
export default PreviewPage;