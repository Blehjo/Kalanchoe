import { useContext } from 'react';
import { Outlet } from 'react-router';

import { ListContext } from '../contexts/list.context';

import SidebarOverlay from './SidebarOverlay';
import SidebarMenu from './SidebarMenu';

function SidebarIndex() {
    const { isNavOpen } = useContext(ListContext);

    return (
        <div className='row' >
            <div className='col' xs={1} sm={1} md={1} lg={1} xl={1}>
                <div style={{ zIndex: 200 }} className="col fixed-top">
                    <SidebarMenu />
                    {isNavOpen && <SidebarOverlay />}
                </div>
            </div>
            <div className="col mediatoggle" style={{ margin: '2rem' }} xs={10} sm={10} md={10} lg={10} xl={10}>
                <Outlet />
            </div>
        </div>
    );
}

export default SidebarIndex;
