import { Outlet } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import SidebarOverlay from './SidebarOverlay';
import SidebarMenu from './SidebarMenu';
import { selectIsListOpen } from '../store/list/list.selector';

function SidebarIndex() {
    const dispatch = useDispatch();
    const isListOpen = useSelector(selectIsListOpen);

    return (
        <Row style={{ zIndex: 2 }}>
            <Col xs={2} >
                <div className="sticky-top">
                    <SidebarMenu />
                    {isListOpen && <SidebarOverlay />}
                </div>
            </Col>
            <Col style={{ margin: '2rem' }} xs={10} >
                <Outlet />
            </Col>
        </Row>
    );
}

export default SidebarIndex;