import { Fragment } from "react";
import { Row, Col, Card } from 'react-bootstrap';

const LandingPage = () => {
    return (
        <Fragment>
            <Row xs={1} md={2} key="groups">
                <div style={{ height: 'auto', borderRadius: '.5rem', marginBottom: '1rem' }}>
                <Col>
                    <p style={{ margin: '.5rem', marginTop: '2rem' }}>Kalanchoe AI is an application developed to change the mindset of the solo artist. Independent artists no longer have to work long hours doing the work of a group through Kalanchoe AI. <br></br><br></br>Create a plan and use your handy, Artoo robot, to look up vital information, come up with inspiration and blueprints, and even create code for your portfolio website.</p>
                </Col>
                </div>
                <Col style={{ marginBottom: '1.5rem' }} key="id">
                    <Card.Link  href="/explore">
                        <Card
                            style={{ color: 'white' }}
                            className="explorepanel bg-dark"
                            key="id"
                        >
                            <Card.Img className="explorepanel" style={{ position: 'relative', borderRadius: ".5rem", width: "100%", objectFit: "cover" }} src="https://i.imgur.com/20LpIoh.jpg" alt="girlwithhugeleaf" />
                            <Card.ImgOverlay >
                                <div style={{ position: 'absolute', left: '50%', top: '50%', borderRadius: '1rem', transform: 'translate(-50%, -50%)' }} className="text-white">
                                    <Card.Title id='explorefont'>KALANCHOE</Card.Title>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Card.Link>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'space-evenly', background: 'black', marginBottom: '1rem', color: 'white', paddingBottom: '1rem', textAlign: 'center' }} xs={1} md={2}>
                <Col md={6}>
                    <h1>Communities</h1>
                    <a style={{ textDecoration: 'none', color: 'white' }} href="/communities">
                    <p>Give back to the community and open channels.</p>
                    <img style={{ borderRadius: '.5rem', objectFit: 'cover', height: '20rem', width: '20rem' }} src="https://media.istockphoto.com/id/1357830750/vector/geometric-illustration-of-multi-coloured-human-figures.jpg?s=612x612&w=0&k=20&c=2uvkAa8B9pyBcMbMUoE6zQVXPrNAz8Tdysdfq8G3oKM="/>
                    </a>
                </Col>
                <Col md={6}>
                    <h1>Dilemmas</h1>
                    <a style={{ textDecoration: 'none', color: 'white' }} href="/dilemmas">
                    <p>Plan. Execute. Deliver.</p>
                    <img style={{ borderRadius: '.5rem', objectFit: 'cover', height: '20rem', width: '20rem' }} src="https://cdn.pixabay.com/photo/2016/05/10/21/17/angel-1384694_960_720.png"/>
                    </a>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'space-evenly', paddingBottom: '1rem', textAlign: 'center' }} xs={1} md={2}>
                <Col style={{ marginBottom: '1.5rem' }} key="id">
                    <Card.Link  href="/artoo">
                        <Card
                            style={{ color: 'white' }}
                            className="explorepanel bg-dark"
                            key="id"
                        >
                            <Card.Img className="explorepanel" style={{ position: 'relative', borderRadius: ".5rem", width: "100%", objectFit: "none" }} src="https://static.tweaktown.com/news/9/0/90038_012_microsofts-new-ai-can-clone-anyones-voice-with-just-3-second-audio-sample_full.jpg" alt="artificialintelligence" />
                            <Card.ImgOverlay >
                                <div style={{ position: 'absolute', left: '50%', top: '50%', borderRadius: '1rem', transform: 'translate(-50%, -50%)' }} className="text-white">
                                    <Card.Title id='explorefont'>ARTOO</Card.Title>
                                    <p>Find inspiration. Satisfy your curiosity.</p>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Card.Link>
                </Col>
                <Col style={{ marginBottom: '1.5rem' }} key="id">
                    <Card.Link  href="/posts">
                        <Card
                            style={{ color: 'white' }}
                            className="explorepanel bg-dark"
                            key="id"
                        >
                            <Card.Img className="explorepanel" style={{ position: 'relative', borderRadius: ".5rem", width: "100%", objectFit: "cover" }} src="https://i.imgur.com/9Il1Fbi.jpg" alt="artificialintelligence" />
                            <Card.ImgOverlay >
                                <div style={{ position: 'absolute', left: '50%', top: '50%', borderRadius: '1rem', transform: 'translate(-50%, -50%)' }} className="text-white">
                                    <Card.Title id='explorefont'>ART</Card.Title>
                                    <p>Share your art with the community.</p>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Card.Link>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'space-evenly', background: 'white', marginBottom: '2rem', textAlign: 'center' }} xs={1} md={2}>
                <Col md={6}>
                    <h1>Chats</h1>
                    <a style={{ textDecoration: 'none', color: 'black' }} href="/chatpage">
                    <p>See how the community uses Artoo.</p>
                    <img style={{ borderRadius: '.5rem', objectFit: 'cover', height: '20rem', width: '20rem' }} src="https://influencermarketinghub.com/wp-content/uploads/2022/10/AI-Graphic-Design-Tools.png"/>
                    </a>
                </Col>
                <Col md={6}>
                    <h1>News</h1>
                    <a style={{ textDecoration: 'none', color: 'black' }} href="/news">
                    <p >Stay up to date on Art.</p>
                    <img style={{ borderRadius: '.5rem', objectFit: 'cover', height: '20rem', width: '20rem' }} src="https://cdn.smarthistory.org/wp-content/uploads/2022/08/49352009067_23b4235746_o-scaled.jpg"/>
                    </a>
                </Col>
            </Row>
        </Fragment>
    );
}

export default LandingPage;
