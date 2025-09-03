import './Dashboard';
import {useState, useContext, useEffect} from 'react';
import { AppContext} from "../../context/AppContext";
import { getAllInvoices } from '../../service/invoiceService';
import {toast} from 'react-hot-toast';
import { Plus } from 'lucide-react';    
import { formatDate } from '../../util/formatInvoiceData';
import { useNavigate} from'react-router-dom';


const Dashboard = () =>{

    const[invoices, setInvoices] = useState([]);
    
    const { baseURL, setInvoiceData, setInvoiceTitle, setSelectTemplate, setInvoiceId } = useContext(AppContext);
    const navigate = useNavigate();
    
    
    useEffect(() => {
                        const fetchInvoices = async() =>{
                            try{
                                const response  = await getAllInvoices(baseURL);
                                    setInvoices(response.data);
                                    console.log(invoices);
                            }
                        
                        catch(error){
                            console.log(error);
                            toast.error('failed to fetch invoices', error);
                        }
                        
             }
             fetchInvoices();
            }, [baseURL]);

            const handleViewClick = (invoice)=>{
               
                setInvoiceData(initialInvoiceData); 
                setSelectTemplate(invoice.template);
                setInvoiceTitle(invoice.title);
                navigate('/preview');
            }

            const handleCreateNew = () =>{
              setInvoiceTitle("Create New Invoice");
              navigate('/generate');

            }

    return (
        
     <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
            {/* Create New Invoice Card */}
            <div className="col">
                <div className="card h-100 d-flex justify-content-center align-items-center border border-2 border-light shadow-sm"
                    style={{ cursor: "pointer", minHeight: "270px" } } onClick={()=> handleCreateNew()}>
                    <Plus size={48} />
                    <p className="mt-3 fw-medium">Create New Invoice</p>
                 </div>
            </div>


            {/* {exsisting invoice} */}

        {invoices.map((invoice, idx) => (
            <div key={idx} className="col">
            <div
              className="card h-100 shadow-sm"
              style={{ cursor: "pointer", minHeight: "270px" }} onClick ={() => handleViewClick(invoice)}
            >
              {invoice.thumbnailUrl && (
                <img
                  src={invoice.thumbnailUrl}
                  className="card-img-top"
                  alt="Invoice Thumbnail"
                  style={{ height: "200px", objectFit: "cover" }}
                />
               
              )}
              <div className="card-body">
                <h6 className="card-title mb-1">{invoice.title}</h6>
                <small className="text-muted">
                  Last Updated:{formatDate(invoice.lastUpdatedAt)}

                </small>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
    );
}


export default Dashboard;