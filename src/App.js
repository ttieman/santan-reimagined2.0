import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Menu from './components/menu';

import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import 'bulma/css/bulma.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={ <Menu />}/>
      </Routes>
    </Router>
  );
}

export default App;
