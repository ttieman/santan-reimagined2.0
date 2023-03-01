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
                    <Columns>
                        {menuItems
                            .find((item) => item.category === "Breakfast")
                            .items.map((item) => (
                                <Columns.Column key={item.name} className="is-half">
                                    <Box>
                                        <Content
                                            renderAs="article"
                                            kind="child"
                                            notification
                                            color="info"
                                        >
                                            <p className="title">{item.name}</p>
                                            <p className="subtitle">{item.description}</p>
                                            <img src={item.image} />
                                            <p className="price">{item.price}</p>
                                        </Content>
                                    </Box>
                                </Columns.Column>
                            ))}
                    </Columns>          
            ),
        },
        {
            title: "Lunch",
            content: (
                
                    <Columns>
                        {menuItems
                            .find((item) => item.category === "Lunch")
                            .items.map((item) => (
                                <Columns.Column key={item.name} className="is-half" >
                                    <Box>
                                        <Content
                                            renderAs="article"
                                            kind="child"
                                            notification
                                            color="info"
                                        >
                                            <p className="title">{item.name}</p>
                                            <p className="subtitle">{item.description}</p>
                                            <img src={item.image} />
                                            <p className="price">{item.price}</p>

                                        </Content>
                                    </Box>
                                </Columns.Column>

                            ))}
                    </Columns>             
            ),
        },
        {
            title: "Sides",
            content: (       
                    <Columns>
                        {menuItems
                            .find((item) => item.category === "Sides")
                            .items.map((item) => (

                                <Columns.Column key={item.name} className="is-half">
                                    <Box>
                                        <Content
                                            renderAs="article"
                                            kind="child"
                                            notification
                                            color="info"
                                        >
                                            <p className="title">{item.name}</p>
                                            <p className="subtitle">{item.description}</p>
                                            <img src={item.image} />
                                            <p className="price">{item.price}</p>

                                        </Content>
                                    </Box>
                                </Columns.Column>

                            ))}
                    </Columns>         
            ),
        },
        {
            title: "Drinks",
            content: (
                
                    <Columns>
                        {menuItems
                            .find((item) => item.category === "Drinks")
                            .items.map((item) => (
                                <Columns.Column key={item.name} className="is-half">
                                    <Box>
                                        <Content
                                            renderAs="article"
                                            kind="child"
                                            notification
                                            color="info"
                                        >
                                            <p className="title">{item.name}</p>
                                            <p className="subtitle">{item.description}</p>
                                            <img src={item.image} />
                                            <p className="price">{item.price}</p>

                                        </Content>
                                    </Box>
                                </Columns.Column>

                            ))}
                    </Columns>
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
