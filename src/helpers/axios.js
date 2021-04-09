const axios = require("axios");
const axiosApiInstance = axios.create();
const Swal = require("sweetalert2");

axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      if (error.response.data.message === "Token expired") {
        localStorage.removeItem("token");
      }
      if (error.response.data.message === "Invalid signature") {
        localStorage.removeItem("token");
        Swal.fire({
          title: "Warning!",
          text: "Do not change the token",
          icon: "warning",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6a4029",
        });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
