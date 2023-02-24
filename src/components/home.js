import React from "react";

import { Hero, Section } from "react-bulma-components";

import PageNav from "./navbar";

const Home = () => {
	return (
		<div>
		<PageNav />
		<Hero gradient="true" className="is-dark is-medium">
        <Hero.Header>
          
        </Hero.Header>
        <Hero.Body>
            <Section>yes it did</Section>
        </Hero.Body>
      </Hero>
		</div>
		
	);
};

export default Home;
