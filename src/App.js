
import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Pagenav from "./components/navbar";
import Home from './components/home';




import 'bulma/css/bulma.min.css';


function App() {
  const [activeComponent, setActiveComponent] = useState(<Home />);

  return (
    <Router>
      <div className="App">
        <Pagenav setActiveComponent={setActiveComponent} />
        <div className="main">{activeComponent}</div>
        
      </div>
    </Router>
  );
}

export default App;
