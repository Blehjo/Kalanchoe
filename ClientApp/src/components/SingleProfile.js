import { Col, Row, Tabs, Tab } from "react-bootstrap";
import UserPostsTab from "./UserPostsTab";
import UserCommunitiesTab from "./UserCommunitiesTab";
import UserDilemmasTab from "./UserDilemmasTab";
import UserProfileCard from "./UserProfileCard";
import UserChatsTab from "./UserChatsTab";

const SingleProfile = () => {
    return (
        <Row lg={2}>
            <Col style={{ marginBottom: '2rem' }}lg={4}>
                <UserProfileCard/>
            </Col>
            <Col lg={8}>
            <Tabs
                defaultActiveKey="posts"
                id="justify-tab-example"
                justify
                className='mb-5'
                variant='pills'
                bg='light'
            >
                <Tab eventKey="posts" title="Posts">
                    <UserPostsTab />
                </Tab>
                <Tab eventKey="chats" title="Chats">
                    <UserChatsTab />
                </Tab>
                <Tab eventKey="communities" title="Communities">
                    <UserCommunitiesTab />
                </Tab>
                <Tab eventKey="dilemmas" title="Dilemmas">
                    <UserDilemmasTab />
                </Tab>
            </Tabs>
            </Col>
        </Row>
    );
}

export default SingleProfile;