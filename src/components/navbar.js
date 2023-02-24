import React from "react";


import {
  Hero,
  Section,
  Heading,
  Navbar,
  Container,
  Tile,
  Block
} from "react-bulma-components";

const PageNav = () => {
  return (
    <div>

          <Navbar className="is-primary">
            <Container>
              <Navbar.Brand className="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                  <img
                    src="https://bulma.io/images/bulma-logo.png"
                    width="112"
                    height="28"
                  />
                </a>

                <a
                  role="button"
                  class="navbar-burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </Navbar.Brand>
              <Navbar.Menu className="navbar-menu">
                <Navbar.Container className="navbar-end" align="end">
                  <Navbar.Item className="navbar-item" href="/">Home</Navbar.Item>
                  <Navbar.Item href="/menu">Menu</Navbar.Item>
                  <Navbar.Item href="/about">About</Navbar.Item>
                </Navbar.Container>
              </Navbar.Menu>
            </Container>
          </Navbar>

    </div>
  );
};

export default PageNav;
