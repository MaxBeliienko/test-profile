import axios from "axios";

const instance = axios.create({
  baseURL: "http://your-laravel-api-url/api", // замініть на URL вашого API
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
