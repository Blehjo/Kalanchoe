import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from "react";

const ModalDelete = ({ functionHandler, id }) => {
    const [show, setShow] = useState(true);

    const handleClose = () =>
        setShow(!show);

    const handleSubmit = async () => {
        functionHandler(id);
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" as="input" type="submit" value="Close" onClick={handleClose}/>
                    <Button variant="light" as="input" type="submit" value="Delete" />
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ModalDelete;