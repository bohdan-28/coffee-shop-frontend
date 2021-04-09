import axios from 'axios'

export const getCoffeeProduct = () => {
    return (dispatch) => {
        axios.get(`https://tickitz-webku.fwdev.online/api/v1/products?keyword=coffe&sortBy=totalSale&order=asc&page=1`)
            .then((res) => {
                const coffeeProduct = res.data.data
                dispatch({ type: 'GET_COFFEE', payload: coffeeProduct })
            }).catch(() => {
                alert('cannot get products ')
            })
    }
}

export const getFavProduct = () => {
    return (dispatch) => {
        axios.get(`https://tickitz-webku.fwdev.online/api/v1/products`)
            .then((res) => {
                const favProduct = res.data.data
                dispatch({ type: 'GET_FAVOURITE', payload: favProduct })
            }).catch(() => {
                alert('cannot get products ')
            })
    }
}
export const getProductById = (id) => {
    return (dispatch) => {
        axios.get(`https://tickitz-webku.fwdev.online/api/v1/products/${id}`)
            .then((res) => {
                const favProduct = res.data.data[0]
                dispatch({ type: 'GET_PRODUCT_ID', payload: favProduct })
            }).catch(() => {
                alert('cannot get products ')
            })
    }
}