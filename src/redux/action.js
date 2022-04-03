import {
	SORTING,
	DATA,
	ACTIVE_FILTER,
	SEARCH_FIELD,
	SELECTED_KPI,
} from "./type";
import data from "../data/data.json";

// SORTING
export const sortingFunc = (data) => {
	return {
		type: SORTING,
		payload: data,
	};
};

// DATA
export const dataFunc = () => {
	return {
		type: DATA,
		payload: data.cards,
	};
};

// ACTIVE FILTERS
export const activeFilterFunc = (data) => {
	return {
		type: ACTIVE_FILTER,
		payload: data,
	};
};

// SEARCH FIELD CHANGE EVENT
export const searchFieldFunc = (data) => {
	return {
		type: SEARCH_FIELD,
		payload: data,
	};
};

// SEARCH FIELD CHANGE EVENT
export const selectedKpiFunc = (data) => {
	return {
		type: SELECTED_KPI,
		payload: data,
	};
};
