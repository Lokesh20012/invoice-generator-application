import { useContext, useRef } from "react";
import { templates } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import InvoicePreview from "../../components/InvoicePreview";
import { useNavigate } from "react-router-dom";

export const PreviewPage= () =>{
    const navigate = useNavigate();
    const previewRef = useRef();
    const {selectTemplate, invoiceData, setSelectTemplate} = useContext(AppContext);

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
                        <button className="btn btn-primary d-flex align-items-center justify-content-center">Save & Exit</button>
                        <button className="btn btn-danger">Delete Invoice</button>
                        <button className="btn btn-secondary"> Back to Dashboard</button>
                        <button className="btn btn-info"> Send Email</button>
                        <button className="btn btn-success d-flex align-items-center justify-content-center"> Download</button>
                    </div>
             
            </div>

           {/* Display the invoice preview */}

           <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-center bg-light py-3">
              <div ref={previewRef} className="invoice-preview">
                 <InvoicePreview invoiceData={invoiceData} template={selectTemplate}/>
              </div>
           </div>

        </div>
    )
}
export default PreviewPage;