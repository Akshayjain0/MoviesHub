import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
const Popular = () => {
	const [endpoint, setEndpoint] = useState("movie");
	const { data, loading } = useFetch(`/${endpoint}/top_rated`);
	// console.log(data);
	const onTabChange = (tab) => {
		// console.log(tab)
		setEndpoint(tab === "Movies" ? "movie" : "tv");
	};
	return (
		<div className='carouselSection'>
			<ContentWrapper>
				<span className='carouselTitle'>Top Rated</span>
				<SwitchTabs
					data={["Movies", "Tv Shows"]}
					onTabChange={onTabChange}
				/>
			</ContentWrapper>
			<Carousel
				data={data?.results}
				endpoint={endpoint}
				loading={loading}
			/>
		</div>
	);
};

export default Popular;
