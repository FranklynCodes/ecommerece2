// Dispatch all actions to get from the database
import * as actionTypes from "../constants/productConstants";
import axios from "axios";

// @ Home page
export const getProducts = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

		const { data } = await axios.get("/api/products");

		dispatch({
			type: actionTypes.GET_PRODUCTS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCTS_FAIL,
			// If error has a .response and response.data.message then send error.response.data.message back to payload if false send error.message
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// # Find products Details via ID | @productRoutes.js
export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/products/${id}`);

		dispatch({
			type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
			// If error has a .response and response.data.message then send error.response.data.message back to payload if false send error.message
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
// # When you switch back to a screen remove the state
export const removeProductDetails = () => (dispatch) => {
	dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};
