let apiUrl = "http://localhost:8000/";

if (import.meta.env.MODE === "production") {
  apiUrl = import.meta.env.VITE_API;
}

export default apiUrl;
