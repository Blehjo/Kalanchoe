import { Nav, Navbar } from 'react-bootstrap';
import { Collection, Router, Globe, House, Database, Eye, Clipboard, Bookmark, Speedometer2, ArrowRepeat, ChatDots, Person, Messenger, PersonWorkspace } from 'react-bootstrap-icons';
import { Fragment } from 'react';


const Toolbar = () => {
    return (
        <Fragment>
            
            <Nav.Link href="/profile">
                <Person className='mx-2' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/chats">
                <ChatDots className='mx-2' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/dashboard">
                <PersonWorkspace className='mx-2' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/messages">
                <Messenger className='mx-2' action='true' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/projects">
                <Clipboard className='mx-2' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/explore">
                <Eye className='mx-2' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/communities">
                <Database className='mx-2' action='true' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/posts">
                <Collection className='mx-2' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/saved">
                <Bookmark className='mx-2' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/search">
                <Globe className='mx-2' color="black" size={40} />
            </Nav.Link>
           
        </Fragment>
    )
}

export default Toolbar;