import { Fragment, useEffect, useState } from "react";
import { Row, Col, Form, Card } from 'react-bootstrap';
import axios from 'axios';

const News = () => {
    const [results, setResults] = useState([]);
    const [objects, setObjects] = useState([]);
    const [searchField, setSearchField] = useState("");
    const baseUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
    const objectUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

    const handleSearchFieldChange = (event) => {
        setSearchField(event.target.value);
    }

    const search = () => {
        const doTask = async (objectId) => {
            await axios.get(objectUrl + objectId)
                .then((response) => setResults(response.data.primaryImage));
        }
        
        objects.splice(0, 10).map((object) => doTask(object));
    }

    const artSearch = async (event) => {
        event.preventDefault();
        await axios.get(baseUrl + searchField)
            .then((response) => setObjects(response.data.objectIDs));
        search();
    }

    return (
        <Fragment>
            
            <Row xs={2} style={{ justifyContent: 'center' }}>
                <Col xs={2}><h1>News</h1></Col>
                <Col xs={4}>
                    <Form style={{ margin: '.2rem' }} onSubmit={artSearch}> 
                        <Form.Group>
                            <Form.Control onChange={handleSearchFieldChange} value={searchField} type="text" placeholder="Search for art" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                {results?.map((image) => (
                    <Card.Img src={image} alt={image} />
                ))}
                </Col>
            </Row>
        </Fragment >
    );
}

export default News;

