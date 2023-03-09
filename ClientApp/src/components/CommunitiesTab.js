import { Fragment, useEffect, useState } from 'react';
import { Card, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { utcConverter } from '../utils/date/Date';
import { useParams } from 'react-router';
import { addCommunity, getUserCommunities } from '../utils/api/community';
import { selectCommunities } from '../store/community/community.selector';
import { communityFetchAllStart } from '../store/community/community.action';

const defaultFormFields = {
    groupName: '',
    description: '',
    mediaLink: ''
}

const CommunitiesTab = () => {
    const dispatch = useDispatch();
    const communities = useSelector(selectCommunities);
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { groupName, description, mediaLink } = formFields;
    const { id } = useParams();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }
    
    const handleShowCreateGroup = () => setShowCreateGroup(!showCreateGroup);

    const resetFormFields = () =>
        setFormFields(defaultFormFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("groupName", groupName);
        formData.append("description", description);
        formData.append("mediaLink", mediaLink);
        await addCommunity({ groupName: groupName, description: description, mediaLink: mediaLink });
        resetFormFields();
        handleShowCreateGroup();
    }

    useEffect(() => {
        getUserCommunities(id)
        .then((response) => dispatch(communityFetchAllStart(response.data)));
    }, []);
    console.log(mediaLink)

    return (
        <Fragment>
            <Row style={{ marginBottom: '2rem' }} xs={1} >
                <Col>
                    <Card style={{ color: 'white', textAlign: 'center' }} className='bg-dark'>
                        <Card.Body>
                            <Card.Title style={{ cursor: 'pointer' }} onClick={handleShowCreateGroup}>Create a community</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {communities?.length > 0 ? Array.from(communities)?.map(({ communityId, groupName, description, dateCreated, mediaLink }) => (
                <Card.Link key={communityId} style={{ textDecoration: 'none', color: 'black', margin: '1rem' }} href={`/community/${id}`}>
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
            <Modal show={showCreateGroup} onHide={handleShowCreateGroup}>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create a community</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Control style={{ height: '.5rem' }} onChange={handleChange} name="groupName" value={groupName} as="textarea" type="groupname" placeholder="Community name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Control style={{ height: '.5rem' }} onChange={handleChange} name="description" value={description} as="textarea" type="description" placeholder="Description" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMedia">
                                <Form.Control style={{ height: '.5rem' }} onChange={handleChange} name="mediaLink" value={mediaLink} as="input" type="file" placeholder="Media" />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" as="input" type="submit" value="Close" onClick={handleShowCreateGroup}/>
                            <Button variant="light" as="input" type="submit" value="Add Community" />
                        </Modal.Footer>
                    </Form>
                </Modal>
        </Fragment>
    );
}

export default CommunitiesTab;