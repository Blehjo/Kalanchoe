import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { addPost } from "../utils/api/post";

const defaultFormFields = {
    postValue: '',
    mediaLink: '',
    imageSource: null,
    imageFile: null
}

export const PostForm = () => {
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('postValue', formFields.postValue);
            formData.append('mediaLink', formFields.mediaLink);
            formData.append('imageFile', formFields.imageFile);
            addPost(formData)
            .then(() => window.location.reload());
            resetFormFields();
        } catch (error) {
            throw error;
        }
    }

    return (
        <Row style={{ justifyContent: 'center' }}>
        <Col xs={12} >
            <Form onSubmit={handleSubmit} style={{ color: 'black', marginTop: '1rem' }}>
                <Form.Group className="mb-3" controlId="formPostValue">
                    <Form.Label>Post</Form.Label>
                        <Form.Control
                        as='textarea'
                        placeholder="Make a post"
                        label="PostValue"
                        type="postValue"
                        required
                        onChange={handleChange}
                        name="postValue"
                        value={formFields.postValue}
                        />
                    <Form.Text className="text-muted">
                        Share with the KalanchoeAI community
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMedia">
                    <Form.Control onChange={showPreview} name="mediaLink" as="input" accept="image/*" type="file" placeholder="Media" />
                </Form.Group>
                <Button style={{ height: "3.8rem" }} as="input" type="submit" value="Submit" />
            </Form>
        </Col>
        </Row>
    );
}