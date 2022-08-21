import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav';
import '../scss/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Raber Bay Resort</h1>
        <Nav activeKey="/home">
          <LinkContainer to="/home">
            <Nav.Link href="/home">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cabins">
            <Nav.Link eventKey="cabins">Cabins</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link eventKey="contact">Contact Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </header>
    );
  }
}

export default Header;