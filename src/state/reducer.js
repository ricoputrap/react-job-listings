import { getFilteredJobs } from "../helperFunctions";
import initialState from "./initialState";

let allJobs;

const reducer = (state, action) => {
  let currentFilters;
  let updatedFilters;

  
  let currentJobs;
  let updatedJobs;

  switch (action.type) {
    case 'populateJobs':
      allJobs = action.value;

      return {
        ...state,
        jobs: allJobs
      }

    case 'addFilter':
      currentJobs = state.jobs;
      currentFilters = state.filters;
      const newFilter = action.value;

      if (currentFilters.includes(newFilter))
        return state;

      updatedFilters = [...currentFilters, newFilter];

      updatedJobs = getFilteredJobs(currentJobs, updatedFilters);

      return {
        jobs: updatedJobs,
        filters: updatedFilters
      }
      

    case 'removeFilter':
      currentJobs = state.jobs;  
      currentFilters = state.filters;

      updatedFilters = Array.from(currentFilters);
      updatedFilters.splice(action.value, 1);

      updatedJobs = getFilteredJobs(allJobs, updatedFilters);

      return {
        jobs: updatedJobs,
        filters: updatedFilters
      };

    case 'clearFilter':
      currentFilters = state.filters;

      return {
        jobs: allJobs,
        filters: initialState.filters
      }

    default:
      return state
  }
}

export default reducer;