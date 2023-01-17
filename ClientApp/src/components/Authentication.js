import { Fragment } from 'react';
import { useNavigate } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/user/user.selector';

const Authentication = () => {
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate();

    return (
        <Fragment>
            {
                currentUser ? (
                    navigate('/dashboard')
                ) : (
                        <Fragment>
                            <Row style={{ justifyContent: 'space-evenly' }} xs={2}>
                                <Col xs={5}>
                                    <SignInForm />
                                </Col>
                                <Col xs={5}>
                                    <SignUpForm />
                                </Col>
                            </Row>
                        </Fragment>
                    )
            }
        </Fragment>
    )
}

export default Authentication;