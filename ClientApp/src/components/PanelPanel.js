import { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import { getUserPanels, deletePanel } from "../utils/api/panel";
import { useNavigate } from "react-router";

const PanelPanel = () => {
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
        <div style={{ height: '350px', width: 'auto', backgroundColor: '#d4d4d4', padding: '1rem', borderRadius: '.2rem', textAlign: 'center', margin: '1rem', overflowY: 'auto' }}>
            <h1>Dilemmas</h1>
            <Row xl={2}>
            {panels?.length > 0 && panels?.map(({ panelId, title }) => (
                <div style={{ cursor: 'pointer', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', background: 'white', margin: '.3rem', padding: '.5rem', borderRadius: '.2rem' }} key={panelId}>
                    <Row xs={2}>
                        <Col xs={9}>
                            <div id={panelId} onClick={goToPanel}>
                                {title}
                            </div>
                        </Col>
                        <Col xs={1}>
                            <Button variant="light" id={panelId} onClick={handlePanelDelete}><XCircle/></Button>
                        </Col>
                    </Row>
                </div>
            ))}
            </Row>
        </div>
    )
}

export default PanelPanel;