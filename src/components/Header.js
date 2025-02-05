import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap"; 


const Header=()=>{
  return (
    <Navbar className="justify-content-between">
      <Navbar.Brand href="#home">My Website</Navbar.Brand>

      <Nav className="ml-auto">
        <Nav.Link href="#mentor">Mentorship</Nav.Link>        
        <Button variant="outline-light">Say Hello</Button>
      </Nav>

    </Navbar>
  );
}

export default Header;
