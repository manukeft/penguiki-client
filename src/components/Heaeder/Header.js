import React from "react";
import { Container, Navbar, NavbarBrand, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
// import { Link } from "react-router-dom";
import "./Header.css";

import logo512 from "../../assets/img/logo512.png"

const Header = () => (
  <>
    <header>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
        <Container>
          <NavbarBrand href="/">
            <img src={logo512} alt="" className="logo" />
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
                <i className="fa-solid fa-house"></i>
              </Nav.Link>
              <Nav.Link href="/generos" className="nav-link text-light active">
                Generos
                <i className="fa-solid fa-paw"></i>
              </Nav.Link>
              <Nav.Link href="/especies" className="nav-link text-light active">
                Especies
                <i className="fa-solid fa-paw"></i>
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  </>
);

export default Header;