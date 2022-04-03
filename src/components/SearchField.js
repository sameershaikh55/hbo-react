import React from "react";
import { connect } from "react-redux";
import { searchFieldFunc } from "../redux/action";
import searchIconLight from "../assets/img/search-icon-light.svg";

const SearchField = ({ searchField, searchFieldFunc }) => {
	return (
		<form className="search-form">
			<input
				autoComplete="on"
				autoFocus
				placeholder="Zoek KPI"
				name="keyword"
				value={searchField}
				onChange={(e) => searchFieldFunc(e.target.value)}
			/>
			<div className="search-btn">
				<button
					aria-label="Search KPI's"
					id="btn-search-icon"
					className="search-icon"
				>
					<img src={searchIconLight} alt="icon search" />
				</button>
			</div>
		</form>
	);
};

const mapStatetoProps = (state) => {
	return {
		searchField: state.reducer.searchField,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		searchFieldFunc: function (data) {
			dispatch(searchFieldFunc(data));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SearchField);
