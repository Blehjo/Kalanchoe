import ChatPanel from "./ChatPanel";
import MessagePanel from "./MessagePanel";
import { Col, Row } from 'react-bootstrap';
import CommunityPanel from "./CommunityPanel";
import PanelPanel from "./PanelPanel";

const Dashboard = () => {
    return(
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
    );
}

export default Dashboard;