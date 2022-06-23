// HTTP requests to GET backend Product Details and add to cart

import * as actionTypes from "../constants/cartConstants";

import axios from "axios"; // ajax requests

export const addToCart = (id, qty) => async (dispatch, getState) => {
	// From productRoutes
	const { data } = await axios.get(`/api/products/${id}`);

	dispatch({
		type: actionTypes.ADD_TO_CART, // expecting item to send to reducer
		payload: {
			product: data._id,
			name: data.name,
			imageUrl: data.imageUrl,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		},
	});
	// Once done with dispatch cart data save to localStorge via getState from redux thunk
	localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: actionTypes.REMOVE_FROM_CART,
		payload: id,
	});

	// Cart item will no longer have that item removed
	localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

/**
 * What is the dispatch method used for?
 * How do we use redux thunk in order to use "async (dispatch)" Asynchrony in React-Redux is often done via a thunk. This thunk function is middleware that unlocks async operations by deferring execution. 
 * 
 * * In this take, we’ll dive into what happens when there is more than a single async request. 
 * Async code is unpredictable because completion is not known ahead of time and multiple requests complicate things.
 */
