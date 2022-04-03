import React from "react";
import { connect } from "react-redux";

// COMP
import ListCard from "../components/cards/ListCard";
import GridCard from "../components/cards/GridCard";

const GridNList = ({ sorting, data, searchField, activeFilters }) => {
	let filteredData = data.filter((val) => {
		if (activeFilters.length && activeFilters[0].filterWord === "Alle") {
			return data;
		} else {
			return activeFilters.find((a) => {
				return val.architectuurlaag === a.filterWord;
			});
		}
	});

	return (
		<div className="grid-n-list-container">
			{(!sorting && (
				<div className="grid-cards">
					{filteredData
						.filter((item) => {
							return (
								item.architectuurlaag
									.toLowerCase()
									.includes(searchField.toLowerCase()) ||
								item.activiteiten
									.toLowerCase()
									.includes(searchField.toLowerCase()) ||
								item.beschrijving
									.toLowerCase()
									.includes(searchField.toLowerCase()) ||
								item.tags
									.toString()
									.replaceAll(",", " ")
									.toLowerCase()
									.includes(searchField.toLowerCase())
							);
						})
						.map((content, i) => {
							return <GridCard key={i} {...content} />;
						})}
				</div>
			)) || (
				<div className="list-cards">
					{filteredData
						.filter((item) => {
							return (
								item.architectuurlaag
									.toLowerCase()
									.includes(searchField.toLowerCase()) ||
								item.activiteiten
									.toLowerCase()
									.includes(searchField.toLowerCase()) ||
								item.beschrijving
									.toLowerCase()
									.includes(searchField.toLowerCase()) ||
								item.tags
									.toString()
									.replaceAll(",", " ")
									.toLowerCase()
									.includes(searchField.toLowerCase())
							);
						})
						.map((content, i) => {
							return <ListCard key={i} {...content} />;
						})}
				</div>
			)}
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		sorting: state.reducer.sorting,
		data: state.reducer.data,
		searchField: state.reducer.searchField,
		activeFilters: state.reducer.activeFilters,
	};
};

export default connect(mapStatetoProps, null)(GridNList);
