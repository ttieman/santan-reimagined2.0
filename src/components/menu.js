import React, { useState } from "react";
import {
  Tabs,
  Tile,
  Box,
  Section,
  Content,
  Columns,
  Block,
} from "react-bulma-components";
import "bulma/css/bulma.min.css";

import menuItems from "./menuItems.js";

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabContent, setTabContent] = useState([
    {
      title: "Breakfast",
      content: (
        <Box>
          {menuItems
            .find((item) => item.category === "Breakfast")
            .items.map((item) => (
                <Block>
                <Columns.Column>
                  <Box key={item.name}>
                    <Content
                      renderAs="article"
                      kind="child"
                      notification
                      color="info"
                    >
                      <p className="title">{item.name}</p>
                      <p className="subtitle">{item.description}</p>
                      <p className="subtitle is-6">${item.price.toFixed(2)}</p>
                    </Content>
                  </Box>
                </Columns.Column>
              </Block>
            ))}
        </Box>
      ),
    },
    {
      title: "Lunch",
      content: (
        <Box>
          {menuItems
            .find((item) => item.category === "Lunch")
            .items.map((item) => (
                <Block>
                <Columns.Column>
                  <Box key={item.name}>
                    <Content
                      renderAs="article"
                      kind="child"
                      notification
                      color="info"
                    >
                      <p className="title">{item.name}</p>
                      <p className="subtitle">{item.description}</p>
                      <p className="subtitle is-6">${item.price.toFixed(2)}</p>
                    </Content>
                  </Box>
                </Columns.Column>
              </Block>
            ))}
        </Box>
      ),
    },
    {
      title: "Sides",
      content: (
        <Box>
          {menuItems
            .find((item) => item.category === "Sides")
            .items.map((item) => (
              <Block>
                <Columns.Column>
                  <Box key={item.name}>
                    <Content
                      renderAs="article"
                      kind="child"
                      notification
                      color="info"
                    >
                      <p className="title">{item.name}</p>
                      <p className="subtitle">{item.description}</p>
                      <p className="subtitle is-6">${item.price.toFixed(2)}</p>
                    </Content>
                  </Box>
                </Columns.Column>
              </Block>
            ))}
        </Box>
      ),
    },
    {
      title: "Drinks",
      content: (
        <Box>
          {menuItems
            .find((item) => item.category === "Drinks")
            .items.map((item) => (
                <Block>
                <Columns.Column>
                  <Box key={item.name}>
                    <Content
                      renderAs="article"
                      kind="child"
                      notification
                      color="info"
                    >
                      <p className="title">{item.name}</p>
                      <p className="subtitle">{item.description}</p>
                      <p className="subtitle is-6">${item.price.toFixed(2)}</p>
                    </Content>
                  </Box>
                </Columns.Column>
              </Block>
            ))}
        </Box>
      ),
    },
  ]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Section>
        <Tabs className="is-centered is-boxed is-medium">
          {tabContent.map((tab, index) => (
            <Tabs.Tab
              key={index}
              active={index === activeTab}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </Tabs.Tab>
          ))}
        </Tabs>
        <Box>
          <Columns>{tabContent[activeTab].content}</Columns>
        </Box>
      </Section>
    </div>
  );
};

export default Menu;
