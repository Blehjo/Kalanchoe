import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

import ListIcon from './ListIcon';
import SignInButton from './SignInButton';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'reactstrap';

export class NavMenu extends Component {

    render() {
        return (
            <Row key="navbar">
            <Navbar fixed='top' bg='light' expand="sm">
                <ListIcon key='listicon'/>
                <Nav >
                <Navbar.Brand href="/">Kalanchoe AI</Navbar.Brand>
                </Nav>
              <Navbar.Toggle key="navbarToggle" aria-controls={`navBarItems}`} />
              <Navbar.Collapse key="navbarCollapse" id="navBarItems">
                <Col key="searchColumn" className=''>
                  <Nav key="navForm">

                  </Nav>
                </Col>
                <Row style={{ justifyContent: "space-between"}}>
                    <Col key="navigationIcons">
                        <Nav.Link href="/dashboard" className="text-dark">Dashboard</Nav.Link>
                    </Col>
                    <Col xs={2}>
                        <Nav.Link href="/artoo" className="text-dark">Artoo</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="/projects" className="text-dark">Dilemmas</Nav.Link>
                    </Col>
                    <Col >
                        <Nav.Link>
                            <SignInButton/>
                        </Nav.Link>
                    </Col>
                </Row>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        );
    }
}
