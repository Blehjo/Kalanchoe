import { Modal } from "react-bootstrap";


const ImageModal = ({ image }) => {

    return (
        <Modal.Body>
            <img style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} src={image} />
        </Modal.Body>
    )
}

export default ImageModal;