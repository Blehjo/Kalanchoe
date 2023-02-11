import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const SignInButton = () => {
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);
    console.log(currentUser);

    const goToSignIn = () => {
        navigate('/authentication');
    }

    return (
        <Button variant="light" onClick={goToSignIn}>Sign In</Button>
    );
}

export default SignInButton;