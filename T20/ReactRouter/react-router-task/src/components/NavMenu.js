import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from 'react-router-dom';
import logo from "../Ressources/logo.png"
import "../Styles/NavMenuStyle.css"

export default function NavigationMenu() {
  const location = useLocation();
  const activeKeySet = location.pathname;
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" >
          <img className='logo'
            alt="Store Logo"
            src={logo} />
        </Navbar.Brand>
        <Nav className="me-auto justify-content-center " variant="tabs" activeKey={activeKeySet} >
          <Nav.Item >
            <Link className='navItem' to="/">Home</Link>
          </Nav.Item>
          <Nav.Item >
          <Link className='navItem' to="/Products">Products</Link>
          </Nav.Item>
          <Nav.Item >
          <Link className='navItem' to="/About">About</Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};