import React, { useState } from "react";
import { Tabs, Notification, Tile, Box, Section, Content } from "react-bulma-components";
import "bulma/css/bulma.min.css";

import menuItems from "./menuItems.js";

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabContent, setTabContent] = useState([
    {
      title: "Breakfast",
      content: (
        <Box>breakfast junk
          {menuItems
            .filter((item) => item.category === "Breakfast")
            .map((item, index) => (
              <Box key={index}>
                <Content>
                  <p className="title is-4">{item.name}</p>
                  <p className="subtitle is-6">{item.description}</p>
                  <p>${item.price}</p>
                </Content>
              </Box>
            ))}
        </Box>
      ),
    },
    {
      title: "Lunch",
      content: (
        <>
          {menuItems
            .filter((item) => item.category === "lunch")
            .map((item, index) => (
              <Tile key={index}>
                <Tile.Content>
                  <p className="title is-4">{item.name}</p>
                  <p className="subtitle is-6">{item.description}</p>
                  <p>${item.price}</p>
                </Tile.Content>
              </Tile>
            ))}
        </>
      ),
    },
    {
      title: "Sides",
      content: (
        <>
          {menuItems
            .filter((item) => item.category === "sides")
            .map((item, index) => (
              <Tile key={index}>
                <Tile.Content>
                  <p className="title is-4">{item.name}</p>
                  <p className="subtitle is-6">{item.description}</p>
                  <p>${item.price}</p>
                </Tile.Content>
              </Tile>
            ))}
        </>
      ),
    },
    {
      title: "Drinks",
      content: (
        <>
          {menuItems
            .filter((item) => item.category === "drinks")
            .map((item, index) => (
              <Tile key={index}>
                <Tile.Content>
                  <p className="title is-4">{item.name}</p>
                  <p className="subtitle is-6">{item.description}</p>
                  <p>${item.price}</p>
                </Tile.Content>
              </Tile>
            ))}
        </>
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
        <Box>{tabContent[activeTab].content}</Box>
      </Section>
    </div>
  );
};

export default Menu;
