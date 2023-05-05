import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as ReactBootStrap from "react-bootstrap";

const Header = () => {
    return (
        <header className='p-2'>
            <>
                {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
                {/* <Navbar
                    // key={expand} 
                    bg="light"
                    // "success"
                    //  expand={expand} 
                    className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                        <Navbar.Toggle
                        // aria-controls={`offcanvasNavbar-expand-${expand}`} 
                        />
                        <Navbar.Offcanvas
                            // id={`offcanvasNavbar-expand-${expand}`}
                            // aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                //  id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                    // id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar> */}
                {/* ))} */}
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" className='p-3'>
                    <ReactBootStrap.Navbar.Brand href="#home" >Dublin City Council & NCI Collabration</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto ">
                            {/* <Link to="/features"> */}
                            <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
                            {/* </Link> */}
                            {/* <Link to="/pricing"> */}
                            <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
                            {/* </Link> */}
                            <ReactBootStrap.NavDropdown title="Section Recycle" id="collasible-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Transport</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.2">General Waste</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Recycle</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                            {/* <Link to="/deets"> */}
                            <ReactBootStrap.Nav.Link href="#deets">More details</ReactBootStrap.Nav.Link>
                            {/* </Link> */}
                            {/* <Link to="/dankmemes"> */}
                            <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                                Charts
                            </ReactBootStrap.Nav.Link>
                            {/* </Link> */}
                        </ReactBootStrap.Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </>
        </header>
    )
}

export default Header