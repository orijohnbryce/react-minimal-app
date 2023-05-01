import axios from "axios";

export async function axiosExample() {
  const data = {
    name: "Ori",
    message: "Hello from Axios!",
  };

  try {
    console.log("About to call by axios")
    const response = await axios.post("https://httpbin.org/anything", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
      },
    });
    console.assert(response.status == 200);
    console.log("Response:", response.data.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
