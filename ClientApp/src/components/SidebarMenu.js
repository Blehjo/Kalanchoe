import { Nav } from 'react-bootstrap';
import Saved from './Saved'

const SidebarMenu = () => {
    return (
        <div id="newSidebar" className='sticky-top bg-dark hidden' style={{ width: 100 }}>
            <nav
                className='justify-content-center'
            >
                <Saved />
            </nav>
        </div>
    )
}

export default SidebarMenu
