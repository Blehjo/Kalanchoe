import { Nav } from 'react-bootstrap';
import Saved from './Saved'

const SidebarMenu = () => {
    return (
        <div className='fixed-top bg-light hidden' style={{ width: 100, height: '100vh', overflowY: 'auto', marginTop: '3rem' }}>
            <Nav
                className='justify-content-center'
            >
                <Saved />
            </Nav>
        </div>
    )
}

export default SidebarMenu