import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from "react";

const ModalSubmit = ({ title, functionHandler, id, type, placeholder }) => {
    const [show, setShow] = useState(true);
    const [value, setValue] = useState('');

    const handleClose = () =>
        setShow(false);

    const handleValueChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = async () => {
        functionHandler({ value, id });
        setShow(false);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onChange={handleValueChange} value={value} type={type} placeholder={placeholder} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" as="input" type="button" value="Close" onClick={handleClose}/>
                    <Button variant="light" as="input" type="submit" value={`Add ${type}`} />
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ModalSubmit;