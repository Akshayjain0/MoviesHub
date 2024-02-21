import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
const Explore = () => {
	const param = useParams();
	console.log(param);
	return <div>Explore</div>;
};

export default Explore;
