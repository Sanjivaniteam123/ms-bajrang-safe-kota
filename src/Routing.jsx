import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from "./App";
import ContactUs from "./Components/ContactUs/ContactUs";
import Shop from "./Components/Shop/Shop";

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
    ],
  },
]);
export default router;
