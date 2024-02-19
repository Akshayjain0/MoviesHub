import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import store from "./store/store.js";
import { Provider } from "react-redux";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import {
	Details,
	Explore,
	Home,
	PageNotFound,
	SearchResult,
} from "./pages/index.js";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route path='' element={<Home />} />
			<Route path=':mediaType/:id' element={<Details />} />
			<Route path='search/:query' element={<SearchResult />} />
			<Route path='explore/:mediaType' element={<Explore />} />
			<Route path='*' element={<PageNotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</Provider>
);
