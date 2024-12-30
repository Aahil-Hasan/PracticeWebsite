import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from '../aahil_linkedin.jpg';
import sidebar from '../home_page/sidebar';
import LatinPractice from './latinpractice';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/latinpractice">Latin Practice</Link>
          </li>
        </ul>
        <div className='content'>
        <Routes>
          <Route path="/latinpractice" element={<LatinPractice />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
