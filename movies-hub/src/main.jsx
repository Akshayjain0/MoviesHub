import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { PageNotFound, Home, Details, SearchResult , Explore} from "./pages/index.js";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />}/>
			<Route path='/:mediaType/:id' element={<Details />} />
			<Route path='/search/:query' element={<SearchResult />} />
			<Route path='/explore/:mediaType' element={<Explore />} />
			<Route path='/*' element={<PageNotFound />} />
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
