import { Fragment, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { XCircle, Plus, ArrowRight } from 'react-bootstrap-icons';
import ModalSubmit from "./ModalSubmit";
import { useParams, useNavigate } from "react-router";
import { getChannels, addChannel, getCommunityChannels } from "../utils/api/channel";
import { useDispatch, useSelector } from "react-redux";
import { channelFetchAllStart } from "../store/channel/channel.action";
import { selectChannelItems } from "../store/channel/channel.selector";

const Channels = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const channels = useSelector(selectChannelItems);
    const [show, setShow] = useState(false);
    const { id } = useParams();
    console.log(id)

    const handleClickEvent = (event) => {
        navigate(`/community/${id}/${event.target.id}`);
    }

    const handleShow = () =>
        setShow(!show);

    useEffect(() => {
        getCommunityChannels(id)
        .then((response) => dispatch(channelFetchAllStart(response.data)));
    }, [])

    return (
        <Fragment>
            <Row>     
                <Col>
                <div className="channels" style={{ overflowY: 'auto', background: '#d4d4d4', borderRadius: '.2rem', textAlign: 'center' }}>
                <Row xs={2}>
                    <Col xs={9}>
                        <h1>Channels</h1>
                    </Col>
                    <Col xs={1}>
                        <Button style={{ marginTop: '.2rem' }} variant="light" type="submit" onClick={handleShow}><Plus/></Button>
                    </Col>
                </Row>
                <Col>
                    {channels?.map(({ description, channelId }) => (
                        <div 
                        className="channelslist"
                        onClick={handleClickEvent}
                        style={{ cursor: 'pointer', background: 'white', margin: '1rem', padding: '.5rem', borderRadius: '.2rem' }} 
                        key={channelId}
                        id={channelId}
                        >
                            {description}
                        </div>
                    ))}
                </Col>
                </div>
                </Col>
            </Row>
            {
                show && 
                <ModalSubmit
                    title={"New Channel"}
                    functionHandler={addChannel}
                    id={id}
                    type={"Channel"}
                    placeholder={"Channel name"}
                />
            }
        </Fragment>
    )
}

export default Channels;