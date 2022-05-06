import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaSearch } from 'react-icons/fa';
// import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 
'react-bootstrap';
import './Header.css';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar className='d-flex' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Jewels Sparkles</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="item">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blog</Nav.Link>
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
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                                    <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="orders">Orders</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                        {/* <Nav.Link as={Link} to="login">Login <FiLogIn/></Nav.Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;