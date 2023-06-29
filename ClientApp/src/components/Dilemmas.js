import { Fragment, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Plus } from 'react-bootstrap-icons';
import { addPanel } from "../utils/api/panel.api";

import DragList from "./DragList";
import ModalSubmit from "./ModalSubmit";

const Dilemmas = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(true);

    return(
        <Fragment>
            <Row xs ={2}>
            <Col xs={10}>
                <h1>Dilemmas</h1>
            </Col>
            <Col xs={1}>
                <Button variant="light" onClick={handleClick} ><Plus/></Button>
            </Col>
            </Row>
            <DragList />
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

export default Dilemmas;
