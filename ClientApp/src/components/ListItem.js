import { Draggable } from "react-beautiful-dnd";
import styled, { css } from "styled-components";
import { Button, Col, Row } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';
import ModalDelete from "./ModalDelete";
import { deleteNote } from "../utils/api/note";
import { useState } from "react";

const CardHeader = styled.div`
  font-weight: 500;
`;

const Author = styled.div`
  display: flex;
  align-notes: center;
`;
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-notes: center;
`;

const DragNote = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

const Listnote = ({ note, index }) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => 
    setShow(!show);

  return (
    <Draggable draggableId={note.noteId.toString()} index={index}>
      {(provided, snapshot) => {
          return (
              <DragNote
                  ref={provided.innerRef}
                  snapshot={snapshot}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
              >
                <Row xs={2}>
                  <Col>
                    <CardHeader>{note.noteValue}</CardHeader>
                  </Col>
                  <Col>
                    <Button variant="light" onClick={handleClose}><XCircle/></Button>
                  </Col>
                </Row>
                  <CardFooter>
                      <span>{note.dateCreated}</span>
                      {/* <Author>
                        {note.noteId}
                      </Author> */}
                  </CardFooter>
                  {show && <ModalDelete 
                    functionHandler={deleteNote}
                    id={note.noteId}
                  />}
              </DragNote>
          );
      }}
    </Draggable>
  );
};

export default Listnote;