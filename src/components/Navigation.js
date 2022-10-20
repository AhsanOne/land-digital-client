import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/Navstyle.css';

const Navigation = () => {
    return (
        <div>
            <Navbar style={{backgroundColor:"#f16232"}} expand="lg">
                <Container fluid>
                    <Navbar.Brand className='text-white' href="#">Land Digital Survey</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='text-white' href="#action1">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#action2">About Us</Nav.Link>
                            <NavDropdown title="Our Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Land Digital Survey</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    UAV/Drone Survey
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Geotechnical Investication
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Construction Survey
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Our Equipment" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Digital Survey Equipment</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    UAV Equipment
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Soil Investication Equipment
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    GIS Equipment
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Our Resources
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Our Projects" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Land Digital Survey</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    UAV/Drone Survey
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Geotechnical Investication
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Construction
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='text-white' href="#">Blog</Nav.Link>
                            <Nav.Link className='text-white' href="#">Gallery</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search..."
                                className="me-0 box-shadow-none"
                                aria-label="Search"
                            />
                            <Button className='searchBtn'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation