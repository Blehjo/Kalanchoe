import { Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";

const contentArray = [
    {
        type: "Communities",
        path: "/communities",
        media_location_url: "https://otakuusamagazine.com/wp-content/uploads/2020/06/gits01.jpg",
        id: 1
    },
    {
        type: "Dilemmas",
        path: "/projects",
        media_location_url: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/07/Watch-Dogs-Legion-4-2-scaled.jpg",
        id: 2
    },
    {
        type: "Profiles",
        path: "/profiles",
        media_location_url: "https://i0.wp.com/learning2grow.org/wp-content/uploads/2020/10/neuromancer-gibson-web.jpg?resize=1000%2C600&ssl=1",
        id: 3
    },
    {
        type: "Posts",
        path: "/posts",
        media_location_url: "https://www.digitalturbine.com/wp-content/uploads/2022/07/HardcoreGamers-Blog-Header.webp",
        id: 4
    },
    {
        type: "Chats",
        path: "/chatpage",
        media_location_url: "https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/oyun/PSTER-oyun04-bioschock-infinite-1000x1000.jpg",
        id: 5
    },
    {
        type: "News",
        path: "/news",
        media_location_url: "https://d.newsweek.com/en/full/1944794/game-awards-2021-logo.jpg",
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