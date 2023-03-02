﻿import { Fragment, useEffect, useState } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { selectPosts } from "../store/post/post.selector";
import { postFetchAllStart } from "../store/post/post.action";

const News = () => {
    const dispatch = useDispatch();
    const results = useSelector(selectPosts);
    const [searchField, setSearchField] = useState("");
    const objectArray = [];
    const baseUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
    const objectUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

    const handleSearchFieldChange = (event) => {
        setSearchField(event.target.value);
    }

    const doTask = async (objectId) => {
        await axios.get(objectUrl + objectId)
        .then((response) => response.data.primaryImage.startsWith("https") && objectArray.push(response.data.primaryImage));
    }
    
    const search = async (objects) => {
        await objects.splice(0, 200).map((objectId) => doTask(objectId));
        dispatch(postFetchAllStart(objectArray));
        setTimeout(() => setSearchField(""), 1000);
    }
    
    const artSearch = async (event) => {
        event.preventDefault();
        await axios.get(baseUrl + searchField)
        .then((response) => search(response.data.objectIDs));
    }
    
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Fragment>
            <Row key="image" xs={1} style={{ justifyContent: 'center', marginTop: '5rem' }}>
                <Col xs={4}>
                    <img style={{ objectFit: 'cover', width: '25rem', height: '140px', borderRadius: '1rem' }} src="https://i.imgur.com/20LpIoh.jpg"/>
                </Col>
            </Row>
            <Row key="searchbar" xs={1} style={{ justifyContent: 'center', marginTop: '2rem' }}>
                <Col xs={4}>
                    <Form style={{ margin: '.2rem' }} onSubmit={artSearch}> 
                        <Form.Group>
                            <Form.Control style={{ textAlign: 'center' }} onChange={handleSearchFieldChange} value={searchField} type="text" placeholder="Search for art" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row key="results" style={{ marginTop: '2rem' }} xs={4}>
                <Col xs={12}>
                {results?.map((image) => (
                    <img key={results[image]} onClick={() => openInNewTab(image)} style={{ borderRadius: '1rem', margin: '.1rem', cursor: 'pointer', height: '20rem', width: '20rem', objectFit: 'cover' }} src={image} alt={image} />
                ))}
                </Col>
            </Row>
        </Fragment >
    );
}

export default News;

