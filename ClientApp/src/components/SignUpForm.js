import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emailSignInStart, signUpStart } from "../store/user/user.action";

const defaultFormFields = {
    username: '',
    about: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    firstName: '',
    lastName: '',
    profileImage: '',
    imageSource: null,
    imageFile: null
}

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { username, profileImage, about, emailAddress, password, confirmPassword, dateOfBirth, firstName, lastName, imageSource, imageFile } = formFields;
    const navigate = useNavigate();

    const resetForm = () => {
       setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setFormFields({
                    ...formFields,
                    imageFile,
                    imageSource: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setFormFields({
                ...formFields,
                imageFile: null,
                imageSource: null
            })
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('error message');
            return;
        }
        const formData = new FormData();
        formData.append('username', formFields.username);
        formData.append('emailAddress', formFields.emailAddress);
        formData.append('password', formFields.password);
        formData.append('profileImage', formFields.profileImage);
        formData.append('dateOfBirth', formFields.dateOfBirth);
        formData.append('firstName', formFields.firstName);
        formData.append('lastName', formFields.lastName);
        formData.append('about', formFields.about);
        formData.append('imageFile', formFields.imageFile);
        dispatch(signUpStart(formData));
        resetForm();
        navigate('/profile');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('error message');
            return;
        }
        dispatch(signUpStart(username, emailAddress, password, profileImage, dateOfBirth, firstName, lastName, about));
        resetForm();
        navigate('/profile');
    }

    return (
        <Row style={{ justifyContent: 'center', color: 'black' }} xs={1}>
            <Col>
                <h2>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
                <Form onSubmit={handleFormSubmit}>
                    <Row xs={2}>

                    <Form.Group className="col-6 mb-3" controlId="formUsername">
                        <Form.Control onChange={handleChange} name="username" value={formFields.username} as="input" type="input" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="col-6 mb-3" controlId="formemailAddress">
                        <Form.Control onChange={handleChange} name="emailAddress" value={formFields.emailAddress} as="input" type="emailAddress" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group className="col-6 mb-3" controlId="formFirstName">
                        <Form.Control onChange={handleChange} name="firstName" value={formFields.firstName} as="input" type="firstName" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="col-6 mb-3" controlId="formLastName">
                        <Form.Control onChange={handleChange} name="lastName" value={formFields.lastName} as="input" type="lastName" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group className="col-6 mb-3" controlId="formPassword">
                        <Form.Control onChange={handleChange} name="password" value={formFields.password} as="input" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="col-6 mb-3" controlId="formConfirmPassword">
                        <Form.Control onChange={handleChange} name="confirmPassword" value={formFields.confirmPassword} as="input" type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="col-6 mb-3" controlId="formDateOfBirth">
                        <Form.Control onChange={handleChange} name="dateOfBirth" value={formFields.dateOfBirth} type="date" placeholder="Date Of Birth" />
                    </Form.Group>
                    <Form.Group className="col-6 mb-3" controlId="formAbout">
                        <Form.Control onChange={handleChange} name="about" value={formFields.about} type="input" placeholder="About" />
                    </Form.Group>
                    <Form.Group className="col-12 mb-3" controlId="formMedia">
                        <Form.Control onChange={showPreview} name="profileImage" as="input" accept="image/*" type="file" placeholder="Media" />
                    </Form.Group>
                    <Button className="col-12 mb-3" variant="light" as="input" type="submit" value="Join" />
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default SignUpForm;