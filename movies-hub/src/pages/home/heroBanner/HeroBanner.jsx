import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
	const [query, setQuery] = useState("");
	const [background, setBackground] = useState("");
	const navigate = useNavigate();
	const { data, loading } = useFetch("/movie/upcoming");
	const { url } = useSelector((state) => state.home);

	// console.log("data in hero banner", data);
	const searchQueryHandler = (event) => {
		if (event.key === "Enter" && query.length > 0) {
			navigate(`/search/${query}`);
		}
	};
	useEffect(() => {
		const bg =
			url.backdrop +
			data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
		setBackground(bg);
	}, [data]);

	return (
		<div className='heroBanner'>
			<div className='backdrop-img'>
				{!loading && <Img src={background} />}
			</div>
			<div className="opacity-layer"></div>
			<ContentWrapper>
				<div className='heroBannerContent'>
					<span className='title'>Welcome.</span>
					<span className='subTitle'>
						Millions of movies, TV shows and people to discover.
						Explore now.
					</span>
					<div className='searchInput'>
						<input
							type='text'
							placeholder='Search for a movie or tv shows....'
							value={query}
							onChange={(e) => {
								setQuery(e.target.value);
							}}
							onKeyUp={searchQueryHandler}
						/>
						<button>Search</button>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default HeroBanner;
