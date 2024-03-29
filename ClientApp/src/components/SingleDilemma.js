import { Fragment, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Button, Col, Row } from "react-bootstrap";
import { Plus } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import styled from "styled-components";

import { panelFetchAllStart } from "../store/panel/panel.action";
import { selectPanelItems } from "../store/panel/panel.selector";
import { addPanel, getSinglePanel } from "../utils/api/panel.api";
import DraggableElement from "./DraggableElement";
import ModalSubmit from "./ModalSubmit";

const DragDropContextContainer = styled.div`
  padding: 20px;
  border-radius: 6px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

const SingleDilemma = () => {
    const dispatch = useDispatch();
    const { panelId, title } = useSelector(selectPanelItems);
    const [show, setShow] = useState(false);
    const { id } = useParams();

    const hanldeClick = () => setShow(true);

    useEffect(() => {
        getSinglePanel(id)
        .then((response) => dispatch(panelFetchAllStart(response.data)));
    }, []);

    return (
        <Fragment>
            <Row xs ={2}>
            <Col xs={10}>
                <h1>Dilemmas</h1>
            </Col>
            <Col xs={1}>
                <Button variant="light" onClick={hanldeClick} ><Plus/></Button>
            </Col>
            </Row>
            <DragDropContextContainer>
                <DragDropContext >
                    <ListGrid>
                        <DraggableElement
                            title={title}
                            key={panelId}
                            panelId={panelId}
                            prefix={title}
                        />
                    </ListGrid>
                </DragDropContext>
            </DragDropContextContainer>
            {
                show &&
                <ModalSubmit
                title={"New Panel"}
                functionHandler={addPanel}
                type={"Panel"}
                placeholder={"Write panel name here"}
                />
            }
        </Fragment >
    );
}

export default SingleDilemma;