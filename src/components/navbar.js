import React from "react";
import { Container, NavDropdown, } from "react-bootstrap";
import { Hero, Navbar } from "react-bulma-components";

import 'bulma/css/bulma.min.css';



const PageNav = () => {
  return (
    <Hero className="is-primary is-medium">
        <Hero.Header>
            <Navbar>
                <Navbar.Container>
                    <Navbar.Brand>
                        <a href="/">Santan Cafe </a></Navbar.Brand>
                </Navbar.Container>
            </Navbar>
        </Hero.Header>
    </Hero>
  );
};

export default PageNav;
