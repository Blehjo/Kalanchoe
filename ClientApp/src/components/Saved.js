import { Fragment, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Bookmark, ChatDots, Clipboard, Collection, Database, Eye, House, Newspaper, Person, PersonWorkspace, Robot } from 'react-bootstrap-icons';
import { getUser } from '../utils/api/userDocument';

const Saved = () => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        getUser()
        .then((response) => setUserId(response.data.userId));
    }, []);

    return (
        <Fragment>
            <Nav.Link href={userId != null ? "/profile" : "/authentication"}>
                <Person className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href={userId != null ? `/page/${userId}` : "/authentication"}>
                <House className='mt-4' color="black" size={40}/>
            </Nav.Link>
            <Nav.Link href="/artoo">
                <Robot className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href={userId != null ? "/messages" : "/authentication"}>
                <ChatDots className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/dashboard">
                <PersonWorkspace className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href={userId != null ? "/projects" : "/authentication"}>
                <Clipboard className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/explore">
                <Eye className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/communities">
                <Database className='mt-4' action='true' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href={userId != null ? "/saved" : "/authentication"}>
                <Bookmark className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/news">
                <Newspaper className='mt-4' color="black" size={40} />
            </Nav.Link>
            <Nav.Link href="/posts">
                <Collection className='mt-4' color="black" size={40} />
            </Nav.Link>
        </Fragment>
    )
}

export default Saved;