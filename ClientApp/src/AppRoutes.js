import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import House from "./components/House";

const AppRoutes = [
  {
    index: true,
    element: <House />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
