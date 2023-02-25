import React from "react";

import {
  Hero,
  Section,
  Box,
  Block,
  Columns,
  Button,
  Image,
  Content,
} from "react-bulma-components";

import { AiTwotonePhone } from "react-icons/ai";

import PageNav from "./navbar";
import About from "./about";
import Footer from "./footer";

import "../index.css";

const Home = () => {
  return (
    <div>
      <Hero gradient="true" className="is-light is-medium">
        <Hero.Header></Hero.Header>
        <Hero.Body className="hero-banner">
          <Section>
            <Columns vCentered="true">
              <Columns.Column size="one-third">
                <Box className="content is-medium">
                  <Block className="has-text-centered">
                    <strong className="is-size-4">
                      Strong coffee and best breakfast in town!
                    </strong>
                    <Image
                      className="is-5by4"
                      src="http://d3cizcpymoenau.cloudfront.net/images/legacy/31053/CVR_SFS_ChickenFriedSteak_03_280763.jpg"
                    />
                  </Block>
                  <Block>
                    <Button color="info" fullwidth="true" loading="true">
                      Order Now
                    </Button>
                  </Block>
                  <Block className="has-text-centered">
                    Kickstart your morning with us!
                    <Block className="pt-3">
                    <Button className="is-inline-block " href="tel:123-456-7890">
                      123-456-7890
                    </Button>{" "}
                    <AiTwotonePhone />
                  </Block>
                  </Block>
                  
                </Box>
              </Columns.Column>
              <Columns.Column>
                <Box color="">
                  <Columns vCentered="true" className="has-text-centered">
                    <Columns.Column>
                      <Box>
                        <Content className="is-size-4 py-2">
                          Breakfast/Lunch
                        </Content>
                        <Content>
                          <Columns className="is-mobile is-inline-block">
                            <Columns.Column>
                              <Image
                                className="is-128x128"
                                src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/256/external-egg-and-bacon-cholesterol-photo3ideastudio-lineal-color-photo3ideastudio.png"
                              />
                            </Columns.Column>
                          </Columns>
                        </Content>
                        <Button className="button is-info">Menu</Button>
                      </Box>
                    </Columns.Column>
                    <Columns.Column>
                      <Box className="">
                        <Content className="is-size-4">Host Events</Content>
                        <Block>
                          <strong>Plan something special with us!</strong>
                        </Block>
                        <Image
                          className="is-128x128 is-inline-block"
                          src="https://img.icons8.com/dusk/256/event-accepted-tentatively.png"
                        >
                          {" "}
                        </Image>

                        <br />
                        <a className="button" href="tel:123-456-7890">
                          <AiTwotonePhone />
                        </a>
                      </Box>
                    </Columns.Column>
                    <Columns.Column>
                      <Box>
                        <Content className="is-size-4 py-5">Now Hiring</Content>
                        <Image
                          className="is-128x128 is-inline-block"
                          src="https://img.icons8.com/bubbles/256/cafe.png"
                        />
                        <br />
                        <Button className="button is-info">Apply</Button>
                      </Box>
                    </Columns.Column>
                  </Columns>
                </Box>
              </Columns.Column>
            </Columns>
          </Section>
        </Hero.Body>
        <About />

        <Section className="is-dark has-text-centered">wip</Section>

        <Footer />
      </Hero>
    </div>
  );
};

export default Home;
