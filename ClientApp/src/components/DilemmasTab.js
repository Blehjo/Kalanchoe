import { Fragment, useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import { utcConverter } from '../utils/date/Date';
import { useParams } from 'react-router';
import { getUserPanelsProfile } from '../utils/api/panel';
import { useDispatch, useSelector } from 'react-redux';
import { selectPanelItems } from '../store/panel/panel.selector';
import { panelFetchAllStart } from '../store/panel/panel.action';
import { getPanelNotes } from '../utils/api/note';
import { noteFetchAllStart } from '../store/note/note.action';
import { selectNoteItems } from '../store/note/note.selector';

const DilemmasTab = () => {
    const dispatch = useDispatch();
    const dilemmas = useSelector(selectPanelItems);
    const notes = useSelector(selectNoteItems);
    const { id } = useParams();

    const handleClickEvent = (event) => {
        getPanelNotes(event.target.id)
        .then((response) => dispatch(noteFetchAllStart(response.data)));
        console.log("Notes: ", notes)
    }
    
    useEffect(() => {
        getUserPanelsProfile(id)
        .then((response) => dispatch(panelFetchAllStart(response.data)));
    }, [])

    return (
        <Fragment>
            <Row>
            {dilemmas?.length > 0 ? Array.from(dilemmas)?.map(({ panelId, title, dateCreated }) => (
                <Card id={panelId} onClick={handleClickEvent} style={{ cursor: 'pointer', textDecoration: 'none', margin: '1rem', color: 'white', textAlign: 'center' }} href={`/panel/${id}`} className="bg-dark">
                    <Col xs={8} key={panelId}>
                        <Card.Header id={panelId} onClick={handleClickEvent} >{title}</Card.Header>
                        <Card.Footer>{`Created ${utcConverter(dateCreated)}`}</Card.Footer>
                    </Col>
                </Card>
            )) : (
                <Card style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no dilemmas..."</Card.Title>
                </Card>
            )}
            </Row>
        </Fragment>
    );
}

export default DilemmasTab;