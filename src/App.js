import { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import SiteRoutes from "./SiteRoutes";

import "./styles.css";
import { validateToken } from "./client";

export const appContext = createContext(null);

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    validateToken().then((response) => {
      
      if (response) {        
        setUserLogged(true);      
        setUserName(response.user)
      }
    });
  }, []);

  return (
    <>
      <appContext.Provider value={{ userLogged, setUserLogged, userName , setUserName}}>
        <Navbar />
        <SiteRoutes />
      </appContext.Provider>
    </>
  );
}

export default App;
