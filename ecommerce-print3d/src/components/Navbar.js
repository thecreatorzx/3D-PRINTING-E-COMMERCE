import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"; // Import components from react-bootstrap
import { FaOpencart } from "react-icons/fa6";

const NavbarComponent = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          3D Parts Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaOpencart /> Cart ({cartItems.length})
            </Nav.Link>
            {/* Add dropdown for additional links */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products">
                Products
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
