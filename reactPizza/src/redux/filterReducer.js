const SET_SORT_BY = 'react-pizza-SET_SORT_BY';
const SET_CATEGORY = 'react-pizza-SET_CATEGORY';

let initialState = {
    sortBy: {
        type: 'popular',
        order: 'desc'
    },
    category: null
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload,
            }
            case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}

export const setSortBy = (payload) => ({type: SET_SORT_BY, payload});
export const setCategory = (payload) => ({type: SET_CATEGORY, payload});

export default filterReducer;


