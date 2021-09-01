import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store.js";
// Provider, provies our current state or the state in our redux store to the components
// Provider, requires store prop
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#passing-the-store-with-provider

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			{/* <h1>Ecommerce APP </h1> */}
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// Store -> Index -> Provider -> <App/>
