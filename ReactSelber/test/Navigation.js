import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="dark" variant="dark">
            <Navbar.Brand href="/Home">SmartHome</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/Beleuchtung">Beleuchtung</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
            
        )
    }
}