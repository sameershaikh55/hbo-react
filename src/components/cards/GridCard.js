import React from "react";
import { connect } from "react-redux";
import add from "../../assets/img/add.svg";
import added from "../../assets/img/added.svg";
import { selectedKpiFunc } from "../../redux/action";

const GridCard = ({
	id,
	architectuurlaag,
	activiteiten,
	beheersingsniveaus,
	beschrijving,
	selectedKpiFunc,
	selectedKpi,
}) => {
	// ALREADY ADDED
	const addedFilter = selectedKpi.filter((item) => item.id === id);

	return (
		<div id={id} className="card">
			<div className="inner-card">
				<div className="card-head">
					<p className={architectuurlaag.replaceAll(" ", "-")}>
						{architectuurlaag}
					</p>
					<div
						onClick={() =>
							selectedKpiFunc({
								id,
								architectuurlaag,
								activiteiten,
								beheersingsniveaus,
								beschrijving,
							})
						}
						className="pointer"
					>
						{(addedFilter.length && <img src={added} alt="" />) || (
							<img src={add} alt="" />
						)}
					</div>
				</div>
				<h3 className="architectuurlaag-heading">
					{activiteiten}
					<span className="kpi-nummer">{beheersingsniveaus}</span>
				</h3>
				<p className="architectuurlaag-paragraaf">{beschrijving}</p>
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		selectedKpi: state.reducer.selectedKpi,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		selectedKpiFunc: function (data) {
			dispatch(selectedKpiFunc(data));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(GridCard);
