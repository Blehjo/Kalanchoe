import { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { getPanels } from "../utils/api/panel";
import { getNotes } from "../utils/api/note";

const DragDropContextContainer = styled.div`
  padding: 20px;
  border-radius: 6px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

// fake data generator
const getItems = (count, prefix) =>
    Array.from({ length: count }, (v, k) => k).map((k) => {
        const randomId = Math.floor(Math.random() * 1000);
        return {
            id: `item-${randomId}`,
            prefix,
            content: `item ${randomId}`
        };
    });

const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
};

const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
};

const lists = ["todo", "inProgress", "done"];

function DragList() {
    const [panels, setPanels] = useState([]);
    const [notes, setNotes] = useState([]);
    
    const generateLists = () =>
        lists.reduce(
            (acc, listKey) => ({ ...acc, [listKey]: getItems(10, listKey) }),
            {}
        );
        
    const [elements, setElements] = useState(generateLists());

    useEffect(() => {
        setElements(generateLists());
        getPanels()
        .then((response) => setPanels(response.data));
        getNotes()
        .then((response) => setNotes(response.data));
    }, []);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const listCopy = { ...elements };

        const sourceList = listCopy[result.source.droppableId];
        const [removedElement, newSourceList] = removeFromList(
            sourceList,
            result.source.index
        );
        listCopy[result.source.droppableId] = newSourceList;
        const destinationList = listCopy[result.destination.droppableId];
        listCopy[result.destination.droppableId] = addToList(
            destinationList,
            result.destination.index,
            removedElement
        );

        setElements(listCopy);
    };
    
    return (
        <DragDropContextContainer>
            <DragDropContext onDragEnd={onDragEnd}>
                <ListGrid>
                    {panels?.map(({panelId, title}) => (
                        <>
                            <DraggableElement
                                title={title}
                                key={panelId}
                                notes={panels}
                                prefix={title}
                            />
                        </>
                    ))}
                </ListGrid>
            </DragDropContext>
        </DragDropContextContainer>
    );
}

export default DragList;