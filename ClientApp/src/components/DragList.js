import { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import DraggableElement from "./DraggableElement";
import { getUserPanels } from "../utils/api/panel";
import { selectPanelItems } from "../store/panel/panel.selector";
import { panelFetchAllStart } from "../store/panel/panel.action";
import { Col, Row } from "react-bootstrap";

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
    const dispatch = useDispatch();
    const panels = useSelector(selectPanelItems);

    useEffect(() => {
        getUserPanels()
        .then((response) => dispatch(panelFetchAllStart(response.data)));
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
        
        dispatch(panelFetchAllStart(listCopy));
    };
    
    return (
        <DragDropContextContainer>
            <DragDropContext onDragEnd={onDragEnd}>
                <ListGrid>
                    <Row xs={1} md={3}>
                    {panels.length > 0 && panels?.map(({panelId, title}) => (
                        <Col xs={12} md={4}>
                        <DraggableElement
                        title={title}
                        key={panelId}
                        panelId={panelId}
                        prefix={title}
                        />
                        </Col>
                        ))}
                    </Row>
                </ListGrid>
            </DragDropContext>
        </DragDropContextContainer>
    );
}

export default DragList;