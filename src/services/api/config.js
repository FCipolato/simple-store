import { toast } from "react-toastify";

import axios from "axios";

const api = axios.create({
  baseURL: "https://5d6da1df777f670014036125.mockapi.io/api/v1/",
});
const unexpectedErrorMsg =
  "Desculpe, um erro inesperado ocorreu. Tente novamente em instantes.";

const handleErrorResponse = (errorResponse) => {
  const errorCode = errorResponse.status;
  if (errorCode >= 500) {
    toast.error(unexpectedErrorMsg);
  }
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      handleErrorResponse(error.response);
    } else {
      toast.error(unexpectedErrorMsg);
    }

    return Promise.reject(error);
  }
);

export default api;
