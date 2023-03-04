import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { getCommunities } from "../utils/api/community";

const CommunityPanel = () => {
    const navigate = useNavigate();
    const [communities, setCommunities] = useState([]);

    const goToCommunity = (event) => {
        const channel = event.target.id;
        if (channel != null) {
            navigate(`/community/${channel}`);
        }
    }

    useEffect(() => {
        getCommunities()
        .then((response) => setCommunities(response.data));
    }, []);

    return (
        <div className="panel" style={{ backgroundColor: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center' }}>
            <h1>Feed</h1>
            {communities?.length > 0 && communities?.map(({ communityId, groupName }) => (
                <div style={{ justifyContent: 'center', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', background: 'white', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={communityId}>
                    <Row>
                        <Col>
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