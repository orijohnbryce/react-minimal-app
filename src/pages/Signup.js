import React, { useContext, useState } from "react";
import { appContext } from "../App";
import { useNavigate } from "react-router-dom";
import { signup } from "../client";

function Signup() {
  const [un, setUn] = useState("");
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const { setUserLogged, setUserName } = useContext(appContext);

  const nav = useNavigate();

  const handleSubmit = async () => {
    if (!un | !pw | !email) {
      setError("You must enter username password and email");
      return;
    }
    const res = await signup(un, pw, email);
    if (res) {
      setUserLogged(true);
      setUserName(un);
      nav("/");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        border: "solid",
        maxWidth: "50%",
        margin: "2rem auto",
      }}
    >
      <h4> הרשמה </h4>
      <input
        style={{ fontSize: "1.5rem", width: "90%", margin: "3%" }}
        placeholder="enter user name"
        onChange={(e) => {
          setUn(e.target.value);
        }}
      />
      <br />
      <input
        style={{ fontSize: "1.5rem", width: "90%", margin: "3%" }}
        type="password"
        placeholder="enter password"
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <input
        style={{ fontSize: "1.5rem", width: "90%", margin: "3%" }}
        type="email"
        placeholder="enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          margin: "4%",
        }}
      >
        <button className="btn btn-primary" onClick={handleSubmit}>
          להרשמה
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            nav("/login");
          }}
        >
          רשום כבר? לחץ להתחברות
        </button>
      </div>
      <br />
      <br />
      {error && <p style={{ color: "red" }}> {error}</p>}
    </div>
  );
}

export default Signup;
