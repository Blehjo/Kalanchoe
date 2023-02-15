import { Nav, Row } from "react-bootstrap";
import { Inbox, Gear, Laptop, DoorOpen, QuestionCircle, MenuApp, Person } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { signOutStart } from '../store/user/user.action';

// import './profile-dropdown.styles.scss';

const ProfileDropdown = () => {
    const dispatch = useDispatch();
    
    const signOutUser = () => dispatch(signOutStart());

    return (
        <div className='profile-dropdown-container'>
            <div className='profile-options' />
            <div className='' >
                <Row 
                className="" style={{color: "white"}} 
                xs={1} 
                >
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Person className='' color="white" size={20}/>
                        <Nav.Link href="/profile" className="ms-4">
                        Profile
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center">
                        <Inbox className='' color="white" size={20}/>
                        <Nav.Link href="/" className="ms-4">
                        Notifications
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center ">
                        <Laptop className='' color="white" size={20}/>
                        <Nav.Link href="/explore" className="ms-4">
                        Dashboard
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-3 ms-3 d-flex align-items-center ">
                        <MenuApp className='' color="white" size={25}/>
                        <Nav.Link href="/savedgames" className="ms-4">
                        Appearance: Device theme
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
                        <Nav.Link href="/authentication" className="ms-3">
                        <span className='nav-link' onClick={signOutUser}>Sign out</span>
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
        </div>
    )
}

export default ProfileDropdown;