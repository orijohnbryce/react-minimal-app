import React, { useContext, useState } from "react";
import { getLoginToken, validateToken } from "../client";
import { appContext } from "../App";
import { useNavigate } from "react-router";

function Login() {
  const [un, setUn] = useState("");
    const [pw, setPw] = useState("");
    const [error, setError] = useState(false)
    const { setUserLogged, setUserName } = useContext(appContext)
    const nav = useNavigate()

    const handleSubmit = async () => {
        const token = await getLoginToken(un, pw);
        if (token) {
            setUserLogged(true)
            const data = await validateToken()
            setUserName(data.user)
            nav("/")
        } else {
            setError(true)
        }              
    }

  return (
    <>
      <div
        style={{
          textAlign: "center",          
          border: "solid",
          maxWidth: "30%",
          margin: "2rem auto",
        }}
      >
        <input
          style={{ fontSize: "1.5rem" }}
          placeholder="enter user name"
          onChange={(e) => {
            setUn(e.target.value);
          }}
        />
        <br />
        <input
          style={{ fontSize: "1.5rem" }}
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <br />
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          לחץ להתחברות
              </button>
              <br />
              <br />
              {error && <p style={{color: "red"}}> שם משתמש או סיסמה אינם נכונים. נסה שנית</p>}
      </div>
    </>
  );
}

export default Login;
