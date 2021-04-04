import React, { createContext, useState, useEffect, useReducer } from "react";

import './App.css';
import Card from './components/Card';
import FilterBox from "./components/FilterBox";
import Job from "./components/Job";
import initialState from "./state/initialState";
import reducer from "./state/reducer";

export const MainContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
      <MainContext.Provider value={{ state, dispatch}}>
        <Card>
          <FilterBox />
        </Card>

        {jobs.map(job => (
          <Card key={ job.id } isFeatured={ job.isFeatured }>
            <Job job={job} />
          </Card>
        ))}
      </MainContext.Provider>
    </div>
  );
}

export default App;
