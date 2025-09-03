import { Link, useNavigate } from "react-router-dom";
import Logo from "./logo";


const MenuBar = () => {
  
  const navigate = useNavigate();
  const generate= () => {
    navigate("/generate")
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container py-2">
        <Link className="navbar-brand d-flex" to="/">
          <Logo/>
          <span className="fw-bolder fs-4 mx-3" style={{ letterSpacing: '0.5px', color: '#0D6EFDB2' }}>
            QuickInvoice
          </span>
        </Link>
                
        <div>
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-items">
              <Link className="nav-link fw-medium" to="/">Home</Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link fw-medium" to="/dashboard">Dashoard</Link>
            </li>
            <li className="nav-items">
              <button className="nav-link fw-medium" onClick={generate}>
               Generate
              </button>
            </li>
            
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button className="btn btn-primary rounded-pill px-4">
                Login/Signup
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default MenuBar;