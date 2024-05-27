import axios from "axios";

import { ErrorToastify } from "../../Utils/Toastifies/ErrorToastify.Utils";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  ErrorToastify("برای دسترسی به منابع و امکانات سایت ابتدا وارد شوید.");

  if (err.response.status >= 400 && err.response.status < 500) {
    alert("Client error: " + err.response.status);
  }
  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
 


  return opt;
});

export  {instance};