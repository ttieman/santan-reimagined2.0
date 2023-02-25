import React from "react";

import { Container, Hero, Columns, Content } from "react-bulma-components";

import "../index.css";

const pink = {
    color: 'pink'
  };

const About = () => {
  return (
    <div>
      <Hero.Footer>
        <Container>
          <Columns>
            <Columns.Column className="has-text-centered">
              <Content className="has-text-centered is-size-4">
                Thesantancafe{" "}
              </Content>{" "}
              <Content>
                18911 E. San Tan Blvd #149 Queen Creek, Arizona 85142
              </Content>
              US (480) 840-6425
            </Columns.Column>
          </Columns>
          <Columns className="has-text-centered">
            <Columns.Column>
            Copyright © 2023 Thesantancafe - All Rights Reserved.
            </Columns.Column>
            <Columns.Column>
            <small >web-design </small> <small style={ pink }>vested</small>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Footer>
    </div>
  );
};

export default About;
