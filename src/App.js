import React, { useEffect } from "react";
import { connect } from "react-redux";
import { dataFunc } from "./redux/action";

// CSS
import "./styles/styles.css";

// COMPONENTS
import FilterNavbar from "./components/FilterNavbar";
import SearchField from "./components/SearchField";
import SortingNDownload from "./components/SortingNDownload";
import GridNList from "./components/GridNList";

function App({ dataFunc }) {
	useEffect(() => {
		dataFunc();
	}, []);

	return (
		<main>
			<FilterNavbar />
			<SearchField />
			<SortingNDownload />
			<GridNList />
		</main>
	);
}

const mapDispatchtoProps = (dispatch) => {
	return {
		dataFunc: function () {
			dispatch(dataFunc());
		},
	};
};

export default connect(null, mapDispatchtoProps)(App);
