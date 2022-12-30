import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import SidebarIndex from './SidebarIndex';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <SidebarIndex />
        <Container tag="main">
            {this.props.children}
        </Container>
      </div>
    );
  }
}
