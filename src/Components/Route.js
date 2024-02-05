// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Home.js';
import Card from './HdRenderer/Cards/Screen.jsx';
const Routing = () => {
  return (
    <Router>
      {/* if you are adding the basename website please provide the url in route also otherwise no page will render */}
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/hdrenderer' element={<Card />} />
      </Routes>
    </Router>
  );
}

export default Routing;
