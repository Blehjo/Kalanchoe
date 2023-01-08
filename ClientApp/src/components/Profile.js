import { Fragment, useCallback, useState, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Col, Row, Navbar } from 'react-bootstrap';
import { ArrowDownShort } from 'react-bootstrap-icons';
import * as Quill from 'quill';
 
import Toolbar from './Toolbar';

import { ToolContext } from '../contexts/tool.context';

const Profile = () => {
    const { isToolOpen, setIsToolOpen } = useContext(ToolContext);

    const toggleIsToolOpen = () => setIsToolOpen(!isToolOpen);

    // using useCallback is optional
    const onBeforeCapture = useCallback(() => {
        /*...*/
    }, []);
    const onBeforeDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragUpdate = useCallback(() => {
        /*...*/
    }, []);
    const onDragEnd = useCallback(() => {
        // the only one that is required
    }, []);

    return(
        <Fragment>
            <Row style={{ width: '100%', justifyContent: 'center' }} className="sticky-top">
                {isToolOpen ?
                    <Col xs={6} sm={10}>
                    <Navbar style={{ justifyContent: 'space-evenly' }}>
                        <Toolbar />
                    </Navbar>
                    </Col>
                    :
                    <Col xs={6} sm={10} style={{ cursor: 'pointer', textAlign: 'center' }} onClick={toggleIsToolOpen}>
                        <ArrowDownShort className='mx-2' color="black" size={15} />
                    </Col>
                }
            </Row>
            <Row>
                <h1>Studio</h1>
                
                {/*<DragDropContext
                    onBeforeCapture={onBeforeCapture}
                    onBeforeDragStart={onBeforeDragStart}
                    onDragStart={onDragStart}
                    onDragUpdate={onDragUpdate}
                    onDragEnd={onDragEnd}
                >
                
                </DragDropContext>*/}
            </Row>
            <Row>
                <Col>
                    
                </Col>
            </Row>
        </Fragment>
    );
}

export default Profile;

{/* export default Profile;

// fake data generator
const getItems = (count) => Array.from({length: count}, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
}));
  
  // a little function to help us with reordering the result
const reorder =  (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};
  
const grid = 8;
  
const getItemStyle = (draggableStyle, isDragging) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});
  
const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 350
});
        
export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: getItems(10)
        }
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    
    onDragEnd (result) {
        // dropped outside the list
        if(!result.destination) {
            return; 
        }
        
        const items = reorder(
            this.state.items, 
            result.source.index, 
            result.destination.index
        );
        
        this.setState({
            items
        });
    }
    
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
       return (
        <Fragment>
        <h1>Studio</h1>
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                    <div 
                        ref={provided.innerRef} 
                        style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                    >
                        {this.state.items.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                        >
                            {(provided, snapshot) => (
                            <div>
                                <div
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                style={getItemStyle(
                                    provided.draggableProps.style,
                                    snapshot.isDragging
                                    )}
                                >
                                <textarea/>
                                {item.content}
                                </div>
                                {provided.placeholder}
                            </div>
                            )}
                        </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
        </Fragment>
       ); 
    }
} */}
