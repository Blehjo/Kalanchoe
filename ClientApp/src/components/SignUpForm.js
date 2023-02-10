import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    firstName: '',
    lastName: '',
    profileImage: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { username, profileImage, about, email, password, confirmPassword, dateOfBirth, firstName, lastName } = formFields;
    const navigate = useNavigate();

    const resetForm = () => {
       setFormFields(defaultFormFields);
    }

    const signInWithReact = async () => {
        await axios.post(`https://localhost:7028/api/users/register`,
        {
            Username: username,
            EmailAddress: email,
            Password: password,
            ProfileImage: profileImage,
            DateOfBirth: dateOfBirth,
            FirstName: firstName,
            LastName: lastName,
            About: about
        });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('error message');
            return;
        }

        try {
            await signInWithReact();
            resetForm();
            navigate('/profile');
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
                <form style={{ color: 'black', marginTop: '1rem' }} onSubmit={handleSubmit} className="row">
                    <div className="col-md-6">
                        <label htmlFor="inputUsername" className="form-label">Username</label>
                        <input
                            required
                            onChange={handleChange}
                            name="username"
                            value={username}
                            type="text"
                            className="form-control"
                            id="inputUsername"
                            placeholder="User123"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input
                            type="email"
                            required
                            onChange={handleChange}
                            name="email"
                            value={email}
                            className="form-control"
                            id="inputEmail"
                            placeholder="Kusanagi@shellgeist.com"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputFirstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleChange}
                            name="firstName"
                            value={firstName}
                            className="form-control"
                            id="inputFirstName"
                            placeholder="Major"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputLastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleChange}
                            name="lastName"
                            value={lastName}
                            className="form-control"
                            id="inputLastName"
                            placeholder="Kusanagi"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input
                            label="Password"
                            type="password"
                            required
                            onChange={handleChange}
                            name="password"
                            value={password}
                            className="form-control"
                            id="inputPassword"
                            placeholder="Password"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            label="Confirm Password"
                            type="password"
                            required
                            onChange={handleChange}
                            name="confirmPassword"
                            value={confirmPassword}
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                        />
                    </div>
                    {/*<div className="col-md-6">
                        <label for="selectCountry" className="form-label">Country</label>
                        <CountrySelect
                            value={country}
                            onChange={setCountry}
                        />
                    </div>*/}
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Date of Birth</label>
                        <input
                            required
                            onChange={handleChange}
                            type="date"
                            name="dateOfBirth"
                            value={dateOfBirth}
                            id="selectDateOfBirth"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">About</label>
                        <input
                            required
                            onChange={handleChange}
                            type="about"
                            name="about"
                            value={about}
                            id="selectAbout"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Profile Image</label>
                        <input
                            required
                            onChange={handleChange}
                            type="profileImage"
                            name="profileImage"
                            value={profileImage}
                            id="selectProfileImage"
                            className="form-control"
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="mt-3 btn btn-light">Join</button>
                    </div>
                </form>
            </Col>
        </Row>
    )
}

export default SignUpForm;

// {"Username":"mapel","EmailAddress":"mapel@kala.com","Password":"Password1","ProfileImage":"","DateOfBirth":"2023-02-09","FirstName":"Mapelese","LastName":"Major"}