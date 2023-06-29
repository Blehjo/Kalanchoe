import { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { addSaved } from "../utils/api/saved.api";

const defaultFormFields = {
    title: '',
    link: '',
    mediaLink: '',
    imageSource: null,
    imageFile: null
}

export const SavedForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [createModal, setCreateModal] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', formFields.title);
        formData.append('link', formFields.link);
        formData.append('mediaLink', formFields.mediaLink);
        formData.append('imageFile', formFields.imageFile);
        await addSaved(formData);
        resetFormFields();
        window.location.reload();
    }

    return (
        <Col xs={12} >
            <Form onSubmit={handleSubmit} style={{ color: 'black', marginTop: '1rem' }}>
            <Modal.Header closeButton>
                <Modal.Title>Add a saved</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Saved</Form.Label>
                        <Form.Control
                        style={{ height: '.5rem' }}
                        as='textarea'
                        placeholder="Create a Saved Icon"
                        label="Title"
                        type="Title"
                        required
                        onChange={handleChange}
                        name="title"
                        value={formFields.title}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLink">
                    <Form.Label>Link</Form.Label>
                    <Form.Control
                        style={{ height: '.5rem' }}
                        as="textarea"
                        label="Link"
                        type="textarea"
                        placeholder="Place Link Here"
                        onChange={handleChange}
                        name="link"
                        value={formFields.link}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMedia">
                    <Form.Label>Image</Form.Label>
                    <Form.Control onChange={showPreview} name="mediaLink" as="input" accept="image/*" type="file" placeholder="Media" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button as="input" type="submit" value="Submit" />
            </Modal.Footer>
            </Form>
        </Col>
    );
}