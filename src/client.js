import axios from "axios";

export async function getLoginToken(un, pw) {
  try {
    const res = await axios.post("http://localhost:8000/obtain-token", {
      username: un,
      password: pw,
    });
    const token = res.data.token;

    if (res.status == 200) {
      localStorage.setItem("token", token);
      return token;
    } else {
      return false;
    }
  } catch (error) {
    // window.alert("Error at login");
  }
}

export async function validateToken() {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get("http://localhost:8000/check-token", {
      headers: { Authorization: `token ${token}` },
    });
    if (res.status == 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (error) {
    // window.alert("Error checking token");
  }
}

export async function signup(un, pw, email) {
  const data = {
    username: un,
    password: pw,
    email: email,
  };
  try {
    const res = await axios.post("http://localhost:8000/signup", data);

    if (res.status == 200) {
      localStorage.setItem("token", res.data.token);
      return res.data;
    } else {
      window.alert("Error signup");
      console.log(res.data)
      return false;
    }
  } catch (error) {
    window.alert("Error signup");
    console.log(error)
    return false
  }
}
