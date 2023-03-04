import { Nav } from 'react-bootstrap';
import Saved from './Saved';
import Cookie from "js-cookie";

const SidebarMenu = () => {
    const userId = Cookie.get("user");

    return (
        <div className='fixed-top bg-light hidden' style={{ width: 100, height: '100vh', overflowY: 'auto', marginTop: '3rem' }}>
            <Nav
                className='justify-content-center'
            >
                <Saved userId={userId}/>
            </Nav>
        </div>
    )
}

export default SidebarMenu