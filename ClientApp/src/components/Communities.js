import { Fragment, useEffect, useState } from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import { addCommunity, getCommunity } from "../utils/api/community";
import { Plus } from 'react-bootstrap-icons';

const Communities = () => {
    const [communities, setCommunities] = useState([]);
    const [show, setShow] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [description, setDescription] = useState('');

    const handleShow = () => 
        setShow(!show);

    const groupNameHandler = (event) => {
        setGroupName(event.target.value);
    }

    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addCommunity({ userId: 1, groupName: groupName, description: description });
        handleShow();
    }

    useEffect(() => {
        getCommunity()
        .then((response) => setCommunities(response.data));
    }, []);

    return(
        <Fragment>
            <h1>Communities</h1>
            <Button variant="light" type="submit" onClick={handleShow}><Plus/></Button>
            {
                communities.length > 0 && communities.map(({ groupName, description, communityId, userId, dateCreated }) => (
                    <h1>{groupName}</h1>
                ))
            }
            {
                show && 
                <Modal show={show} onHide={handleShow}>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create a community</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control onChange={groupNameHandler} value={groupName} type="groupname" placeholder="Community name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control onChange={descriptionHandler} value={description} as="textarea" type="description" placeholder="Description" />
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
