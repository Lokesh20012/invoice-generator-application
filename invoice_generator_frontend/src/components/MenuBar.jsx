
import { Link } from "react-router-dom";
import Logo from "./logo";

const MenuBar = ()=>{
    return(
     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container py-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
         <Logo/>
         <span className="fw-bolder fs-4 mx-3" style={{letterSpacing:'0.5px', color :'#0D6EFDB2'}}>
          QuickInvoice
         </span>
        </Link>
      </div>
     </nav>
 )
}
export default MenuBar;