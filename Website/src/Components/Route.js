// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import { Demos } from './Demos/Demo.js';
import { Pricing } from './Pricing/Pricing.js';
import { ShowRoom3D } from './ShowRoom3D/ShowRoom3D.js';
import About from './About/About.jsx';
import { Benefit } from './Benefit/Benefit.js';
import TeamUpdate from './Team/TeamUpdate.jsx';
import Furniture from './Furniture/Furniture.jsx';
import { NotFoundPage } from './Helpers/NotFound/NotFound.js';
const Routing = () => {
  return (
    <Router>
      {/* if you are adding the basename website please provide the url in route also otherwise no page will render */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/benefits" element={<Benefit />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/solutions" element={<ShowRoom3D />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/team" element={<TeamUpdate />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
