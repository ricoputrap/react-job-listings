import React, { useState, useEffect } from "react";

import Card from './components/Card';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(async () => {
    fetch('data.json')
      .then(res => res.json())
      .then(res => {
        setJobs(res)
      })
  },[]);

  return (
    <div className="App">
      <Card>
        <div className="job">
          <div className="details">
            <img src="./images/photosnap.svg" alt="photosnap"/>
            <div>
              <div>
                <span className="job__company">Photosnap</span>
                <span>NEW!</span>
                <span>FEATURED</span>
              </div>
              <h3 className="job__position">Senior Frontend Developer</h3>
              <div>
                <span>1d ago</span>
                <span>Full Time</span>
                <span>USA only</span>
              </div>
            </div>
          </div>
          <div className="tech">

          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
