import './Dashboard';
import {useState, useContext, useEffect} from 'react';
import { AppContext } from "../../context/AppContext";
import { getAllInvoices } from '../../service/invoiceService';
import {toast} from 'react-hot-toast';
import { Plus } from 'lucide-react';    


const Dashboard = () =>{

    const[invoices, setInvoices] = useState([]);
    const {baseURL} = useContext(AppContext);
    
    useEffect(() => {
                        const fetchInvoices = async() =>{
                            try{
                                const response  = await getAllInvoices(baseURL);
                                    setInvoices(response.data);
                            }
                        
                        catch(error){
                            console.log(error);
                            toast.error('failed to fetch invoices', error);
                        }
                        
             }
             fetchInvoices;
            }, [baseURL]);

    return (
        
     <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
            {/* Create New Invoice Card */}
            <div className="col">
                <div
                    className="card h-100 d-flex justify-content-center align-items-center border border-2 border-light shadow-sm"
                    style={{ cursor: "pointer", minHeight: "270px" }}
                    
                >
                    <Plus size={48} />
                    <p className="mt-3 fw-medium">Create New Invoice</p>
                 </div>
            </div>


            {/* {exsisting invoice} */}

        {invoices.map((invoice, idx) => (
            <div key={idx} className="col">
            <div
              className="card h-100 shadow-sm"
              style={{ cursor: "pointer", minHeight: "270px" }}
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
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
    );
}


export default Dashboard;