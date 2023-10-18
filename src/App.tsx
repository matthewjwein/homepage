import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="app">
      <Navbar />
      <div className="project-wrapper">
        <Routes>
          <Route path="/" element={<Homepage />} />
          {
            // <Route path="/project/1" element={<Project title={ProjectData[0].titleText} component={ProjectData[0].component} />} />
            // <Route path="/project/2" element={<Project title={ProjectData[1].titleText} component={<div>Coming Soon</div>} />} />
          }
        </Routes>

      </div>
    </div>
  );
}

export default App;
