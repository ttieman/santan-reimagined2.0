import React from "react";

import {
  Hero,
  Section,
  Block,
  Box,
  Content,
  Columns,
} from "react-bulma-components";

import { BiCoffee } from "react-icons/bi";
import { BsFillCloudSunFill } from "react-icons/bs";
import { GiHotMeal } from "react-icons/gi";

import "../index.css";

const About = () => {
  return (
    <div>

          <Content justifyContent="center">
            <Section className="is-size-1 has-text-centered">About Us </Section>
            
            <Section>
              <Columns vCentered="true" className="has-text-centered">
                <Columns.Column>
                  <Block>
                    <Box>
                      <Block>
                        <Content size="6">Dedicated to Quality <BiCoffee /></Content>{" "}
                      </Block>
                      <Block>
                        We pride ourselves on providing country cooking, great
                        customer service home like feel and the best coffee
                        around{" "}
                      </Block>
                    </Box>
                  </Block>
                </Columns.Column>
                <Columns.Column>
                  <Block>
                    <Box>
                      <Block>
                        <Content size="6">Stay Awhile <BsFillCloudSunFill /></Content>{" "}
                      </Block>
                      <Block>
                        Rain or shine, we provide the comfy feel of being home.
                        Where family and friends can meet and catch up over
                        eating a hot breakfast and hot coffee. We like to think
                        of each guest as family.{" "}
                      </Block>
                    </Box>
                  </Block>
                </Columns.Column>
                <Columns.Column>
                  <Block>
                    <Box>
                      <Block>
                        <Content size="6">More than Drinks <GiHotMeal /></Content>{" "}
                      </Block>
                      <Block>
                        Although we offer a wide variety of hot and iced drinks,
                        we also provide savory and sweet food options. So
                        whether you're stopping for your morning coffee, lunch,
                        or an afternoon snack, we've got you covered!{" "}
                      </Block>
                    </Box>
                  </Block>
                </Columns.Column>
              </Columns>
            </Section>
          </Content>

    </div>
  );
};

export default About;
