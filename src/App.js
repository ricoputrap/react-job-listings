import React, { useState, useEffect } from "react";

import './App.css';
import Card from './components/Card';
import FilterBox from "./components/FilterBox";
import Job from "./components/Job";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(res => {
        setJobs(res)
      })
  },[]);

  return (
    <div className="App">
      <Card>
        <FilterBox />
      </Card>
      {jobs.map(job => (
        <Card key={ job.id } isFeatured={ job.isFeatured }>
          <Job job={job} />
        </Card>
      ))}
    </div>
  );
}

export default App;
