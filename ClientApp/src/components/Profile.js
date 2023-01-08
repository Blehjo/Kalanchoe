import { Fragment, useCallback, useState, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Col, Row, Navbar } from 'react-bootstrap';
import { ArrowDownShort } from 'react-bootstrap-icons';

import DragMove from './DragMove';
import DragList from "./DragList";
import Toolbar from './Toolbar';

import { ToolContext } from '../contexts/tool.context';

const Profile = () => {
    const { isToolOpen, setIsToolOpen } = useContext(ToolContext);

    const toggleIsToolOpen = () => setIsToolOpen(!isToolOpen);

    //const [translate, setTranslate] = useState({
    //    x: 0,
    //    y: 0
    //});

    //const handleDragMove = (e) => {
    //    setTranslate({
    //        x: translate.x + e.movementX,
    //        y: translate.y + e.movementY
    //    });
    //};

    return(
        <Fragment>
            <Row style={{ width: '100%', justifyContent: 'center' }} className="sticky-top">
                {isToolOpen ?
                    <Col xs={6} sm={10}>
                    <Navbar style={{ justifyContent: 'space-evenly' }}>
                        <Toolbar />
                    </Navbar>
                    </Col>
                    :
                    <Col xs={6} sm={10} style={{ cursor: 'pointer', textAlign: 'center' }} onClick={toggleIsToolOpen}>
                        <ArrowDownShort className='mx-2' color="black" size={15} />
                    </Col>
                }
            </Row>
            <Row>
                <h1>Studio</h1>
                <Col>
                    <DragList />
                </Col>
            </Row>
        </Fragment>
    );
}

export default Profile;