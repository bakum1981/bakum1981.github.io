const ADD_PIZZA_TO_CART = 'reactPizza_ADD_PIZZA_TO_CART';
const ClEAR_CART = 'reactPizza_ClEAR_CART';
const REMOVE_PIZZA = 'reactPizza_REMOVE_PIZZA';
const PLUS_ITEM = 'reactPizza_PLUS_ITEM';
const MINUS_ITEM = 'reactPizza_MINUS_ITEM';

let initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);
const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART: {
            const currentItems = !state.items[action.payload.id] ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: getTotalPrice(currentItems),
                    totalCount: currentItems.length
                }
            }
            const items = Object.values(newItems).map(item => item.items);
            const allItems = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allItems);
            return {
                ...state,
                items: newItems,
                totalCount: allItems.length,
                totalPrice
            }

        }
        case ClEAR_CART:
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        case REMOVE_PIZZA: {
            const newItems = {
                ...state.items
            }

            const count = newItems[action.payload].totalCount;
            const price = newItems[action.payload].totalPrice;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - price,
                totalCount: state.totalCount - count
            }
        }

        case PLUS_ITEM: {
            const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];
            const addedPrice = state.items[action.payload].items[0].price;
            const price = state.items[action.payload].totalPrice + addedPrice;
            const totalCount = state.totalCount + 1;
            const totalPrice = state.totalPrice + addedPrice;

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: price,
                        totalCount: newItems.length
                    }
                },
                totalPrice,
                totalCount,
            }
        }

        case MINUS_ITEM: {
            const newItems = {
                ...state.items,
            };
            const oldItems = state.items[action.payload].items;
            const minLength = oldItems.length > 1;
            const items = minLength ? newItems[action.payload].items.slice(1) : oldItems;
            const deletedPrice = state.items[action.payload].items[0].price;
            const price = minLength ? state.items[action.payload].totalPrice - deletedPrice
                : state.items[action.payload].totalPrice;
            const totalPrice = minLength ? state.totalPrice - deletedPrice
                : state.totalPrice;
            const totalCount = minLength ? state.totalCount - 1 : state.totalCount;

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: items,
                        totalPrice: price,
                        totalCount: items.length
                    }
                },
                totalPrice,
                totalCount
            }
        }


        default:
            return state;
    }
}


export const addPizzaToCart = (payload) => ({type: ADD_PIZZA_TO_CART, payload});
export const clearCart = () => ({type: ClEAR_CART});
export const removePizza = (payload) => ({type: REMOVE_PIZZA, payload});
export const plusItem = (payload) => ({type: PLUS_ITEM, payload});
export const minusItem = (payload) => ({type: MINUS_ITEM, payload});


export default pizzaReducer;


