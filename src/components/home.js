import React from "react";

import {
  Hero,
  Section,
  Box,
  Block,
  Columns,
  Button,
  Tile,
  Heading,
  Image,
  Notification,
} from "react-bulma-components";

import { AiTwotonePhone } from "react-icons/ai";

import PageNav from "./navbar";
import "../index.css";

const Home = () => {
  return (
    <div>
      <Hero gradient="true" className="is-dark is-medium">
        <Hero.Header></Hero.Header>
        <Hero.Body className="hero-banner">
          <Section>
            <Columns>
              <Columns.Column size="one-third">
                <Box className="content is-medium">
                  <Block>
                    <strong className="is-size-4 has-text-centered	">
                      Strong coffee and best breakfast in town!
                    </strong>
                  </Block>
                  <Block>
                    <Button color="info" fullwidth="true" loading="true">
                      Order Now
                    </Button>
                  </Block>
                  <Block>Kickstart your morning with us!</Block>
                  <a className="button" href="tel:123-456-7890">
                    123-456-7890
                  </a>{" "}
                  <AiTwotonePhone />
                </Box>
              </Columns.Column>
              <Columns.Column>
                <Box color="light">
                  <Tile kind="ancestor" justifyContent="center">
                    <Tile size="12" >
                      <Tile kind="parent" justifyContent="center">
                        <Block px="3">
                          <Tile
                            kind="child"
                            renderAs={Notification}
                            color="info"
                          >
                            <Heading className="is-size-4">Host Events</Heading>{" "}
                            <hr />
                            <Heading className="is-size-6" subtitle>
                              {" "}
                              Fruit and clams
                            </Heading>
                          </Tile>
                        </Block>
                        <Block px="3">
                          <Tile
                            kind="child"
                            renderAs={Notification}
                            color="info"
                          >
                            <Heading className="is-size-4">Breakfast or Lunch</Heading>{" "}
                            <hr />
                            <Heading subtitle>Checkout our <Button>Menu</Button></Heading>
                          </Tile>
                        </Block>
                        <Block px="3">
                          <Tile
                            kind="child"
                            renderAs={Notification}
                            color="info"
                          >
                            <Heading className="is-size-4">Now Hiring</Heading>{" "}
                            <hr />
                            <Heading subtitle>With image Tile...</Heading>
                          </Tile>
                        </Block>
                      </Tile>
                    </Tile>
                  </Tile>
                </Box>
              </Columns.Column>
            </Columns>
            >
          </Section>
        </Hero.Body>
        <div class="hero-foot"></div>
      </Hero>
    </div>
  );
};

export default Home;
