const initialState = {
    product: {
        name: '',
        price: 0,
        size: '',
        description: '',
    },
    favProducts: [],
    coffeeProducts: [],
    nonCoffeeProducts: [],
    foodProducts: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_FAVOURITE':
            return {
                ...state,
                favProducts: action.payload
            }
        case 'GET_COFFEE':
            return {
                ...state,
                coffeeProducts: action.payload
            }
        case 'GET_NON_COFFEE':
            return {
                ...state,
                nonCoffeeProducts: action.payload
            }
        case 'GET_FOOD_COFFEE':
            return {
                ...state,
                foodProducts: action.payload
            }
        case 'GET_PRODUCT_ID':
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}
export default productReducer;