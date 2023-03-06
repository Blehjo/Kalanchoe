import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'reactstrap';
import { Fragment, useEffect, useState } from "react";
import { Person } from "react-bootstrap-icons";
import { checkUserSession } from "../store/user/user.action";
import ProfileDropdown from "./profileDropdown/ProfileDropdown";
import { setIsProfileOpen } from "../store/profile/profile.action";
import { selectIsProfileOpen } from "../store/profile/profile.selector";

const SignInButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);
    const profileOpen = useSelector(selectIsProfileOpen);

    const goToSignIn = () => {
        navigate('/authentication');
    }

    const showProfileDropdown = () => {
        dispatch(setIsProfileOpen(!profileOpen));
    }

    useEffect(() => {
        dispatch(checkUserSession());
    }, []);
    
    return (
        <Fragment>
        {
            currentUser ?
            <NavLink><Person style={{ cursor: 'pointer' }} color="black" size={20} onClick={showProfileDropdown}/></NavLink> : 
            <NavLink style={{ cursor: 'pointer' }} onClick={goToSignIn} className="text-dark" to="/projects">Sign In</NavLink>
        }
        {profileOpen && <ProfileDropdown user={currentUser}/>}
        </Fragment>
    );
}

export default SignInButton;