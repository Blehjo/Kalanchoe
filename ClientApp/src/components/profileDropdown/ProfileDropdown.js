import { Nav, Row } from "react-bootstrap";
import { Inbox, Gear, DoorOpen, QuestionCircle, Person } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';

import './profileDropdown.scss';
import { setIsProfileOpen } from "../../store/profile/profile.action";

const ProfileDropdown = ({ user }) => {
    const dispatch = useDispatch();
    
    const signOutUser = () => {
        dispatch(signOutStart());
        dispatch(setIsProfileOpen(false));
    }

    return (
        <div className='profile-dropdown-container'>
            <div className='profile-options' />
                <Row 
                className="" style={{color: "white"}} 
                xs={1} 
                >
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Person className='' color="white" size={20}/>
                        <Nav.Link href={`/page/${user && user.userId}`} className="ms-4">
                        Profile
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Inbox className='' color="white" size={20}/>
                        <Nav.Link href="/" className="ms-4">
                        Notifications
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Gear className='' color="white" size={20}/>
                        <Nav.Link href="/" className="ms-4">
                        Settings
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center ">
                        <DoorOpen className='' color="white" size={20}/>
                        <Nav.Link href="/authentication" className="ms-4" onClick={signOutUser}>
                        Sign out
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <QuestionCircle className='' color="white" size={20}/>
                        <Nav.Link href="/likedposts" className="ms-4">
                        Help
                        </Nav.Link>
                    </Nav.Item>
                </Row>
        </div>
    )
}

export default ProfileDropdown;