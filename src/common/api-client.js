import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../config";

const api = axios.create({
  baseURL:
    (process.env.REACT_APP_BACKEND_URL || REACT_APP_BACKEND_URL) + "/api",
});
export default api;
