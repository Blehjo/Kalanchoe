import { useEffect, useState, Fragment } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';
import axios from "axios";
import { useNavigate } from "react-router";
import { deleteCommunity, getCommunity } from "../utils/api/community";

const CommunityPanel = () => {
    const navigate = useNavigate();
    const [communities, setCommunities] = useState([]);
    const [communityId, setCommunityId] = useState(null);

    const goToCommunity = (event) => {
        const channel = event.target.id;
        if (channel != null) {
            setCommunityId(channel);
            navigate(`/channel/${communityId}`);
        }
    }

    const handleCommunityDelete = (event) => {
        deleteCommunity(event.target.id);
    }

    useEffect(() => {
        getCommunity()
        .then((response) => setCommunities(response.data));
    }, []);

    return (
        <Fragment>
            <div style={{ height: '716px', width: 'auto', backgroundColor: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center', margin: '1rem' }}>
                <h1>Feed</h1>
                <Row xs={1} xl={2}>
            {communities?.length > 0 && communities?.map(({ communityId, groupName }) => (
                <div style={{ width: '16rem', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', background: 'white', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={communityId}>
                    <Row xs={2}>
                        <Col xs={9}>
                            <div id={communityId} onClick={goToCommunity}>
                                {groupName}
                            </div>
                        </Col>
                        <Col xs={1}>
                            <Button variant="light" id={communityId} onClick={handleCommunityDelete}><XCircle/></Button>
                        </Col>
                    </Row>
                </div>
            ))}
            </Row>
            </div>
        </Fragment>
    )
}

export default CommunityPanel;