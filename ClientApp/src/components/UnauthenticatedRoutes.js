import Authentication from "./Authentication";
import Chats from "./Chats";
import ChatPage from "./ChatPage";
import Communities from "./Communities";
import Community from "./Community";
import Dashboard from "./Dashboard";
import Dilemmas from "./Dilemmas";
import Explore from "./Explore";
import LandingPage from "./LandingPage";
import Message from "./Message";
import Messages from "./Messages";
import News from "./News";
import Posts from "./Posts";
import Profile from "./Profile";
import Profiles from "./Profiles";
import SinglePost from "./SinglePost";
import Users from "./components/Users";


const UnauthenticatedRoutes = [
    {
        index: true,
        element: <Profile />
    },
    {
        path: '/authentication',
        element: <Authentication />
    },
    {
        path: '/chats',
        element: <Chats />
    },
    {
        path: '/chatpage',
        element: <ChatPage />
    },
    {
        path: '/communities',
        element: <Communities />
    },
    {
        path: '/community/:id',
        element: <Community />
    }, {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/projects',
        element: <Dilemmas />
    },
    {
        path: '/explore',
        element: <Explore />
    },
    {
        path: '/landingpage',
        element: <LandingPage />
    },
    {
        path: '/message/:id',
        element: <Message />
    },
    {
        path: '/messages',
        element: <Messages />
    },
    {
        path: '/news',
        element: <News />
    },
    {
        path: '/posts',
        element: <Posts />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/profiles',
        element: <Profiles />
    },
    {
        path: '/posts/:id',
        element: <SinglePost />
    },
    {
        path: '/profile/:id',
        element: <Users />
    }
];

export default UnauthenticatedRoutes;
