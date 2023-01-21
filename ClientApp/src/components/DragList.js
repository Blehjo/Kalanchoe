import { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { getPanels } from "../utils/api/panel";

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
        getPanels()
        .then((response) => setPanels(response.data));
    }, []);

    const onDragEnd = (result) => {
        console.log("result: ", result)
        if (!result.destination) {
            return;
        }
        const listCopy = { ...panels };
        console.log("listCopy 1: ", listCopy[0]);
        console.log("listCopy 2: ", listCopy);
        
        const sourceList = listCopy[result.source.droppableId];
        console.log("sourceList: ", sourceList)
        const [removedElement, newSourceList] = removeFromList(
            sourceList,
            result.source.index
        );
        listCopy[result.source.droppableId] = newSourceList;
        const destinationList = listCopy[result.destination.droppableId];
            console.log("destinationList: ", destinationList);
        listCopy[result.destination.droppableId] = addToList(
            destinationList,
            result.destination.index,
            removedElement
        );
            console.log("listCopy 3: ", listCopy[result.destination.droppableId]);
        
        setPanels(listCopy);
        console.log("panels Final step: ", panels);
    };
    
    return (
        <DragDropContextContainer>
            <DragDropContext onDragEnd={onDragEnd}>
                <ListGrid>
                    {panels?.map(({panelId, title}) => (
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