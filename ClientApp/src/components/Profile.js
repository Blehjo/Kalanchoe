import { Fragment, useState } from "react";
import { Col, Row, Navbar } from 'react-bootstrap';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DragMove from './DragMove';
import DragList from "./DragList";
import Toolbar from './Toolbar';

import { useDispatch, useSelector } from "react-redux";
import { selectIsToolOpen } from "../store/tool/tool.selector";
import { setIsToolOpen } from '../store/tool/tool.action';

const Profile = () => {
    const dispatch = useDispatch();
    const isToolOpen = useSelector(selectIsToolOpen);

    const toggleIsToolOpen = () => dispatch(setIsToolOpen(!isToolOpen));

    const [translate, setTranslate] = useState({
        x: 0,
        y: 0
    });

    const handleDragMove = (e) => {
        setTranslate({
            x: translate.x + e.movementX,
            y: translate.y + e.movementY
        });
    };

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
                        <ExpandMoreIcon className='mx-2' color="black" size={15} />
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