import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/movie" Component={Home} />
        <Route path="/movie/about" Component={About} />
        <Route path="/detail" Component={Detail} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;