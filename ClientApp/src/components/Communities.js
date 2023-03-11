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
    mediaLink: '',
    imageSource: null,
    imageFile: null
}

const Communities = () => {
    const navigate = useNavigate();
    const [communities, setCommunities] = useState([]);
    const [createModal, setCreateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [formFields, setFormFields] = useState(defaultFormFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setFormFields({
                    ...formFields,
                    imageFile,
                    imageSource: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setFormFields({
                ...formFields,
                imageFile: null,
                imageSource: null
            })
        }
    }

    const resetFormFields = () =>
        setFormFields(defaultFormFields);

    const handleShow = () => 
        setCreateModal(!createModal);

    const handleFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('groupName', formFields.groupName);
        formData.append('description', formFields.description);
        formData.append('mediaLink', formFields.mediaLink);
        formData.append('imageFile', formFields.imageFile);
        addCommunity(formData);
        resetFormFields();
        window.location.reload();
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
    }, []);

    return(
        <Fragment>
            <Row xs={2}>
                <Col xs={10}>
                    <h1>Communities</h1>
                </Col>
                <Col xs={1}>
                    <Button variant="light" type="submit" onClick={handleShow}><Plus/></Button>
                </Col>
            </Row>
            {
                communities.length > 0 && communities.map(({ groupName, description, communityId, userId, dateCreated, mediaLink, imageSource }) => (
                    <Row key={communityId} style={{ margin: '1rem' }} xs={2}>
                        <Col xs={4} key={communityId}>
                            {mediaLink?.length > 0 ? <Card.Img onClick={goToCommunity} id={communityId} height='200' style={{ cursor: 'pointer', borderRadius: '.2rem', objectFit:'cover'}} src={imageSource}/> : ''}
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
                    <Form onSubmit={handleFormSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create a community</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Control onChange={handleChange} name="groupName" value={formFields.groupName} as="textarea" type="groupname" placeholder="Community name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Control onChange={handleChange} name="description" value={formFields.description} as="textarea" type="description" placeholder="Description" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formMedia">
                                <Form.Control onChange={showPreview} name="mediaLink" as="input" accept="image/*" type="file" placeholder="Media" />
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