import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { getCommunities } from "../utils/api/community";
import { getPanels } from "../utils/api/panel";
import { getPosts } from "../utils/api/post";

const CommunityPanel = () => {
    const navigate = useNavigate();
    const [communities, setCommunities] = useState([]);
    const [posts, setPosts] = useState([]);
    const [panels, setPanels] = useState([]);

    const goToCommunity = (event) => {
        const channel = event.target.id;
        if (channel != null) {
            navigate(`/community/${channel}`);
        }
    }
    
    const goToPost= (event) => {
        if (event.target.id != null) {
            navigate(`/posts/${event.target.id}`);
        }
    }

    const goToPanel= (event) => {
        if (event.target.id != null) {
            navigate(`/dilemmas/${event.target.id}`);
        }
    }

    useEffect(() => {
        getPanels()
        .then((response) => setPanels(response.data));
        getPosts()
        .then((response) => setPosts(response.data));
        getCommunities()
        .then((response) => setCommunities(response.data));
    }, []);

    return (
        <div className="panel" style={{ maxHeight: '100%', overflowY: 'auto', backgroundColor: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center' }}>
            <h1>Feed</h1>
            {posts?.length > 0 && posts?.map(({ postId, postValue, mediaLink }) => (
                <div style={{ justifyContent: 'center', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', background: 'white', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={postId}>
                    <Row>
                        <Col>
                            <img id={postId} onClick={goToPost} className="medialinkfeed" src={mediaLink} />
                        </Col>
                        <Col>
                            <div id={postId} onClick={goToPost}>
                                {postValue}
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
            {panels?.length > 0 && panels?.map(({ panelId, title }) => (
                <div style={{ justifyContent: 'center', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', background: 'white', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={panelId}>
                    <Row>
                        <Col>
                            <div id={panelId} onClick={goToPanel}>
                                {title}
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
            {communities?.length > 0 && communities?.map(({ communityId, groupName, imageSource }) => (
                <div style={{ cursor: 'pointer', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', background: 'white', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={communityId}>
                    <Row xs={2}>
                        <Col xs={2}>
                            <img style={{ objectFit: 'cover' }} height="20rem" width="20rem" id={communityId} onClick={goToCommunity} className="medialinkfeed" src={imageSource} />
                        </Col>
                        <Col xs={10}>
                            <div id={communityId} onClick={goToCommunity}>
                                {groupName}
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    )
}

export default CommunityPanel;