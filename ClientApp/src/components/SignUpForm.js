import { useState } from "react";
import { Row, Col } from "react-bootstrap";
//import CountrySelect from 'react-bootstrap-country-select';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [country, setCountry] = useState(null);
    const { username, profileImage, email, password, confirmPassword, dateOfBirth, firstName, lastName } = formFields;
    const navigate = useNavigate();

    //const resetForm = () => {
    //    setFormFields();
    //}

    const signInWithReact = async () => {
        await axios.post(`/api/User`,
            {
                Username: username,
                EmailAddress: email,
                Password: password,
                ProfileImage: profileImage,
                DateOfBirth: dateOfBirth,
                FirstName: firstName,
                LastName: lastName
            })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    const handleSubmit = async (event) => {
        // event.preventDefault();
        if (password !== confirmPassword) {
            alert('error message');
            return;
        }

        try {
            await signInWithReact();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    }

    return (
        <Row style={{ justifyContent: 'center', color: 'black' }} xs={1}>
            <Col>
                <h2>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
                <form style={{ color: 'black', marginTop: '1rem' }} onSubmit={handleSubmit} class="row">
                    <div class="col-md-6">
                        <label for="inputDisplayName" class="form-label">Display Name</label>
                        <input
                            required
                            onChange={handleChange}
                            name="username"
                            value={username}
                            type="text"
                            class="form-control"
                            id="inputDisplayName"
                            placeholder="User123"
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input
                            type="email"
                            required
                            onChange={handleChange}
                            name="email"
                            value={email}
                            class="form-control"
                            id="inputEmail"
                            placeholder="Kusanagi@shellgeist.com"
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputFirstName" class="form-label">First Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleChange}
                            name="firstName"
                            value={firstName}
                            class="form-control"
                            id="inputFirstName"
                            placeholder="Major"
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputLastName" class="form-label">Last Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleChange}
                            name="lastName"
                            value={lastName}
                            class="form-control"
                            id="inputLastName"
                            placeholder="Kusanagi"
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword" class="form-label">Password</label>
                        <input
                            label="Password"
                            type="password"
                            required
                            onChange={handleChange}
                            name="password"
                            value={password}
                            class="form-control"
                            id="inputPassword"
                            placeholder="Password"
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                        <input
                            label="Confirm Password"
                            type="password"
                            required
                            onChange={handleChange}
                            name="confirmPassword"
                            value={confirmPassword}
                            class="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                        />
                    </div>
                    {/*<div class="col-md-6">
                        <label for="selectCountry" class="form-label">Country</label>
                        <CountrySelect
                            value={country}
                            onChange={setCountry}
                        />
                    </div>*/}
                    <div class="col-md-6">
                        <label for="" class="form-label">Date of Birth</label>
                        <input
                            required
                            onChange={handleChange}
                            type="date"
                            name="dateOfBirth"
                            value={dateOfBirth}
                            id="selectDateOfBirth"
                            class="form-control"
                        />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="mt-3 btn btn-light">Join</button>
                    </div>
                </form>
            </Col>
        </Row>
    )
}

export default SignUpForm;