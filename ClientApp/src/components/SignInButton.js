import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'reactstrap';
import { Fragment, useEffect, useState } from "react";
import { Person } from "react-bootstrap-icons";
import { checkUserSession } from "../store/user/user.action";
import ProfileDropdown from "./ProfileDropdown";

const SignInButton = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);

    const goToSignIn = () => {
        navigate('/authentication');
    }

    const showProfileDropdown = () => {
        setShow(!show);
    }

    useEffect(() => {
        dispatch(checkUserSession());
    }, []);
    
    return (
        <Fragment>
        {
            currentUser ?
            <NavLink><Person color="black" size={20} onClick={showProfileDropdown}/></NavLink> : 
            <NavLink style={{ cursor: 'pointer' }} onClick={goToSignIn} className="text-dark" to="/projects">Sign In</NavLink>
        }
        {show && <ProfileDropdown/>}
        </Fragment>
    );
}

export default SignInButton;