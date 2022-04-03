import {
	SORTING,
	DATA,
	ACTIVE_FILTER,
	SEARCH_FIELD,
	SELECTED_KPI,
} from "./type";

const initialState = {
	sorting: false,
	data: [],
	activeFilters: [
		{
			index: 0,
			filterWord: "Alle",
		},
	],
	searchField: "",
	selectedKpi: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// SORTING
		case SORTING:
			return {
				...state,
				sorting: action.payload,
			};

		// DATA
		case DATA:
			return {
				...state,
				data: action.payload,
			};

		// SEARCH FIELD
		case SEARCH_FIELD:
			return {
				...state,
				searchField: action.payload,
			};

		// SEARCH FIELD
		case SELECTED_KPI:
			const isAddedKpi = state.selectedKpi.filter((content) => {
				return content.id === action.payload.id;
			});

			return {
				...state,
				selectedKpi:
					(isAddedKpi.length &&
						state.selectedKpi.filter((content) => {
							return content.id !== action.payload.id;
						})) ||
					[...state.selectedKpi, action.payload].flat(),
			};

		// ACTIVE FILTER
		case ACTIVE_FILTER:
			// VALUE TO BE SENT
			let updateFilterVal;

			// TO CHECK IS IT'S PRESENT OR NOT
			const isAdded = state.activeFilters.filter((content) => {
				return content.index === action.payload.index;
			});

			// STATEMENTS TO CHECK SELECTED FILTERS
			if (
				isAdded.length &&
				state.activeFilters.length === 1 &&
				action.payload.index === 0
			) {
				updateFilterVal = [
					{
						index: 0,
						filterWord: "Alle",
					},
				];
			} else if (action.payload.index === 0) {
				updateFilterVal = [
					{
						index: 0,
						filterWord: "Alle",
					},
				];
			} else if (isAdded.length && action.payload.index !== 0) {
				updateFilterVal = state.activeFilters.filter((content) => {
					return content.index !== action.payload.index;
				});
			} else if (
				state.activeFilters.length === 1 &&
				state.activeFilters[0].index === 0 &&
				action.payload.index !== 0
			) {
				updateFilterVal = state.activeFilters.filter((content) => {
					return content.index !== 0;
				});
				updateFilterVal = [...updateFilterVal, action.payload];
			} else {
				updateFilterVal = [...state.activeFilters, action.payload];
			}

			if (!updateFilterVal.length) {
				updateFilterVal = [
					{
						index: 0,
						filterWord: "Alle",
					},
				];
			}

			// FILTERING UNIQUE VALUES
			const uniqueSet = new Set(updateFilterVal);
			const backToArray = [...uniqueSet];

			return {
				...state,
				activeFilters: backToArray,
			};

		default:
			return state;
	}
};
export default reducer;
