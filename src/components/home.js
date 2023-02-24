import React from "react";

import { Hero, Section, Box } from "react-bulma-components";

import PageNav from "./navbar";
import "../index.css"



const Home = () => {
	return (
		<div>
		
		<Hero gradient="true" className="is-dark is-medium">
        <Hero.Header>
          
        </Hero.Header>
        <Hero.Body >
		<div className="hero-banner"	>
			<Box>words</Box>
		</div>
        </Hero.Body>
		<div class="hero-foot">
    
  </div>
      </Hero>
		</div>
		
	);
};

export default Home;
