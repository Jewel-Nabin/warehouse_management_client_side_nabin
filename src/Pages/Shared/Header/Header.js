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
import logo from '../../../images/png/logo.png';
import PageTitle from '../PageTitle/PageTitle';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar style={{ backgroundColor: '#282624'}} collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <PageTitle title={"home"}></PageTitle>
                        <img height={60} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="item">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="additem">Add</Nav.Link>
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;