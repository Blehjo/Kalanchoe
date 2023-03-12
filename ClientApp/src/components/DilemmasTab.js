import { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

import { utcConverter } from '../utils/date/Date';
import { getUserPanelsProfile } from '../utils/api/panel';
import { useDispatch, useSelector } from 'react-redux';
import { selectPanelItems } from '../store/panel/panel.selector';
import { panelFetchAllStart } from '../store/panel/panel.action';
import { getPanelNotes } from '../utils/api/note';
import { noteFetchAllStart } from '../store/note/note.action';
import { useNavigate } from "react-router";

import NoteInfo from './NoteInfo';

const DilemmasTab = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dilemmas = useSelector(selectPanelItems);

    const { id } = useParams();

    const handleClickEvent = (event) => {
        getPanelNotes(event.target.id)
        .then((response) => dispatch(noteFetchAllStart(response.data)));
    }
    
    useEffect(() => {
        getUserPanelsProfile(id)
        .then((response) => dispatch(panelFetchAllStart(response.data)));
    }, [])

    return (
        <Row xs={3}>
        {dilemmas?.length > 0 ? Array.from(dilemmas)?.map(({ panelId, title, dateCreated }) => (
            <Col>
            <Card key={panelId} id={panelId} onClick={handleClickEvent} style={{ cursor: 'pointer', textDecoration: 'none', color: 'white', textAlign: 'center' }} href={`/panel/${id}`} className="bg-dark">
                <Card.Body id={panelId} onClick={handleClickEvent}>
                    <Row xs={1} lg={2}>
                        <Col onClick={() => navigate(`/dilemmas/${panelId}`)}>
                            {title}
                        </Col>
                        <Col>
                            <NoteInfo panelId={panelId} />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>{`Created ${utcConverter(dateCreated)}`}</Card.Footer>
            </Card>
            </Col>
            
        )) : (
            <Col xs={12}>
            <Card style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                <Card.Title>"Stay tuned. Currently no dilemmas..."</Card.Title>
            </Card>
            </Col>
        )}
        </Row>
    );
}

export default DilemmasTab;