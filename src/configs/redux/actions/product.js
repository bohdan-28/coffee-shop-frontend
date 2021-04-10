import axios from "axios";
import Swal from "sweetalert2";

export const getProduct = (data) => (dispatch) => {
  const Url = process.env.REACT_APP_API_URL;
  return new Promise((resolve, reject) => {
    if (data === "favourite") {
      axios
        .get(`${Url}/products/${data}`)
        .then((res) => {
          const product = res.data.data;
          dispatch({ type: "GET_PRODUCT", payload: product });
          resolve(res.data.data);
        })
        .catch((err) => {
          reject(new Error(err.response.data.message));
        });
    } else {
      axios
        .get(`${Url}/products?keyword=${data}`)
        .then((res) => {
          const product = res.data.data;
          dispatch({ type: "GET_PRODUCT", payload: product });
          resolve(res.data.data);
        })
        .catch((err) => {
          reject(new Error(err.response.data.message));
        });
    }
  });
};

export const getProductById = (id) => (dispatch) => {
  const Url = process.env.REACT_APP_API_URL;
  axios
    .get(`${Url}/products/${id}`)
    .then((res) => {
      const oneProduct = res.data.data[0];
      dispatch({ type: "GET_PRODUCT_DETAIL", payload: oneProduct });
    })
    .catch((err) => {
      Swal.fire({
        title: "Error!",
        text: err.response.data.message,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6a4029",
      });
    });
};
