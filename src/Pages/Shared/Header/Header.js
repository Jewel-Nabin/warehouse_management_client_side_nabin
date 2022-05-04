import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 
'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar className='d-flex' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Jewels Sparkles</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Inventory</Nav.Link>
                            <Nav.Link to={"blogs"}>Blog</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <FaSearch/>
                        </Form>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action1">Login <FiLogIn/></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;