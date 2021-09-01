import * as actionTypes from "../constants/cartConstants";

// cartItems = array/document
export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const item = action.payload;

			// Accpets ID as action.payload Searches through state to see if a match is found stroing data in existItem EX: Adding +1 to cart
			const existItem = state.cartItems.find((x) => {
				// if id is equal to item id
				x.product === item.product;
			});
			console.log("existItem:", existItem);

			// If existItem is found destructure state then  update object array with item, action.payload if not set  x.product equal to the current item it is mapping through.
			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) => {
						// Set item which contains action.payload if true else set x.product equal to
						x.product === existItem.product ? item : x;
						console.log("x.product:", x.product);
					}),
				};
			} else {
				// First time item is added to the cart
				return {
					...state,
					cartItems: [...state.cartItems, item], // adds to end of array
				};
			}
		case actionTypes.REMOVE_FROM_CART:
			// Loop through state, cartItems and filter though each individual item and see if item id matches a element inside cartItems array
			// Which ever cartitem id does not match action id, current element is stored onto the end of the array is not returned in the new array created via filter
			return {
				...state,
				cartItems: state.cartItems.filter((x) => {
					x.product !== action.product;
				}),
			};

		default:
			return state;
	}
};

// actionTypes => cartReducer
