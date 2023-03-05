import { Nav, Row } from "react-bootstrap";
import { Collection, House, Database, Eye, Clipboard, Bookmark, ChatDots, Person, PersonWorkspace, Newspaper, Robot } from 'react-bootstrap-icons';

const SidebarOverlay = ({ userId }) => {

    return (
        <div style={{ zIndex: 7, color: "black", width: 200, height: '100vh', overflowY: 'auto', marginTop: '3rem' }} className='sidebaroverlay fixed-top bg-light'>
            <Row 
            className="mw-100 pt-3"  
            xs={1} 
            >
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Person className='' color="black" size={20}/>
                    <Nav.Link href="/profile" className="ms-4">
                        Workspace
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <House className='' color="black" size={20}/>
                    <Nav.Link href={`/page/${userId}`} className="ms-4">
                        Profile
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Robot className='' color="black" size={20} />
                    <Nav.Link href="/chats" className="ms-4">
                        Artoo
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <ChatDots className='' color="black" size={20} />
                    <Nav.Link href="/messages" className="ms-4">
                        Messages
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <PersonWorkspace className='' color="black" size={20}/>
                    <Nav.Link href="/dashboard" className="ms-4">
                        Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Clipboard className='' color="black" size={20} />
                    <Nav.Link href="/projects" className="ms-4">
                        Projects
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Eye className='' color="black" size={20}/>
                    <Nav.Link href="/explore" className="ms-4">
                        Explore
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Database className='' color="black" size={20}/>
                    <Nav.Link href="/communities" className="ms-4">
                        Communities
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Collection className='' color="black" size={20}/>
                    <Nav.Link href="/posts" className="ms-4">
                        Posts
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Bookmark className='' color="black" size={20}/>
                    <Nav.Link href="/saved" className="ms-4">
                        Saves
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                    <Newspaper className='' color="black" size={20}/>
                    <Nav.Link href="/news" className="ms-4">
                        News
                    </Nav.Link>
                </Nav.Item >
            </Row>
        </div>
    )
}

export default SidebarOverlay;