import { Fragment, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { XCircle, Plus, ArrowRight } from 'react-bootstrap-icons';
import ModalSubmit from "./ModalSubmit";
import { useParams, useNavigate } from "react-router";
import { getChannels, addChannel } from "../utils/api/channel";

const Channels = () => {
    const navigate = useNavigate();
    const [channels, setChannels] = useState([]);
    const [channelId, setChannelId] = useState(null);
    const [show, setShow] = useState(false);
    const { id } = useParams();

    const handleClickEvent = (event) => {
        setChannelId(event.target.id)
        navigate(`/community/${id}/${channelId}`);
    }

    const handleShow = () =>
        setShow(!show);

    useEffect(() => {
        getChannels()
        .then((response) => setChannels(response.data));
    }, [])

    return (
        <Fragment>
            <Row>
                    
                <Col>
                    <div style={{ height: '94vh', overflowY: 'auto', background: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center' }}>
                <Row xs={2}>
                <Col xs={9}>
                    <h1>Channels</h1>
                </Col>
                <Col xs={1}>
                    <Button style={{ marginTop: '.5rem' }} variant="light" type="submit" onClick={handleShow}><Plus/></Button>
                </Col>
                </Row>
                    {channels?.map(({ description, channelId }) => (
                        <div 
                        onClick={handleClickEvent}
                        style={{ cursor: 'pointer', background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} 
                        key={channelId}
                        id={channelId}
                        >
                            {description}
                        </div>
                    ))}
                </div>
                </Col>
            </Row>
            {
                show && 
                <ModalSubmit
                    title={"New Channel"}
                    functionHandler={addChannel}
                    panelId={id}
                    type={"Channel"}
                    placeholder={"Channel name"}
                />
            }
        </Fragment>
    )
}

export default Channels;