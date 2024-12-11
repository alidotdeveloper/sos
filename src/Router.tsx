import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Features from "./pages/features/Features";
import Terms from "./pages/legal/terms and condition/Terms";
import Privacy from "./pages/legal/privacy-policy/Privacy";
import DeleteAccount from "./pages/delete-account/DeleteAccount";
import Contact from "./pages/contact/Contact";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/features",
      element: <Features />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/terms",
      element: <Terms />,
    },
    {
      path: "/privacy-policy",
      element: <Privacy />,
    },
    {
      path: "/delete-account",
      element: <DeleteAccount />,
    },
  ]);

  return routes;
};

export default Router;
