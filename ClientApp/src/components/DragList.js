import { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { getUserPanels } from "../utils/api/panel";

const DragDropContextContainer = styled.div`
  padding: 20px;
  border-radius: 6px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

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

function DragList() {
    const [panels, setPanels] = useState([]);

    useEffect(() => {
        getUserPanels()
        .then((response) => setPanels(response.data));
    }, []);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const listCopy = { ...panels };
        
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
        
        setPanels(listCopy);
    };
    
    return (
        <DragDropContextContainer>
            <DragDropContext onDragEnd={onDragEnd}>
                <ListGrid>
                    {panels.length > 0 && panels?.map(({panelId, title}) => (
                        <DraggableElement
                            title={title}
                            key={panelId}
                            panelId={panelId}
                            prefix={title}
                        />
                    ))}
                </ListGrid>
            </DragDropContext>
        </DragDropContextContainer>
    );
}

export default DragList;