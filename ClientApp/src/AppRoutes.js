import Authentication from "./components/Authentication";
import Chats from "./components/Chats";
import ChatPage from "./components/ChatPage";
import Communities from "./components/Communities";
import Community from "./components/Community";
import Dashboard from "./components/Dashboard";
import Dilemmas from "./components/Dilemmas";
import Explore from "./components/Explore";
import LandingPage from "./components/LandingPage";
import Message from "./components/Message";
import Messages from "./components/Messages";
import News from "./components/News";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Profiles from "./components/Profiles";
import SinglePost from "./components/SinglePost";
import Users from "./components/Users";
import Artoo from "./components/Artoo";
import ArtGeneration from "./components/ArtGeneration";


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
    path: '/artoo/:id',
    element: <Artoo />
  },
  {
    path: '/artoo/',
    element: <Artoo />
  },
  {
    path: '/artgenerator/:id',
    element: <ArtGeneration />
  },
  {
    path: '/artgenerator/',
    element: <ArtGeneration />
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
  },
  {
    path: '/community/:id/:channelId',
    element: <Community />
  },
  {
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
    path: '/messages/:id',
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

export default AppRoutes;