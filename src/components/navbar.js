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
      <Hero size="medium" color="dark">
      <Navbar className="is-dark">
        <Container>
          <Navbar.Brand className="is-size-4 navbar-brand brand-font">
            <a class="navbar-item" href="/">
              <h1>Thesantancafe</h1>
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
              
            </Navbar.Container>
          </Navbar.Menu>
          
        </Container>
        
      </Navbar>
      </Hero>
    </div>
  );
}

export default PageNav;
