import axios from "axios";

const SET_PIZZAS = 'reactPizza_SET_PIZZAS';
const SET_IS_LOADING = 'reactPizza_SET_IS_LOADING';

let initialState = {
    pizzas: [],
    isLoading: false

}

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                pizzas: action.payload,
                isLoading: true
            }
            case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}


export const setPizzas = (payload) => ({type: SET_PIZZAS, payload});
export const setIsLoading = (payload) => ({type: SET_IS_LOADING, payload});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setIsLoading(false));
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {
        dispatch(setPizzas(data))
    });
};


export default pizzaReducer;


