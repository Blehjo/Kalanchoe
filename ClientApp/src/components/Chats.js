import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { XCircle } from 'react-bootstrap-icons';
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { addChat, deleteChat, getChats } from "../utils/api/chat";
import { addChatComment, getSingleChatcomment } from "../utils/api/chatcomment";

const Chats = () => {
    return(
        <Row xs={2}>
      <Col sm={3}>
        <div style={{ height: '100vh', overflowY: 'auto', background: 'grey', borderRadius: '.2rem', textAlign: 'center' }}>
          <h1 style={{}}>Messages</h1>
          
        </div>
      </Col>
      <Col sm={9}>
        <Form style={{ background: 'grey', borderRadius: '.2rem' }} >
          <Row style={{ padding: '2rem' }}>
            <Col>
              <div style={{ height: '73vh', overflowY: 'auto', borderRadius: '.2rem' }}>
              
              </div>
            </Col>
          </Row>
          <Row style={{ padding: '2rem' }} xs={2}>
            <Col xs={10}>
              <Form.Group className="mb-3" controlId="request">
                <Form.Control type="text" name="request" placeholder="Send a message" />
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Button variant="light" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
    );
}

export default Chats;