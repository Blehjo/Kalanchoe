import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { addPost } from "../utils/api/post";

const defaultFormFields = {
    postValue: '',
    mediaLink: '',
}

export const PostForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { postValue, mediaLink } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const resetFormFields = () =>
        setFormFields(defaultFormFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            addPost(formFields);
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
                        value={postValue}
                        />
                    <Form.Text className="text-muted">
                        Share with the KalanchoeAI community
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMediaLink">
                    <Form.Label>Media</Form.Label>
                    <Form.Control
                        as="input"
                        label="MediaLink"
                        type="text"
                        placeholder="Place Media Here"
                        onChange={handleChange}
                        name="mediaLink"
                        value={mediaLink}
                        />
                </Form.Group>
                <Button as="input" type="submit" value="Submit" />
            </Form>
        </Col>
        </Row>
    );
}