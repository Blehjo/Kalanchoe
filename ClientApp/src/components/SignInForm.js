import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart } from "../store/user/user.action";

const SignInForm = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const resetFormFields = () => {
        setUsername('');
        setPassword('');
    }

    const signInWithReact = () => {
        dispatch(emailSignInStart)(username, password);
        // await axios({
        //     method: 'post',
        //     url: "https://localhost:7028/api/users/authenticate",
        //     data: {
        //         Username: username,
        //         Password: password
        //     },
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     withCredentials: true
        // })
        // .then((response) => {
        //     console.log(response);
        //     return response.data;
        // });
    }

    const handleUsernameChange = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
         event.preventDefault();

        // try {
            // signInWithReact();
            dispatch(emailSignInStart(username, password));
            resetFormFields();
            navigate('/profile');
        // } catch (error) {
        //     switch (error.code) {
        //         case 'auth/wrong-password':
        //             alert('incorrect password for email');
        //             break;
        //         case 'auth/user-not-found':
        //             alert('no user associated with this email');
        //             break;
        //         default:
        //             console.log(error);
        //     }
        // }
    }

    return (
        <Row style={{ justifyContent: 'center', color: 'black' }} xs={1}>
            <Col>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>
                <Form onSubmit={handleSubmit} style={{ color: 'black', marginTop: '1rem' }}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="username"
                            name="username"
                            required
                            placeholder="Enter username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            onChange={handlePasswordChange}
                            name="password"
                            value={password}
                        />
                    </Form.Group>
                    <Row xs={1}>
                        <Col>
                            <Button variant="light" type="submit">Sign in</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default SignInForm;