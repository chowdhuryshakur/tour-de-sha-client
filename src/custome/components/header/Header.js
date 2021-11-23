import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../firebase/UseAuth';
import './header.css'

const Header = () => {
  const { user, logOut } = UseAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="brand" to="/">Tour<span className="subbrand"> DE Sha</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-end head">
            <Nav.Link as={Link} className="menue-item" to="/home">Home</Nav.Link>
            <Nav.Link as={Link} className="menue-item" to="/services">Offers</Nav.Link>
            {
            user.email ?
            <Nav.Link as={Link} className="menue-item" to="/mybooking">My Bookings</Nav.Link> : <div></div>}
            <Nav.Link as={Link} className="menue-item" to="/managebooking">Manage Bookings</Nav.Link>
            <Nav.Link as={Link} className="menue-item" to="/addoffers">Add Offers</Nav.Link>
            {
            user.email ?
            <Nav.Link className="d-flex ">
              <span style={{ color: 'grey', marginRight: '10px' }}>{user.displayName} </span>
              <button className='button' onClick={logOut}>log out</button></Nav.Link>:
              <Nav.Link as={Link} className="menue-item" to="/login">Login</Nav.Link>}
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default Header;