import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Users from "./routes/Users";
import App from "./App";
import Error from "./routes/Error";
import User from "./routes/User";
import AddUser from "./routes/AddUser";

const router = createBrowserRouter([
  {
    path: "/front-end/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/front-end/",
        element: <Home />,
      },
      {
        path: "/front-end/users",
        element: <Users />,
      },
      {
        path: "/front-end/users/:id",
        element: <User />,
      },
      {
        path: "/front-end/adduser",
        element: <AddUser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
