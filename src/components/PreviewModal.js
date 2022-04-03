import React from "react";
import { connect } from "react-redux";
import cross from "../assets/img/cross.svg";

const PreviewModal = ({ selectedKpi, setPreview }) => {
	return (
		<div className="pop-up-container">
			<div className="inner-pop-up">
				<div className="pop-up-header">
					<p className="color1">Jouw KPI's</p>
					<img
						onClick={() => setPreview(false)}
						className="popup-close"
						src={cross}
						alt=""
					/>
				</div>

				<div className="pop-up-body">
					<div className="pop-up-inner-body">
						<div className="pop-up-inner-body-inner">
							{selectedKpi.map((item, i) => {
								return (
									<div className="pop-list-data-card">
										<div className="top-data">
											<span>{item.architectuurlaag}</span>{" "}
											<span className="left-border">{item.activiteiten}</span>{" "}
											<span>{item.beheersingsniveaus}</span>
										</div>
										<div>{item.beschrijving}</div>
										{(selectedKpi.length !== i + 1 && (
											<>
												<br /> <hr /> <br />
											</>
										)) ||
											""}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		selectedKpi: state.reducer.selectedKpi,
	};
};

export default connect(mapStatetoProps, null)(PreviewModal);
