import React, { createContext, useState, useEffect, useReducer } from "react";

import './App.css';
import Card from './components/Card';
import FilterBox from "./components/FilterBox";
import Job from "./components/Job";

export const FilterContext = createContext();
const initialState = {
  jobs: [],
  filters: [],
}
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
  }
}


const App = () => {
  const [filters, dispatch] = useReducer(reducer, initialState);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(res => {
        // todo: ganti save hasil fetch ke context
        setJobs(res)
      })
  },[]);

  return (
    <div className="App">
      <FilterContext.Provider value={{ filterState: filters, filterDispatch: dispatch}}>
        <Card>
          <FilterBox />
        </Card>

        {jobs.map(job => (
          <Card key={ job.id } isFeatured={ job.isFeatured }>
            <Job job={job} />
          </Card>
        ))}
      </FilterContext.Provider>
    </div>
  );
}

export default App;
