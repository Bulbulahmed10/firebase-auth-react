import { createBrowserRouter } from "react-router-dom";
import App from ".././layout/App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import User from "../pages/User/User";
import Home from "../pages/Home/Home";
import Resource from "../pages/Resource/Resource";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "resource",
        element: <Resource />,
      },
    ],
  },
]);

export default router;
