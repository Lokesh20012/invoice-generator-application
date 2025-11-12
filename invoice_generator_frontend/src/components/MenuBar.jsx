import { Link, useNavigate } from "react-router-dom";
import Logo from "./logo";
import { useEffect, useState } from "react";

const MenuBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const generate = () => navigate("/generate");
  const login = () => navigate("/login");
  const signup = () => navigate("/signup");

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container py-2">
        <Link className="navbar-brand d-flex" to="/">
          <Logo />
          <span
            className="fw-bolder fs-4 mx-3"
            style={{ letterSpacing: "0.5px", color: "#0D6EFDB2" }}
          >
            QuickInvoice
          </span>
        </Link>

        <div>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-items">
              <Link className="nav-link fw-medium" to="/">
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link fw-medium" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-items">
              <button className="nav-link fw-medium" onClick={generate}>
                Generate
              </button>
            </li>

            {!isLoggedIn ? (
              <>
                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                  <button
                    className="btn btn-primary rounded-pill px-4"
                    onClick={login}
                  >
                    Login
                  </button>
                </li>

                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                  <button
                    className="btn btn-outline-primary rounded-pill px-4"
                    onClick={signup}
                  >
                    Signup
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <button
                  className="btn btn-danger rounded-pill px-4"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
