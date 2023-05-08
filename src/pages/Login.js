import React, { useContext, useState } from "react";
import { getLoginToken, validateToken } from "../client";
import { appContext } from "../App";
import { useNavigate } from "react-router";

function Login() {
  const [un, setUn] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const { setUserLogged, setUserName } = useContext(appContext);

  const nav = useNavigate();

  const handleSubmit = async () => {
    const token = await getLoginToken(un, pw);
    if (token) {
      setUserLogged(true);
      const data = await validateToken();
      setUserName(data.user);
      nav("/");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          border: "solid",
          maxWidth: "50%",
          margin: "2rem auto",
        }}
      >
        <h4> התחברות </h4>
        <input
          style={{ fontSize: "1.5rem", width: '90%', margin: '3%' }}
          placeholder="enter user name"
          onChange={(e) => {
            setUn(e.target.value);
          }}
        />
        <br />
        <input
          style={{ fontSize: "1.5rem", width: '90%' }}
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <br />
        <div style={{width: '90%', display:'flex', justifyContent: 'space-between', margin: '4%'}}>
          <button className="btn btn-primary" onClick={handleSubmit}>
            לחץ להתחברות
          </button>
          <button className="btn btn-secondary" onClick={()=>{nav('/signup')}}>
            להרשמה
          </button>
        </div>
        <br />
        <br />
        {error && (
          <p style={{ color: "red" }}>
            שם משתמש או סיסמה אינם נכונים. נסה שנית
          </p>
        )}
      </div>
    </>
  );
}

export default Login;
