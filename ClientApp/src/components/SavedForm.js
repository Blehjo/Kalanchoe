import { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { addSaved } from "../utils/api/saved";

const defaultFormFields = {
    title: '',
    mediaLink: '',
    link: '',
}

export const SavedForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { title, mediaLink, link } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const resetFormFields = () =>
        setFormFields(defaultFormFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            addSaved(formFields);
            resetFormFields();
            window.location.reload();
        } catch (error) {
            throw error;
        }
    }

    return (
        <Col xs={12} >
            <Form asp-controller="saved" encType="multipart/form-data" onSubmit={handleSubmit} style={{ color: 'black', marginTop: '1rem' }}>
            <Modal.Header closeButton>
                <Modal.Title>Add a page</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Saved</Form.Label>
                        <Form.Control
                        as='textarea'
                        placeholder="Create a Saved Icon"
                        label="Title"
                        type="Title"
                        required
                        onChange={handleChange}
                        name="title"
                        value={title}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMediaLink">
                    <Form.Label>Media</Form.Label>
                    <Form.Control
                        as="textarea"
                        label="MediaLink"
                        type="text"
                        placeholder="Place Media Here"
                        onChange={handleChange}
                        name="mediaLink"
                        value={mediaLink}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLink">
                    <Form.Label>Link</Form.Label>
                    <Form.Control
                        as="input"
                        label="Link"
                        type="file"
                        placeholder="Place Link Here"
                        onChange={handleChange}
                        name="link"
                        value={link}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button as="input" type="submit" value="Submit" />
            </Modal.Footer>
            </Form>
        </Col>
    );
}