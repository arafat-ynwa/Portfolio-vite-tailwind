import axios from "axios";

export function sendText(obj) {
  const response = axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/form/`, obj);
  return response;
}
