import { Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import styled from "styled-components";
import { getNotes } from "../utils/api/note";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
`;


const DraggableElement = ({ prefix }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes()
        .then((response) => setNotes(response.data));
    }, []);

    return (
        <DroppableStyles>
            <ColumnHeader>{prefix}</ColumnHeader>
            <Droppable droppableId={`${prefix}`}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {/* {notes?.map((note, index) => (
                            <ListItem key={note.id} item={note} index={index} />
                        ))} */}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DroppableStyles>
    )
};

export default DraggableElement;