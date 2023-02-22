import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectPanelItems } from "../store/panel/panel.selector";
import { panelFetchAllStart } from "../store/panel/panel.action";
import { deletePanel, editPanel, getPanels } from "../utils/api/panel";
import { selectCurrentUser } from "../store/user/user.selector";

const DilemmasPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);
    const panels = useSelector(selectPanelItems);

    const clearPost = async (event) => {
        const id = event.target.id;
        deletePanel(id);
    }

    const updatePost = async (event) => {
        const id = event.target.id;
        editPanel();
    }

    const goToPost = async (event) => {
        const id = event.target.id;
        navigate(`/dilemmas/${id}`);
    }

    useEffect(() => {
        getPanels()
        .then((response) => dispatch(panelFetchAllStart(response.data)));
    }, []);

    return (
        <Row xl={4} style={{ marginTop: '1rem' }}>
            {
                panels?.length > 0 && panels?.map(({ title, panelId, userId }) => (
                    <Col onClick={goToPost} key={panelId}>
                        <Card.Title style={{ margin: 'auto' }}>{title}</Card.Title>
                        <Button variant="light" onClick={goToPost} as="input" type="button" value="Go to Post" id={panelId}/> 
                    </Col>
                ))
            }
        </Row>
    )
}

export default DilemmasPage;