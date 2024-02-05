// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Home.js';
import Card from './HdRenderer/Cards/Screen.jsx';
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/hdrenderer' element={<Card />} />
      </Routes>
    </Router>
  );
}

export default Routing;
