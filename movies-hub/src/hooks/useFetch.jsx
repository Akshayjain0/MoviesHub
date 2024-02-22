import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (url) => {
	const [loading, setLoading] = useState("");
	const [error, setError] = useState("");
	const [data, setData] = useState(null);

	useEffect(() => {
		setLoading(true);
		setData(null);
		setError(null);

		fetchDataFromApi(url)
			.then((res) => {
				setLoading(false);
				setData(res);
			})
			.catch((error) => {
				setLoading(false);
				setError(`Something went wrong fetchApiError ===> ${error}`);
			});
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
