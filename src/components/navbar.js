import React, { useState, useEffect, useRef } from "react";

import {
  Hero,
  Section,
  Heading,
  Navbar,
  Container,
  Tile,
  Block,
} from "react-bulma-components";

import Home from "./home";
import FoodMenu from "./menu";
import About from "./about";

function PageNav(props) {
  const setActiveComponent = props.setActiveComponent;

  // State to manage the active state of the burger and menu
  const [isActive, setIsActive] = useState(false);

  // Ref to the menu element
  const menuRef = useRef(null);

  // Add event listeners to the document to handle clicks outside the menu to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div>
      <Navbar className="is-primary">
        <Container>
          <Navbar.Brand className="navbar-brand">
            <a class="navbar-item" href="/">
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
            <Navbar.Burger
              className={`navbar-burger`}
              aria-label="menu"
              aria-expanded="false"
              responsive="mobile"
              onClick={() => setIsActive(!isActive)}
              isActive={isActive}
            >
              <span />
              <span />
              <span />
            </Navbar.Burger>
          </Navbar.Brand>
          <Navbar.Menu
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
            id="navbar-menu"
            ref={menuRef}
          >
            <Navbar.Container className="navbar-end" align="end">
              <Navbar.Item onClick={() => setActiveComponent(<Home />)}>
                Home
              </Navbar.Item>
              <Navbar.Item onClick={() => setActiveComponent(<FoodMenu />)}>
                Menu
              </Navbar.Item>
              <Navbar.Item onClick={() => setActiveComponent(<About />)}>
                About
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Container>
      </Navbar>
    </div>
  );
}

export default PageNav;
