import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <ul>
        <li><Link to="/" >HOME</Link></li>
          <li><Link to="/latinPractice">Latin Practice</Link></li>
          <li><Link to="/writing">Writing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      {!isOpen && (
        <button className="open-btn" onClick={toggleSidebar}>
          ☰
        </button>
      )}
    </div>
  );
};

