import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import { deletePanel, getUserPanels } from "../utils/api/panel.api";
import NoteInfo from "./NoteInfo";

const DilemmasPanel = () => {
    const navigate = useNavigate();
    const [panels, setPanels] = useState([]);

    const goToPanel = () => {
        navigate("/projects");
    }

    const handlePanelDelete = (event) => {
        deletePanel(event.target.id);
    }

    useEffect(() => {
        getUserPanels()
        .then((response) => setPanels(response.data));
    }, []);

    return (
        <div style={{ height: '350px', marginBottom: '1rem', backgroundColor: '#d4d4d4', padding: '1rem', borderRadius: '.2rem',  marginTop: '1rem', overflowY: 'auto' }}>
            <h1 style={{  textAlign: 'center' }}>Dilemmas</h1>
            {panels?.length > 0 ? panels?.map(({ panelId, title }) => (
                <div style={{ cursor: 'pointer', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', background: 'white', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={panelId}>
                    <Row style={{ margin: '1rem' }} xs={3}>
                        <Col xs={5}>
                            <div id={panelId} onClick={goToPanel}>
                                {title}
                            </div>
                        </Col>
                        <Col xs={5}>
                        <NoteInfo panelId={panelId} />
                        </Col>
                        <Col xs={1}>
                            <Button variant="light" id={panelId} onClick={handlePanelDelete}><XCircle/></Button>
                        </Col>
                    </Row>
                </div>
            )) : 
            <Card style={{ margin: '.5rem', textAlign: 'center' }}>
              <Card.Body>
                Create An Account And Start Solving Your Dilemmas
              </Card.Body>
            </Card>}
        </div>
    )
}

export default DilemmasPanel;