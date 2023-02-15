import { Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import styled from "styled-components";
import { addNote, getNotes } from "../utils/api/note";
import ModalSubmit from "./ModalSubmit";
import { Button, Col, Row } from "react-bootstrap";
import { Plus } from 'react-bootstrap-icons';

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
`;

const DraggableElement = ({ prefix, panelId }) => {
    const [notes, setNotes] = useState([]);
    const [show, setShow] = useState(false);

    const handleAddNoteClick = () => 
        setShow(!show);

    useEffect(() => {
        getNotes()
        .then((response) => setNotes(response.data));
    }, []);

    return (
        <DroppableStyles>
            <Row xs={2}>
                <Col >
                    <ColumnHeader>{prefix}</ColumnHeader>
                </Col>
                <Col xs={3}>
                    <Button variant="light" onClick={handleAddNoteClick} ><Plus/></Button>
                </Col>
            </Row>
            {
                show && <ModalSubmit 
                    title={"New Note"} 
                    functionHandler={addNote}
                    panelId={panelId}
                    type={"Note"}
                    placeholder={"Write note here"}
                />
            }
            <Droppable droppableId={`${prefix}`}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {notes?.map((note, index) => (
                            panelId == note.panelId && <ListItem key={note.noteId} note={note} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DroppableStyles>
    )
};

export default DraggableElement;