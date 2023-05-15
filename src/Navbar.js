import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { appContext } from "./App";

function Navbar() {
  const { userLogged, userName, setUserLogged } = useContext(appContext);
  const location = useLocation();
  const path = location.pathname;
  const nav = useNavigate();
  return (
    <>
      <nav className="navbar">
        <a
          onClick={() => {
            nav("/");
          }}
          className="site-title"
        >
          Logicode
        </a>

        <ul className="bar-list">
          <li className={path == "/about" ? "active" : ""}>
            <a
              onClick={() => {
                nav("/about");
              }}
            >
              אודות
            </a>
          </li>
          <li className={path == "/products" ? "active" : ""}>
            <a
              onClick={() => {
                nav("/products");
              }}
            >
              מוצרים
            </a>
          </li>
          {!userLogged && (
            <li className={path == "/login" ? "active" : ""}>
              <a
                onClick={() => {
                  nav("/login");
                }}
              >
                התחבר
              </a>
            </li>
          )}

          {userLogged && (
            <>
              <li className={path == "/login" ? "active" : ""}>
                <a style={{direction: 'rtl'}}
                  onClick={() => {
                    localStorage.removeItem("token");
                    setUserLogged(false);
                    nav("/login");
                  }}
                >
                  התנתק
                </a>
              </li>
              <li className={path == "/login" ? "active" : ""}>
                <a style={{ direction: 'rtl' }}
                  disabled
                  onClick={() => {}}
                >
                   שלום {userName} 
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
