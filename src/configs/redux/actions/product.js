import axios from "axios";

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
  return (resolve, reject) => {
    axios
      .get(`${Url}/products/${id}`)
      .then((res) => {
        const oneProduct = res.data.data[0];
        dispatch({ type: "GET_PRODUCT_ID", payload: oneProduct });
        resolve(res.data.data[0]);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  };
};
