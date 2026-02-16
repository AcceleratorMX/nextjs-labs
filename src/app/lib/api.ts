import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
    adapter: "fetch",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
