import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ExportExcel = ({ selectedKpi }) => {
	// 	SAVING FILE DETAILS
	const fileType =
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	const fileExtension = ".xlsx";

	// 	EXPORT FUNCTION
	const exportToExcel = (csvData, fileName) => {
		const ws = XLSX.utils.json_to_sheet(csvData);
		const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
		const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
		const data = new Blob([excelBuffer], { type: fileType });
		FileSaver.saveAs(data, fileName + fileExtension);
	};

	return (
		<button
			className="green-btn"
			onClick={() => exportToExcel(selectedKpi, `Opslaan als`)}
		>
			Opslaan als (.xls)
		</button>
	);
};

export default ExportExcel;
