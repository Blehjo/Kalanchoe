import { Col } from 'react-bootstrap';
import { Collection, Router, Globe, House, Database, Eye, Clipboard, Bookmark, Speedometer2, ArrowRepeat, ChatDots, Person, Messenger, PersonWorkspace } from 'react-bootstrap-icons';
import { Fragment} from 'react';



const Toolbar = () => {
    // Function that creates a new panel
    const handlePanelClick = () => {

    }
    
    // Function that creates a new note
    const handleNoteClick = () => {
        
    }

    // Function that calls Artoo
    const handleArtooClick = () => {
        
    }

    // Function that calls Chatbot
    const handleChatBotClick = () => {
        
    }

    // Function that calls search bar for art
    const handleSearchBarClick = () => {
        
    }

    // Function that calls search bar for poetry
    const handlePoetryClick = () => {
        
    }

    // Function that shows tasks
    const handleTasksClick = () => {
        
    }

    // Function that resets panel
    const handleReset = () => {

    }

    // Function that shows messages
    const showMessages = () => {

    }

    // Function that shows communities
    const showCommunities = () => {

    }

    return (
        <Fragment> 
            <Col onClick={handlePanelClick}>
                <Person className='mx-2' color="black" size={40} />
            </Col>
            <Col onClick={handleNoteClick}>
                <ChatDots className='mx-2' color="black" size={40} />
            </Col>
            <Col onClick={handleArtooClick}>
                <PersonWorkspace className='mx-2' color="black" size={40} />
            </Col>
            <Col onClick={handleChatBotClick}>
                <Messenger className='mx-2' action='true' color="black" size={40} />
            </Col>
            <Col onClick={handleSearchBarClick}>
                <Clipboard className='mx-2' color="black" size={40} />
            </Col>
            <Col onClick={handlePoetryClick}>
                <Eye className='mx-2' color="black" size={40} />
            </Col>
            <Col onClick={handleTasksClick}>
                <Database className='mx-2' action='true' color="black" size={40} />
            </Col>
            <Col onClick={handleReset}>
                <Collection className='mx-2' color="black" size={40} />
            </Col>
            <Col onClick={showMessages}>
                <Bookmark className='mx-2' color="black" size={40} />
            </Col>
            {/* If user is in communities, show this icon */}
            <Col onClick={showCommunities}>
                <Globe className='mx-2' color="black" size={40} />
            </Col>
        </Fragment>
    )
}

export default Toolbar;