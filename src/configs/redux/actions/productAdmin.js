// import axios from "axios";
import axiosApiInstance from "../../../helpers/axios";

const insertProductSuccess = () => {
  const data = {
    name: "",
    image: {},
    price: "1",
    categoryID: 1,
    description: "",
    size: "",
    deliveryMethod: "",
    hourStart: "00:00",
    hourEnd: "00:00",
    stock: "1",
  };
  return { type: "INSERT_PRODUCT_SUCCESS", payload: data };
};

const getProductSuccess = (data) => {
  return { type: "GET_PRODUCT_SUCCESS", payload: data };
};
const updateProductSuccess = (data) => {
  return { type: "UPDATE_PRODUCT_SUCCESS", payload: {} };
};
const deleteProductSuccess = (data) => {
  return { type: "DELETE_PRODUCT_SUCCESS", payload: {} };
};
const productRequest = () => {
  return { type: "PRODUCT_REQUEST" };
};

const productFailure = () => {
  return { type: "PRODUCT_FAILURE" };
};

export const insertProductProcess = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    dispatch(productRequest);
    axiosApiInstance
      .post(`${Url}/products`, data)
      .then((res) => {
        dispatch(insertProductSuccess());
        resolve(res.data.message);
      })
      .catch((err) => {
        dispatch(productFailure);
        reject(new Error(err.response.data.message));
      });
  });
};

export const getProductProcess = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    dispatch(productRequest);
    axiosApiInstance
      .get(`${Url}/products/${id}`)
      .then((res) => {
        dispatch(getProductSuccess(res.data.data[0]));
        resolve(res.data.message);
      })
      .catch((err) => {
        dispatch(productFailure);
        reject(new Error(err.response.data.message));
      });
  });
};

export const updateProductProcess = (id, data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    dispatch(productRequest);
    axiosApiInstance
      .put(`${Url}/products/${id}`, data)
      .then((res) => {
        dispatch(updateProductSuccess());
        resolve(res.data.message);
      })
      .catch((err) => {
        dispatch(productFailure);
        reject(new Error(err.response.data.message));
      });
  });
};

export const deleteProductProcess = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    dispatch(productRequest);
    axiosApiInstance
      .delete(`${Url}/products/${id}`)
      .then((res) => {
        dispatch(deleteProductSuccess());
        resolve(res.data.message);
      })
      .catch((err) => {
        dispatch(productFailure);
        reject(new Error(err.response.data.message));
      });
  });
};
