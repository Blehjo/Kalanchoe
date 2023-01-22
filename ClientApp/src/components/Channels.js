import { ChannelList } from "@pubnub/react-chat-components";
import { Fragment, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { XCircle, Plus, ArrowRight } from 'react-bootstrap-icons';
import ModalSubmit from "./ModalSubmit";
import { useParams } from "react-router";
import { getChannels, addChannel } from "../utils/api/channel";

const Channels = () => {
    const [channels, setChannels] = useState([]);
    const [show, setShow] = useState(false);
    const { id } = useParams();

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
                    <h1>Channels</h1>
                </Col>
                <Col>
                    <Button variant="light" type="submit" onClick={handleShow}><Plus/></Button>
                </Col>
            </Row>
            {
                show && 
                <ModalSubmit
                    title={"New Channel"}
                    functionHandler={addChannel}
                    id={id}
                    type={"channel"}
                    placeholder={"Channel name"}
                />
            }
            {/* {
                channels?.length > 0 &&
                <ChannelList
                    channels={
                        channels?.map(({ channelId, communityId, description, dateCreated }) => ({
                            "name": {description},
                            // "custom": {
                            //     "profileUrl": "https://www.gravatar.com/avatar/149e60f311749f2a7c6515f7b34?s=256&d=identicon"
                            // },
                            "description": {description},
                        //     "eTag": "AbOx6N+6vu3zoAE",
                            "id": {channelId},
                            "updated": {dateCreated}
                        }))
                    }
                />
            } */}
        </Fragment>
    )
}

export default Channels;