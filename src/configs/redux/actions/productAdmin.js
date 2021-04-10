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
  console.log("dari action product", data);
  return { type: "INSERT_PRODUCT_SUCCESS", payload: data };
};

const insertProductRequest = () => {
  return { type: "INSERT_PRODUCT_REQUEST" };
};

export const insertProductProcess = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    dispatch(insertProductRequest);
    axiosApiInstance
      .post(`${Url}/products`, data)
      .then((res) => {
        resolve(res.data.message);
        dispatch(insertProductSuccess());
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};
