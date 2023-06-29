import { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { noteFetchAllStart } from '../store/note/note.action';
import { selectNoteItems } from '../store/note/note.selector';
import { panelFetchAllStart } from '../store/panel/panel.action';
import { selectPanelItems } from '../store/panel/panel.selector';
import { getPanelNotes } from '../utils/api/note.api';
import { getUserPanelsProfile } from '../utils/api/panel.api';
import { utcConverter } from '../utils/date/Date';

import NoteInfo from './NoteInfo';

const UserDilemmasTab = () => {
    const dispatch = useDispatch();
    const dilemmas = useSelector(selectPanelItems);
    const notes = useSelector(selectNoteItems);
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
        <Row>
            {dilemmas?.length > 0 ? Array.from(dilemmas)?.map(({ panelId, title, dateCreated }) => (
            <Col>
            <Card key={panelId} id={panelId} onClick={handleClickEvent} style={{ cursor: 'pointer', textDecoration: 'none', color: 'white', textAlign: 'center' }} href={`/panel/${id}`} className="bg-dark">
                <Card.Body id={panelId} onClick={handleClickEvent}>
                    <Row xs={1} lg={2}>
                        <Col>
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
            <Card style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                <Card.Title>"Stay tuned. Currently no dilemmas..."</Card.Title>
            </Card>
        )}
        </Row>
    );
}

export default UserDilemmasTab;