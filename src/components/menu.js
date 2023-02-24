import React from "react";
import { Hero, Navbar, Card, Tabs, Heading, Container, Notification, Tile, Image, Block, Box, Section, Columns, Sizes } from "react-bulma-components";
import PageNav from "./navbar";
import 'bulma/css/bulma.min.css';
import { Tab } from "bootstrap";

const Menu = () => {
    return (
        <div>


            
                <Box>
                    <Tile kind="ancestor" justifyContent='center'>
                        <Tile size={7} vertical >
                   
                            <Tile   justifyContent='center'>


                                <Tile kind="parent">
                                    <Tile kind="child"  renderAs={Notification} color="info">
                                        <Heading>Middle Tile...</Heading>
                                        <Heading subtitle>With image Tile...</Heading>
                                        <Image
                                            size="4by3"
                                            src="http://bulma.io/images/placeholders/640x480.png"
                                        />
                                    </Tile>
                                </Tile>
                                <Tile kind="parent">
                                    <Tile kind="child" justifyContent="space-between" renderAs={Notification} color="info">
                                        <Heading>Middle Tile...</Heading>
                                        <Heading subtitle>With image Tile...</Heading>
                                        <Image
                                            size="4by3"
                                            src="http://bulma.io/images/placeholders/640x480.png"
                                        />
                                    </Tile>
                                </Tile>
                                
                                
                            </Tile>
                            <Tile   justifyContent='center'>


                                <Tile kind="parent">
                                    <Tile kind="child"  renderAs={Notification} color="info">
                                        <Heading>Middle Tile...</Heading>
                                        <Heading subtitle>With image Tile...</Heading>
                                        <Image
                                            size="4by3"
                                            src="http://bulma.io/images/placeholders/640x480.png"
                                        />
                                    </Tile>
                                </Tile>
                                <Tile kind="parent">
                                    <Tile kind="child" justifyContent="space-between" renderAs={Notification} color="info">
                                        <Heading>Middle Tile...</Heading>
                                        <Heading subtitle>With image Tile...</Heading>
                                        <Image
                                            size="4by3"
                                            src="http://bulma.io/images/placeholders/640x480.png"
                                        />
                                    </Tile>
                                </Tile>
                                
                                
                            </Tile>
                            <Tile   justifyContent='center'>


                                <Tile kind="parent">
                                    <Tile kind="child"  renderAs={Notification} color="info">
                                        <Heading>Middle Tile...</Heading>
                                        <Heading subtitle>With image Tile...</Heading>
                                        <Image
                                            size="4by3"
                                            src="http://bulma.io/images/placeholders/640x480.png"
                                        />
                                    </Tile>
                                </Tile>
                                <Tile kind="parent">
                                    <Tile kind="child" justifyContent="space-between" renderAs={Notification} color="info">
                                        <Heading>Middle Tile...</Heading>
                                        <Heading subtitle>With image Tile...</Heading>
                                        <Image
                                            size="4by3"
                                            src="http://bulma.io/images/placeholders/640x480.png"
                                        />
                                    </Tile>
                                </Tile>
                                
                                
                                
                            </Tile>
                        </Tile>
                    </Tile>
                </Box>
           

        </div>
    );
};

export default Menu;