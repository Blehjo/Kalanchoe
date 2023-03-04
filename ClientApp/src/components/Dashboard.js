import ChatPanel from "./ChatPanel";
import MessagePanel from "./MessagePanel";
import { Col, Row } from 'react-bootstrap';
import CommunityPanel from "./CommunityPanel";
import DilemmasPanel from "./DilemmasPanel";

const Dashboard = () => {
    return(
        <Row xs={1} md={2} lg={3}>
            <Col xs={12} lg={6}>
                <ChatPanel/>
                <DilemmasPanel/>
            </Col>
            <Col xs={12} lg={6}>
                <Row xs={1} lg={2}>
                    <Col>
                        <MessagePanel/>
                    </Col>
                    <Col>
                        <CommunityPanel/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Dashboard;