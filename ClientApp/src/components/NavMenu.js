import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'reactstrap';

import ListIcon from './ListIcon';
import SignInButton from './SignInButton';

import './NavMenu.css';

export class NavMenu extends Component {

    render() {
        return (
            <Row key="navbar">
            <Navbar fixed='top' bg='light' expand="sm">
                <ListIcon key='listicon'/>
                <Nav >
                <Navbar.Brand href="/"
                >
                    <img onClick={() => {
                        this.props.navigation.navigate('/')
                    }} height="25rem" width="15rem" style={{ cursor: 'pointer', objectFit: 'cover', margin: '0rem .3rem 0rem 1rem' }} src='https://i.imgur.com/20LpIoh.jpg'/>
                    Kalanchoe AI
                </Navbar.Brand>
                </Nav>
              <Navbar.Toggle style={{ marginRight: '1rem' }} key="navbarToggle" aria-controls={`navBarItems}`} />
              <Navbar.Collapse key="navbarCollapse" id="navBarItems">
                <Col key="searchColumn" className=''>
                  <Nav key="navForm">

                  </Nav>
                </Col>
                <Row style={{ justifyContent: "space-between", textAlign: "center", marginRight: '.5rem' }}>
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
