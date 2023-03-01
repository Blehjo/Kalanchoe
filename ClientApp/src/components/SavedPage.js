import { Fragment, useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savedFetchAllStart } from "../store/saved/saved.action";
import { selectSaved } from "../store/saved/saved.selector";
import { getUserSaved } from "../utils/api/saved";
import { SavedForm } from "./SavedForm";

const Saved = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const saved = useSelector(selectSaved);
    const [isShowing, setIsShowing] = useState(false);

    const showPostForm = () =>
        setIsShowing(!isShowing);

    useEffect(() => {
        getUserSaved()
        .then((response) => dispatch(savedFetchAllStart(response.data)));
    }, []);

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return(
        <Fragment>
            <Row key="header" xs={2}>
                <Col key="saved" xs={10}>
                    <h1>Saved</h1>
                </Col>
                <Col key="button" xs={2}>
                    <Button variant="light" onClick={showPostForm}>{!isShowing ? 'Create Saved' : 'Nevermind'}</Button>
                </Col>
            </Row>
            <Row xs={1} md={2} key="groups">
                {saved?.map(({ id, mediaLink, title, link }) => (
                    <Col style={{ marginBottom: '1.5rem' }} key={id}>
                        <Card
                            id={link} 
                            onClick={() => openInNewTab(link)}
                            style={{ color: 'white' }}
                            className="bg-dark"
                            key={id}
                        >
                            <Card.Img style={{ position: 'relative', borderRadius: ".5rem", width: "100%", height: "25rem", objectFit: "cover" }} src={mediaLink} alt={title} />
                            <Card.ImgOverlay >
                                <div style={{ position: 'absolute', left: '50%', top: '50%', borderRadius: '1rem', transform: 'translate(-50%, -50%)' }} className="text-white">
                                    <Card.Title style={{ fontSize: '500%' }}>{title}</Card.Title>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
                {
                isShowing && <SavedForm key="savedform"/> 
                }
            </Row>
        </Fragment>
    );
}

export default Saved;