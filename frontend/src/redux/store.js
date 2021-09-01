import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({});

const middleWare = [thunk]; // helps makes async requests via redux think alternative is redux saga

// Download browser app for Redux
const store = createStore(
	reducer,
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
