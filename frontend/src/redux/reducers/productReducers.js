// Fully handle the state from the back end
import * as actionTypes from "../constants/productConstants";

// 1st reducer GETPRODUCT REDUCER, GET all products when we get to our homepage
export const getProductsReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS_REQUESTS:
			return {
				loading: true, // wait till value is equal to false to continue run time, simialar to async
				products: [],
			};
		case actionTypes.GET_PRODUCTS_SUCCESS:
			return {
				loading: false,
				products: action.payload, // recived array from backend populates products
			};
		case actionTypes.GET_PRODUCTS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

// Get Individual product details when click on item
// Specific Product
export const getProductsDetailsReducer =
	(state,
	{ product: {} },
	(action) => {
		switch (action.type) {
			case actionTypes.GET_PRODUCT_DETAILS_REQUESTS:
				return {
					loading: true,
				};
			case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
				return {
					loading: false,
					product: action.payload,
				};
			case actionTypes.GET_PRODUCTS_FAIL:
				return {
					loading: false,
					error: action.payload,
				};
			case actionTypes.GET_PRODUCT_DETAILS_RESET: {
				return {
					product: {},
				};
			}
			default:
				return state;
		}
	});
