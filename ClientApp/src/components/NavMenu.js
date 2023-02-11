import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

import ListIcon from './ListIcon';
import SignInButton from './SignInButton';

export class NavMenu extends Component {
    
    static displayName = NavMenu.name;

    constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header className="fixed-top" >
                <Navbar className="navbar-expand-sm navbar-toggleable-sm bg-light border-bottom box-shadow mb-3" style={{ zIndex: 5, marginLeft: '-7rem' }} container light>
                <ListIcon key='listicon' />
                <NavbarBrand tag={Link} to="/profile">KalanchoeAI</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                <ul className="navbar-nav flex-grow">
                    <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/artoo">Artoo</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/projects">Dilemmas</NavLink>
                    </NavItem>
                    <NavItem>
                    <SignInButton/>
                    </NavItem>
                </ul>
                </Collapse>
            </Navbar>
            </header>
        );
    }
}
