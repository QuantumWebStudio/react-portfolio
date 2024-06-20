import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorHandling/ErrorPage";
import {NavMob} from '../components/Component'

import { About, Services, Contact } from "../constants/Constants";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path:'/navmob',
    element:<NavMob />
  }
]);
export { Router };
