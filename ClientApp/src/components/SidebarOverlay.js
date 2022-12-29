import { useState, useEffect } from "react";
import { Card, Nav, Row, Col } from "react-bootstrap";
import { Collection, Globe, House, Eye, Speedometer2, Router, ChatDots } from 'react-bootstrap-icons';

const SidebarOverlay = () => {

    return (
        <div style={{ color: "white", width: 200 }} className='sticky-top pt-5 bg-dark'>
            <Row 
            className="mw-100 pt-3"  
            xs={1} 
            >
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <House className='' color="white" size={20}/>
                    <Nav.Link href="/profile" className="ms-4">
                        Profile
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Speedometer2 className='' color="white" size={20}/>
                    <Nav.Link href="/dashboard" className="ms-4">
                        Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Speedometer2 className='' color="white" size={20}/>
                    <Nav.Link href="/messages" className="ms-4">
                        Messages
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Collection className='' color="white" size={20}/>
                    <Nav.Link href="/discovery" className="ms-4">
                        Discover
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Eye className='' color="white" size={20}/>
                    <Nav.Link href="/explore" className="ms-4">
                        Explore
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Router className='' color="white" size={20}/>
                    <Nav.Link href="/interactions" className="ms-4">
                        Interactions
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <ChatDots className='' color="white" size={20}/>
                    <Nav.Link href="/connections" className="ms-4">
                        Connections
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Globe className='' color="white" size={20}/>
                    <Nav.Link href="/" className="ms-4">
                        Search
                    </Nav.Link>
                </Nav.Item >
            </Row>
        </div>
    )
}

export default SidebarOverlay;