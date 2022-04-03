import React from "react";
import { connect } from "react-redux";
import { activeFilterFunc } from "../redux/action";
import SingleFilterBtn from "./SingleFilterBtn";

const FilterBtn = ({
	filterBtns,
	CustomClass,
	screenSize,
	activeFilterFunc,
}) => {
	return (
		<div className={screenSize}>
			{filterBtns.map((content, i) => {
				return (
					<div
						onClick={() =>
							activeFilterFunc({
								index: i,
								filterWord: content.text,
							})
						}
						key={i}
					>
						<SingleFilterBtn
							CustomClass={CustomClass}
							screenSize={screenSize}
							content={content}
							index={i}
						/>
					</div>
				);
			})}
		</div>
	);
};

const mapDispatchtoProps = (dispatch) => {
	return {
		activeFilterFunc: function (data) {
			dispatch(activeFilterFunc(data));
		},
	};
};

export default connect(null, mapDispatchtoProps)(FilterBtn);
