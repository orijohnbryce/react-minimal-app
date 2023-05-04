import axios from "axios";

export async function axiosExample() {
  const url = "https://httpbin.org/anything";
  const data = { name: "Ori" };
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
  };

  try {
    console.log("About to call with Axios");
    const response = await axios.post(url, data, { headers });
    console.assert(response.status == 200);
    console.log("Response:", response.data.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
