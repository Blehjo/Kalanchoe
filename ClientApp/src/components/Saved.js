import { Nav } from 'react-bootstrap';
import { Collection, Router, Globe, House, Database, Eye, Clipboard, Bookmark, Speedometer2, ArrowRepeat, ChatDots, Person, Messenger, PersonWorkspace, Newspaper, Robot } from 'react-bootstrap-icons';
import { Fragment } from 'react';


const Saved = () => {
    return (
        <Fragment>
            <Nav.Link href="/profile">
                <Person className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/chats">
                <Robot className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/chats">
                <ChatDots className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/dashboard">
                <PersonWorkspace className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/messages">
                <Messenger className='mt-4' action='true' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/projects">
                <Clipboard className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/explore">
                <Eye className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/communities">
                <Database className='mt-4' action='true' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/posts">
                <Collection className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/saved">
                <Bookmark className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/news">
                <Newspaper className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/search">
                <Globe className='mt-4' color="black" size={40} />
            </Nav.Link>
        </Fragment>
    )
}

export default Saved;