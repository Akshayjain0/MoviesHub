import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
const SearchResult = () => {
	const param = useParams();
	console.log(param);
	return <div>SearchResult</div>;
};

export default SearchResult;
