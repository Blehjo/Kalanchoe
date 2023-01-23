import { Fragment } from "react";
import ChatPanel from "./ChatPanel";
import MessagePanel from "./MessagePanel";
import { Col, Row } from 'react-bootstrap';
import CommunityPanel from "./CommunityPanel";
import PanelPanel from "./PanelPanel";

const Dashboard = () => {
    return(
        <Fragment>
            <h1>Dashboard</h1>
            <Row>
                <Col xs={3}>
                    <MessagePanel/>
                </Col>
                <Col xs={6}>
                    <ChatPanel/>
                    <PanelPanel/>
                </Col>
                <Col xs={3}>
                    <CommunityPanel/>
                </Col>
            </Row>
        </Fragment>
    );
}

export default Dashboard;