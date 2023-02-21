import { Fragment, useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import { utcConverter } from '../utils/date/Date';
import { useParams } from 'react-router';
import { getUserPanelsProfile } from '../utils/api/panel';
import { useDispatch, useSelector } from 'react-redux';
import { selectPanelItems } from '../store/panel/panel.selector';
import { panelFetchAllStart } from '../store/panel/panel.action';

const UserDilemmasTab = () => {
    const dispatch = useDispatch();
    const dilemmas = useSelector(selectPanelItems);
    const { id } = useParams();
    
    useEffect(() => {
        getUserPanelsProfile(id)
        .then((response) => dispatch(panelFetchAllStart(response.data)));
    }, [])

    return (
        <Fragment>
            {dilemmas?.length > 0 ? Array.from(dilemmas)?.map(({ panelId, title, dateCreated }) => (
                    <Card.Link style={{ textDecoration: 'none', margin: '1rem', color: 'black', textAlign: 'center' }} href={`/panel/${id}`}>
                        <Row>
                            <Col xl={8} key={panelId}>
                                <Card.Header>{title}</Card.Header>
                                <Card.Body>
                                    <Card.Text>{`Created ${utcConverter(dateCreated)}`}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card.Link>
            )) : (
                <Card style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no dilemmas..."</Card.Title>
                </Card>
            )}
        </Fragment>
    )
}

export default UserDilemmasTab;