import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fragment, useEffect } from "react";
import { Person } from "react-bootstrap-icons";
import { checkUserSession } from "../store/user/user.action";

const SignInButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);
    console.log(currentUser);

    const goToSignIn = () => {
        navigate('/authentication');
    }

    useEffect(() => {
        dispatch(checkUserSession());
    }, [])
    return (
        <Fragment>
        {
            currentUser ?
            <NavLink><Person color="black" size={20}/></NavLink> : 
            <NavLink style={{ cursor: 'pointer' }} onClick={goToSignIn} className="text-dark" to="/projects">Sign In</NavLink>
        }
        </Fragment>
    );
}

export default SignInButton;