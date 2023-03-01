import ChatPanel from "./ChatPanel";
import MessagePanel from "./MessagePanel";
import { Col, Row } from 'react-bootstrap';
import CommunityPanel from "./CommunityPanel";
import DilemmasPanel from "./DilemmasPanel";

const Dashboard = () => {
    return(
        <Row>
            <Col xs={3}>
                <MessagePanel/>
            </Col>
            <Col xs={6}>
                <ChatPanel/>
                <DilemmasPanel/>
            </Col>
            <Col xs={3}>
                <CommunityPanel/>
            </Col>
        </Row>
    );
}

export default Dashboard;