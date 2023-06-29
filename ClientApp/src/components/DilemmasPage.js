import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { panelFetchAllStart } from "../store/panel/panel.action";
import { selectPanelItems } from "../store/panel/panel.selector";
import { getPanels } from "../utils/api/panel.api";
import NoteInfo from "./NoteInfo";
import UserInfo from "./UserInfo";

const DilemmasPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const panels = useSelector(selectPanelItems);

    const goToPost = async (event) => {
        const id = event.target.id;
        navigate(`/dilemmas/${id}`);
    }

    useEffect(() => {
        getPanels()
        .then((response) => dispatch(panelFetchAllStart(response.data)));
    }, []);

    return (
        <Row xl={3} style={{ margin: '1rem' }}>
        {
            panels?.length > 0 && panels?.map(({ title, panelId, userId }) => (
                <Col key={panelId}>
                    <Card style={{ margin: '1rem', textAlign: 'center' }}>
                        <Card.Title style={{ margin: '1rem' }}>
                            <Row xs={1} lg={2}>
                                <Col>
                                    {title}
                                </Col>
                                <Col>
                                    <NoteInfo panelId={panelId}/> 
                                </Col>
                            </Row>
                        </Card.Title>
                        <Card.Subtitle style={{ margin: '1rem' }}><UserInfo userId={userId}/></Card.Subtitle>
                        <Button variant="light" onClick={goToPost} as="input" type="button" value="Go to Dilemma" id={panelId}/> 
                    </Card>
                </Col>
            ))
        }
        </Row>
    );
}

export default DilemmasPage;