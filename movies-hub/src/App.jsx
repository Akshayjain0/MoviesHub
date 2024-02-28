import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice.js";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/index.js";

function App() {
	const dispatch = useDispatch();
	const [count, setCount] = useState(0);
	useEffect(() => {
		fetchApiConfig();
		genresCall();
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

	const genresCall = async () => {
		let promises = [];
		let endPoints = ["tv", "movie"];
		let allGenres = {};

		endPoints.forEach((url) => {
			promises.push(fetchDataFromApi(`/genre/${url}/list`));
		});
		const data = await Promise.all(promises);
		// console.log(data);
		data.map(({ genres }) => {
			return genres.map((item) => (allGenres[item.id] = item));
		});
		// console.log(allGenres);
		dispatch(getGenres(allGenres));
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
