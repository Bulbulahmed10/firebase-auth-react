import { createBrowserRouter } from "react-router-dom";
import App from ".././layout/App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import User from "../pages/User/User";
import Header from "../Components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Header />,
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
    ],
  },
]);

export default router;
