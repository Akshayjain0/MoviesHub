import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice.js";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/index.js";

function App() {
	const dispatch = useDispatch();
	const [count, setCount] = useState(0);
	useEffect(() => {
		fetchApiConfig();
	}, []);
	const fetchApiConfig = () => {
		fetchDataFromApi("/configuration").then((res) => {
			const url = {
				backdrop: res.images.secure_base_url + "original",
				poster: res.images.secure_base_url + "original",
				profile: res.images.secure_base_url + "original",
			};
			dispatch(getApiConfiguration(url));
			// console.log(res);
		});
	};
	// const { url } = useSelector((state) => state.home);
	return (
		<>
			<Header />
			<Outlet /> 
			<Footer />
		</>
	);
}

export default App;
