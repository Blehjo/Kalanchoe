import Authentication from "./components/Authentication";
import Chats from "./components/Chats";
import Communities from "./components/Communities";
import Community from "./components/Community";
import Dashboard from "./components/Dashboard";
import Dilemmas from "./components/Dilemmas";
import Explore from "./components/Explore";
import LandingPage from "./components/LandingPage";
import Message from "./components/Message";
import Messages from "./components/Messages";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import SinglePost from "./components/SinglePost";
import Users from "./components/Users";


const AppRoutes = [
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
    path: '/communities',
    element: <Communities />
  },
  {
    path: '/community/:id',
    element: <Community />
  },{
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
    path: '/posts',
    element: <Posts />
  },
  {
    path: '/profile',
    element: <Profile />
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

export default AppRoutes;
