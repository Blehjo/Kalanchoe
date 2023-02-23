import { Col, Row, Tabs, Tab } from "react-bootstrap";
import ChatsTab from "./ChatsTab";
import CommunitiesTab from "./CommunitiesTab";
import DilemmasTab from "./DilemmasTab";
import PostsTab from "./PostsTab";
import ProfileCard from "./ProfileCard";
 
const ProfilePage = () => {
    return (
        <Row lg={2}>
            <Col style={{ marginBottom: '2rem' }}lg={4}>
                <ProfileCard />
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
                    <PostsTab />
                </Tab>
                <Tab eventKey="chats" title="Chats">
                    <ChatsTab />
                </Tab>
                <Tab eventKey="communities" title="Communities">
                    <CommunitiesTab />
                </Tab>
                <Tab eventKey="dilemmas" title="Dilemmas">
                    <DilemmasTab />
                </Tab>
            </Tabs>
            </Col>
        </Row>
    );
}

export default ProfilePage;