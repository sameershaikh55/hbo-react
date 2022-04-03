import React from "react";
import { connect } from "react-redux";

const SingleFilterBtn = ({
	CustomClass,
	screenSize,
	content,
	index,
	activeFilters,
}) => {
	const isActive = activeFilters.filter((content) => content.index === index);
	const btnClasses = ["all", "orange", "green", "purple", "blue", "yellow"];
	return (
		<button
			className={`${CustomClass} ${
				isActive.length && btnClasses[isActive[0].index]
			}`}
		>
			<span className="desktop">
				{(screenSize === "filters-desktop" && content.text) || ""}
			</span>
			<span className="mobile">
				{(screenSize === "filters-mobile" &&
					content.text === "Alle" &&
					content.text) || <img src={content.picture} alt="" />}
			</span>
		</button>
	);
};

const mapStatetoProps = (state) => {
	return {
		activeFilters: state.reducer.activeFilters,
	};
};

export default connect(mapStatetoProps, null)(SingleFilterBtn);
