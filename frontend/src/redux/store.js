import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers.js";
import { getProductsReducer, getProductsDetailsReducer } from "./reducers/productReducers.js";

// OverSeen in Redux Browser State
const reducer = combineReducers({
	// Cart value in store
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductsDetails: getProductsDetailsReducer,
});

const middleWare = [thunk]; // helps makes async requests via redux think alternative is redux saga

// Stores cart data in local storage so data does not get reset on page refresh
const cartFromLocalStorage = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: [];

const INITAL_STATE = {
	cart: {
		cartItems: cartFromLocalStorage,
	},
};
// Download browser app for Redux
const store = createStore(
	reducer,
	INITAL_STATE,
	composeWithDevTools(applyMiddleware(...middleWare)) // enhancer(applyMiddleware(middleWarePlaceHolder ))
	// composeWithDevTools = enhancer
);

export default store;

/**
 *
 * What does store require?
 * Why does store require a inital state?
 * Store Requires a enhancer
 * What is a store inital state?
 *
 *
 *
 */
