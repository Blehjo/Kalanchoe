import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from '../store/user/user.selector';
import { Button, Col, Form } from "react-bootstrap";
import { addPanel } from "../utils/api/panel";

export const PostForm = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const userId = currentUser;
    const [title, setTitle] = useState('');

    const handleTitleChange = (event) => 
        setTitle(event.target.value);
        
    const makePanel = (event) => {
        event.preventDefault();
        try {
            addPanel(title);
            setTitle('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Col xs={6}>
            <Form onSubmit={makePanel} style={{ color: 'black', marginTop: '1rem' }}>
                <Form.Group className="mb-3" controlId="formPanelTitle">
                    <Form.Label>Panel</Form.Label>
                        <Form.Control
                        as='text'
                        placeholder="Title"
                        label="Title"
                        type="title"
                        required
                        onChange={handleTitleChange}
                        name="title"
                        value={title}
                    />
                </Form.Group>
                <Button as="input" type="submit" value="Submit" />
            </Form>
        </Col>
    );
}