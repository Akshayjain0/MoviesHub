import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice.js";

function App() {
	const dispatch = useDispatch();
	const [count, setCount] = useState(0);
	useEffect(() => {
		apiTesting();
	}, []);
	const apiTesting = () => {
		fetchDataFromApi("/movie/popular").then((res) => {
			dispatch(getApiConfiguration(res));
			console.log(res);
		});
	};
	const { url } = useSelector((state) => state.home);
	return <div className='App'>{url?.total_pages}</div>;
}

export default App;
