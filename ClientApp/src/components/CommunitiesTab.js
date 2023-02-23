import { Fragment, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { utcConverter } from '../utils/date/Date';
import { useParams } from 'react-router';
import { getUserCommunities } from '../utils/api/community';
import { selectCommunities } from '../store/community/community.selector';
import { communityFetchAllStart } from '../store/community/community.action';

const CommunitiesTab = () => {
    const dispatch = useDispatch();
    const communities = useSelector(selectCommunities);
    const { id } = useParams();
    
    useEffect(() => {
        getUserCommunities(id)
        .then((response) => dispatch(communityFetchAllStart(response.data)));
    }, []);

    return (
        <Fragment>
            {communities?.length > 0 ? Array.from(communities)?.map(({ communityId, groupName, description, dateCreated, mediaLink }) => (
                <Card.Link key={communityId} style={{ textDecoration: 'none', color: 'black', margin: '1rem' }} href={`/groups/${id}`}>
                    <Row>
                        <Col key='img' xl={4}>
                            <Card.Img height='200' style={{ objectFit:'cover', borderRadius: '.5rem' }} src={mediaLink} />
                        </Col>
                        <Col xl={8} key={communityId}>
                            <Card.Header>{groupName}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Card.Text>{`Established ${utcConverter(dateCreated)}`}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card.Link>
            )) : (
                <Card key='excuse' style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no communities..."</Card.Title>
                </Card>
            )}
        </Fragment>
    );
}

export default CommunitiesTab;