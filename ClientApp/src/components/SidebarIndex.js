import { useContext } from 'react';
import { Outlet } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import { ListContext } from '../contexts/list.context';

import SidebarOverlay from './SidebarOverlay';
import SidebarMenu from './SidebarMenu';

function SidebarIndex() {
    const { isNavOpen } = useContext(ListContext);

    return (
        <Row style={{ zIndex: 2 }}>
            <Col xs={2} >
                <div className="sticky-top">
                    <SidebarMenu />
                    {isNavOpen && <SidebarOverlay />}
                </div>
            </Col>
            <Col style={{ margin: '2rem' }} xs={10} >
                <Outlet />
            </Col>
        </Row>
    );
}

export default SidebarIndex;