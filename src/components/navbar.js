import React from "react";
import { Container } from "react-bootstrap";
import { Hero, Navbar } from "react-bulma-components";

import "bulma/css/bulma.min.css";

const PageNav = () => {
  return (
    <Hero className="is-primary is-medium">
      <Hero.Header>
        <Navbar className="navbar">
          <Navbar.Container>
            <Container>
              
                <Navbar.Brand>
                  <Navbar.Item href="#">
                    <img
                      alt="Bulma: a modern CSS framework based on Flexbox"
                      height="28"
                      src="https://bulma.io/images/bulma-logo.png"
                      width="112"
                    />
                  </Navbar.Item>
                  <Navbar.Burger />
                </Navbar.Brand>
              
            </Container>
          </Navbar.Container>
          <Navbar.Container className="navbar-end">
            
              <Navbar.Item href="/">Home</Navbar.Item>
              <Navbar.Item href="/menu">Menu</Navbar.Item>
              <Navbar.Item href="/about">About</Navbar.Item>
            
          </Navbar.Container>
        </Navbar>
      </Hero.Header>
    </Hero>
  );
};

export default PageNav;
