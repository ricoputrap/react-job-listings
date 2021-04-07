import initialState from "./initialState";

const reducer = (state, action) => {
  let currentFilters;
  let filterLabel;
  let filterType;

  switch (action.type) {
    case 'populateJobs':
      return {
        ...state,
        jobs: action.value
      }
    
    case 'addFilter':
      currentFilters = state.filters;
      filterLabel = action.filterLabel;
      filterType = action.filterType;

      if ((filterType === "role" || filterType === "level") && currentFilters[filterType] !== filterLabel) {
        return {
          ...state,
          filters: {
            ...currentFilters,
            [filterType]: filterLabel
          }
        }
      }

      else if (!currentFilters[filterType].includes(filterLabel)) {
        return {
          ...state,
          filters: {
            ...currentFilters,
            [filterType]: [
              ...currentFilters[filterType],
              filterLabel
            ]
          }
        }
      }

      return state;

    case 'removeFilter':
      currentFilters = state.filters;
      filterType = action.filterType;

      if (filterType === "role" || filterType === "level") {
        return {
          ...state,
          filters: {
            ...currentFilters,
            [filterType]: ""
          }
        }
      }

      filterLabel = action.filterLabel;
      return {
        ...state,
        filters: {
          ...currentFilters,
          [filterType]: currentFilters[filterType].filter(label => label !== filterLabel)
        }
      }

    case 'clearFilter':
      currentFilters = state.filters;

      return {
        ...state,
        filters: initialState.filters
      }

    default:
      return state
  }
}

export default reducer;