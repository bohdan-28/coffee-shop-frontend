import axiosApiInstance from "../../../helpers/axios";

export const insertCart = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .post(`${Url}/orders/cart`, data)
      .then((res) => {
        resolve(res.data.message);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const getUserCart = (user) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .get(`${Url}/orders/cart/user/${user}`)
      .then((res) => {
        dispatch({
          type: "GET_CART",
          payload: res.data.data,
        });
        resolve(res.data.data);
      })
      .catch((err) => {
        dispatch({
          type: "GET_CART_FAILED",
        });
      });
  });
};

export const insertOrder = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.REACT_APP_API_URL;
    axiosApiInstance
      .post(`${Url}/orders`, data)
      .then((res) => {
        resolve(res.data.message);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};
