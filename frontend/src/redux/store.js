import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import { getProductsReducer, getProductDetailsReducer } from "./reducers/productReducers";

// Global state
const reducer = combineReducers({
	// Cart value in store
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk]; // helps makes async requests via redux thunk alternative is redux saga

// Stores cart data in local storage so data does not get reset on page refresh
const cartItemsInLocalStorage = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: [];

const INITIAL_STATE = {
	cart: {
		cartItems: cartItemsInLocalStorage,
	},
};

// https://redux.js.org/usage/configuring-your-store
const store = createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(...middleware)) // enhancer
);

export default store;
