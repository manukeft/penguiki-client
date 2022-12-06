import React from "react";
import { Container, Navbar, NavbarBrand, Nav, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
// import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  
  <Navbar
    collapseOnSelect
    expand="md"
    bg="dark"
    variant="dark"
    fixed="top"
  >
    <Container>
      <NavbarBrand href="/">
        <img src="./logo512.png" alt="" className="logo" />
        Pengüiki
      </NavbarBrand>
      <NavbarToggle
        aria-controls="responsive-navbar-nav"
        aria-expanded="false"
        aria-label="Barra de navegacion"
      >
        <span className="navbar-toggler-icon"></span>
      </NavbarToggle>

      
       <NavbarCollapse className="collapse navbar-collapse" id="#mainNav">
        <Nav className="nav ms-auto flex-column flex-md-row">
          <Nav.Link href="/" className="nav-link text-light active">
            Inicio
          </Nav.Link>
          <Nav.Link href="/generos" className="nav-link text-light active">
            Generos
          </Nav.Link>
          <Nav.Link href="/especies" className="nav-link text-light active">
            Especies
          </Nav.Link>
        </Nav>
      </NavbarCollapse> 
    </Container>
  </Navbar>
);

export default Header;