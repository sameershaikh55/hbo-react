import React, { useState } from "react";
import sort1 from "../assets/img/sort1.svg";
import sort10 from "../assets/img/sort1O.svg";
import sort2A from "../assets/img/sort2A.svg";
import sort2 from "../assets/img/sort2.svg";
import PreviewModal from "../components/PreviewModal";

// SORTING
import { sortingFunc } from "../redux/action";
import { connect } from "react-redux";
import ExportExcel from "./ExportAsExcel";

const SortingNDownload = ({ sorting, sortingFunc, selectedKpi }) => {
	const [preview, setPreview] = useState(false);

	return (
		<>
			{preview && <PreviewModal setPreview={setPreview} />}
			<div className="container">
				{selectedKpi.length && (
					<div className="print-preview-container">
						<ExportExcel selectedKpi={selectedKpi} />
						<button className="preview-btn" onClick={() => setPreview(true)}>
							Preview
						</button>
					</div>
				)}
				<div className="sorting-icons">
					{!sorting && (
						<img
							onClick={() => sortingFunc(false)}
							src={sort1}
							alt=""
							className="pointer"
						/>
					)}
					{sorting && (
						<img
							onClick={() => sortingFunc(false)}
							src={sort10}
							alt=""
							className="pointer"
						/>
					)}
					{sorting && (
						<img
							onClick={() => sortingFunc(true)}
							src={sort2A}
							alt=""
							className="pointer"
						/>
					)}
					{!sorting && (
						<img
							onClick={() => sortingFunc(true)}
							src={sort2}
							alt=""
							className="pointer"
						/>
					)}
				</div>
			</div>
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		sorting: state.reducer.sorting,
		selectedKpi: state.reducer.selectedKpi,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		sortingFunc: function (val) {
			dispatch(sortingFunc(val));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SortingNDownload);
