import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,NavDropdown} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Form, FormControl } from 'react-bootstrap';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { HashRouter, Route} from "react-router-dom";

function App() {
  return (
    <div>
   
      <Navbar bg="" variant="dark" expand="lg">
  <Navbar.Brand href="/">Alisha Husain</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/" exact>Home</Nav.Link>
      <Nav.Link as={Link} to="/aboutme" exact>About Me</Nav.Link>
      <Nav.Link as={Link} to="/projects" exact>Projects</Nav.Link>
    </Nav>

  </Navbar.Collapse>
  
</Navbar>

<Main/>
    </div>
  );
}

export default App;
