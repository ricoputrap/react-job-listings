import initialState from "./initialState";

const reducer = (state, action) => {
  switch (action.type) {
    case 'addFilter':
      const currentFilters = state.filters;
      const newFilter = action.value;

      if (!currentFilters.includes(newFilter)) {
        return {
          ...state,
          filters: [...state.filters, action.value]
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