import React, {Component} from 'react'; 
import {Nav, Navbar, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar fluid="true" bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/landing"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/about"><Nav.Link>About us</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar; 