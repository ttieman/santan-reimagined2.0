import React from "react";
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { Hero, Box, Block, Columns } from "react-bulma-components";





const PageNav = () => {
  return (
    <Hero className="is-primary is-medium">
        <Hero.Header>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <a href="/">Santan Cafe </a></Navbar.Brand>
                </Container>
            </Navbar>
        </Hero.Header>
    </Hero>
  );
};

export default PageNav;
