import React, { useState, useEffect } from "react";

import './App.css';
import Card from './components/Card';
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
      {jobs.map(job => (
        <Card key={ job.id }>
          <Job job={job} />
        </Card>
      ))}
    </div>
  );
}

export default App;
