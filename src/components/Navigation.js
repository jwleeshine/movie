import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/movie">Home</Link>
      <Link to="movie/about">About</Link>
    </div>
  );
}

export default Navigation;