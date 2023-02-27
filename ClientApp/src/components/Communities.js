import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { XCircle, Plus, ArrowRight } from 'react-bootstrap-icons';
import { Modal, Form, Button, Col, Row, Card } from 'react-bootstrap';
import { addCommunity, getCommunities, deleteCommunity } from "../utils/api/community";
import ModalDelete from "./ModalDelete";
import { addMember } from "../utils/api/member";

const defaultFormFields = {
    groupName: '',
    description: '',
    mediaLink: ''
}

const Communities = () => {
    const [communities, setCommunities] = useState([]);
    const [createModal, setCreateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { groupName, description, mediaLink } = formFields;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const resetFormFields = () =>
        setFormFields(defaultFormFields);

    const handleShow = () => 
        setCreateModal(!createModal);
    
    const handleClose = () => 
        setDeleteModal(!deleteModal);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addCommunity({ groupName: groupName, description: description, mediaLink: mediaLink });
        resetFormFields();
        handleShow();
    }

    const join = (event) => {
        addMember({ communityId: event.target.id });
    }

    const goToCommunity = async (event) => {
        const id = event.target.id;
        navigate(`/community/${id}`);
    }

    useEffect(() => {
        getCommunities()
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
                    <Row style={{ margin: '1rem' }} xs={2}>
                        <Col xs={4} key={communityId}>
                            {mediaLink?.length > 0 ? <Card.Img onClick={goToCommunity} id={communityId} height='200' style={{ cursor: 'pointer', borderRadius: '.2rem', objectFit:'cover'}} src={mediaLink}/> : ''}
                        </Col>
                        <Col>
                            <Card.Title style={{ margin: 'auto' }}>{groupName}</Card.Title>
                            <Card.Body>
                                <Card.Subtitle style={{ margin: 'auto' }}>{description}</Card.Subtitle>
                                <Button id={communityId} style={{ marginTop: '1rem' }} variant="light" type="submit" onClick={join}>Join</Button>
                            </Card.Body>
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
                                <Form.Control onChange={handleChange} name="groupName" value={groupName} type="groupname" placeholder="Community name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Control onChange={handleChange} name="description" value={description} as="textarea" type="description" placeholder="Description" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMedia">
                                <Form.Control onChange={handleChange} name="mediaLink" value={mediaLink} type="mediaLink" placeholder="Media" />
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
