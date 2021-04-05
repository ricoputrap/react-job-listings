import initialState from "./initialState";

const reducer = (state, action) => {
  switch (action.type) {
    case 'populateJobs':
      return {
        ...state,
        jobs: action.value
      }
    
    case 'addFilter':
      const currentFilters = state.filters;
      const newFilterLabel = action.filterLabel;
      const newFilterType = action.filterType;

      if ((newFilterType === "role" || newFilterType === "level") && currentFilters[newFilterType] !== newFilterLabel) {
        return {
          ...state,
          filters: {
            ...currentFilters,
            [newFilterType]: newFilterLabel
          }
        }
      }

      else if (!currentFilters[newFilterType].includes(newFilterLabel)) {
        return {
          ...state,
          filters: {
            ...currentFilters,
            [newFilterType]: [
              ...currentFilters[newFilterType],
              newFilterLabel
            ]
          }
        }
      }

      return state;

    case 'removeFilter':
      return {
        ...state,
        filters: state.filters.filter(filter => filter !== action.value)
      }

    case 'clearFilter':
      return initialState

    default:
      return state
  }
}

export default reducer;