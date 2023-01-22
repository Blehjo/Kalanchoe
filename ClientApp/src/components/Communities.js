import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { XCircle, Plus, ArrowRight } from 'react-bootstrap-icons';
import { Modal, Form, Button, Col, Row, Card } from 'react-bootstrap';
import { addCommunity, getCommunity, deleteCommunity } from "../utils/api/community";
import ModalDelete from "./ModalDelete";

const Communities = () => {
    const [communities, setCommunities] = useState([]);
    const [createModal, setCreateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [description, setDescription] = useState('');
    const [mediaLink, setMediaLink] = useState('');
    const navigate = useNavigate();

    const handleShow = () => 
        setCreateModal(!createModal);
    
    const handleClose = () => 
        setDeleteModal(!deleteModal);

    const groupNameHandler = (event) => {
        setGroupName(event.target.value);
    }

    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    }
    
    const mediaLinkHandler = (event) => {
        setMediaLink(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addCommunity({ userId: 1, groupName: groupName, description: description, mediaLink: mediaLink });
        handleShow();
    }

    const goToCommunity = async (event) => {
        const id = event.target.id;
        navigate(`/community/${id}`);
    }

    useEffect(() => {
        getCommunity()
        .then((response) => setCommunities(response.data));
    }, [handleShow]);

    return(
        <Fragment>
            <Row xs={2}>
                <Col xs={11}>
                    <h1>Communities</h1>
                </Col>
                <Col xs={1}>
                    <Button variant="light" type="submit" onClick={handleShow}><Plus/></Button>
                </Col>
            </Row>
            {
                communities.length > 0 && communities.map(({ groupName, description, communityId, userId, dateCreated, mediaLink }) => (
                    <Row xs={1} lg={3}>
                        <Col key={communityId}>
                            {mediaLink?.length > 0 ? <Card.Img height='200' style={{ objectFit:'cover'}} src={mediaLink}/> : ''}
                            <Row xs={2}>
                                <Col xs={10}>
                                    <Card.Title style={{ margin: 'auto' }}>{groupName}</Card.Title>
                                </Col>
                                <Col xs={2}>
                                    <Button variant="light" type="button" ><ArrowRight onClick={goToCommunity} id={communityId}/></Button>
                                </Col>
                                <Card.Subtitle style={{ margin: 'auto' }}>{description}</Card.Subtitle>
                            <Button variant="light" onClick={handleClose}><XCircle/></Button>
                            </Row>
                        </Col>
                    {
                        deleteModal && 
                        <ModalDelete
                            functionHandler={deleteCommunity}
                            id={communityId}
                        />
                    }
                    </Row>
                ))
            }
            {
                createModal && 
                <Modal show={createModal} onHide={handleShow}>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create a community</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Control onChange={groupNameHandler} value={groupName} type="groupname" placeholder="Community name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Control onChange={descriptionHandler} value={description} as="textarea" type="description" placeholder="Description" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMedia">
                                <Form.Control onChange={mediaLinkHandler} value={mediaLink} type="mediaLink" placeholder="Media" />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" as="input" type="submit" value="Close" onClick={handleShow}/>
                            <Button variant="light" as="input" type="submit" value="Add Community" />
                        </Modal.Footer>
                    </Form>
                </Modal>
            }
        </Fragment >
    );
}

export default Communities;
