import React from 'react';
import '../scss/Header.scss';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Raber Bay Resort</h1>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Cabins</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    );
  }
}

export default Header;