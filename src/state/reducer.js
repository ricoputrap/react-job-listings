import { getFilteredJobs } from "../helperFunctions";
import initialState from "./initialState";

const reducer = (state, action) => {
  let currentFilters;
  let filterLabel;
  let filterType;
  let updatedFilters;

  let currentJobs;
  let updatedJobs;

  switch (action.type) {
    case 'populateJobs':
      return {
        ...state,
        jobs: action.value
      }

    case 'addFilter':
      currentJobs = state.jobs;
      currentFilters = state.filters;
      updatedFilters = [...currentFilters, action.value];

      updatedJobs = getFilteredJobs(currentJobs, updatedFilters);

      return {
        jobs: updatedJobs,
        filters: updatedFilters
      }
      
    
    // case 'addFilter':
    //   currentJobs = state.jobs;
    //   currentFilters = state.filters;
    //   filterLabel = action.filterLabel;
    //   filterType = action.filterType;

    //   if ((filterType === "role" || filterType === "level") && currentFilters[filterType] !== filterLabel) {
    //     updatedFilters = {
    //       ...currentFilters,
    //       [filterType]: filterLabel
    //     }

    //     updatedJobs = getFilteredJobs(currentJobs, updatedFilters);

    //     return {
    //       jobs: updatedJobs,
    //       filters: updatedFilters
    //     }
    //   }

    //   else if (!currentFilters[filterType].includes(filterLabel)) {
    //     updatedFilters = {
    //       ...currentFilters,
    //       [filterType]: [
    //         ...currentFilters[filterType],
    //         filterLabel
    //       ]
    //     }
    //     updatedJobs = getFilteredJobs(currentJobs, updatedFilters);

    //     return {
    //       jobs: updatedJobs,
    //       filters: updatedFilters
    //     }
    //   }

    //   return state;

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