import {useState,useContext} from 'react';
import {Pencil} from "lucide-react";
import { AppContext } from '../../context/AppContext';
import InvoiceForm from '../../components/InvoiceForm';
import TemplatGrid from '../../components/TemplateGrid';
import toast from "react-hot-toast";


const MainPage = () => {
      const[isEditingTitle, setIsEditingTitle] = useState(false);
      const {invoiceTitle, setInvoiceTitle, invoiceData, setInvoiceData,
        setSelectTemplate,   
      } = useContext(AppContext);

      const handleTemlpateClick = (id)=>{
        const validationMessage = invoiceData.items.some(
            (item) => !item.qty || !item.amount
          )
        // The .some() method tests whether at least one element in the array passes the condition
              if(validationMessage){
                toast.error("Please enter qty or amount before selecting the template");
              }
        setSelectTemplate(id);
        console.log(id);
      }
    

        const handleTitleChange  = (e) =>{
                const newTitle =e.target.value;
                setInvoiceTitle(newTitle);
                setInvoiceData(prev =>({
                  ...prev, title: newTitle
                }));
        }
        const handleTitleEdit = () =>{
        setIsEditingTitle(true);
        }
        const handleTitleBlur = () => {
        setIsEditingTitle(false);
        }


   return (
    <div className="mainpage container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        {/* Title Bar */}
        <div className="bg-white border rounded shadow-sm p-3 mb-4">
          <div className="d-flex align-items-center">

          {
            isEditingTitle ?(
              <input type="text"
                className="form-control me-2"
                autoFocus
                onBlur={handleTitleBlur}
                onChange={handleTitleChange}>

                </input>

            ):(
              <>
                    <h5 className="mb-2 me-3">{invoiceTitle}</h5>
                      <button className="btn bnt-sm p-0 border-0 bg-transparent"
                      onClick={handleTitleEdit}>

                          <Pencil className = "text-primary" size={20}/>
                      </button>
              </>
            )
          }

          </div>
        </div>

        {/* Invoice Form and Template Grid */}
        <div className="row g-4 align-items-stretch">
          {/* Invoice Form */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="bg-white border fw-bold rounded shadow-sm p-4 w-100">
             <InvoiceForm/>
            </div>
          </div>

          {/* Template Grid */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="bg-white border fw-bold rounded shadow-sm p-4 w-100">
            {/* Here, we are passing a function handleTemlpateClick 
               as a prop to the TemplatGrid component.
               -Inside TemplatGrid, this prop is received and named onTemplateClick.*/}
              <TemplatGrid  onTemplateClick={handleTemlpateClick}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;