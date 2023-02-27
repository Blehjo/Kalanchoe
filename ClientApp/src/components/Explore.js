import { Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";

const contentArray = [
    {
        type: "Communities",
        path: "/communities",
        media_location_url: "https://i.imgur.com/BEIcwEa.jpg",
        id: 1
    },
    {
        type: "Dilemmas",
        path: "/dilemmas",
        media_location_url: "https://i.imgur.com/ijeK4AL.jpg",
        id: 2
    },
    {
        type: "Profiles",
        path: "/profiles",
        media_location_url: "https://i.imgur.com/HxNGjRH.jpg",
        id: 3
    },
    {
        type: "Posts",
        path: "/posts",
        media_location_url: "https://i.imgur.com/7Nxg9uE.jpg",
        id: 4
    },
    {
        type: "Chats",
        path: "/chatpage",
        media_location_url: "https://i.imgur.com/WsUbtP6.jpg",
        id: 5
    },
    {
        type: "News",
        path: "/news",
        media_location_url: "https://i.imgur.com/ceyA482.jpg",
        id: 6
    }
]

const Explore = () => {
    return(
        <Fragment>
            <h1 style={{ color: 'black' }}>Explore</h1>
            <Row xs={1} md={2} key="groups">
                {contentArray?.map(({ id, media_location_url, type, path }) => (
                    <Col style={{ marginBottom: '1.5rem' }} key={id}>
                        <Card.Link href={`${path}`}>
                            <Card
                                style={{ color: 'white' }}
                                className="bg-dark"
                                key={id}
                            >
                                <Card.Img style={{ position: 'relative', borderRadius: ".5rem", width: "100%", height: "25rem", objectFit: "cover" }} src={media_location_url} alt={type} />
                                <Card.ImgOverlay >
                                    <div style={{ position: 'absolute', left: '50%', top: '50%', borderRadius: '1rem', transform: 'translate(-50%, -50%)' }} className="text-white">
                                        <Card.Title style={{ fontSize: '500%' }}>{type}</Card.Title>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Card.Link>
                    </Col>
                ))}
            </Row>
        </Fragment>
    );
}

export default Explore;