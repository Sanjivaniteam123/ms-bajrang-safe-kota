import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from "./App";
import ContactUs from "./Components/ContactUs/ContactUs";
import Shop from "./Components/Shop/Shop";
import Login from "./Components/Login/Login";
import SignUpForm from "./Components/SignUp/SignUp";
import AddLocker from "./Components/AddLocker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUpForm />,
      },
      {
        path: "addItem",
        element: <AddLocker />,
      },
    ],
  },
]);
export default router;
