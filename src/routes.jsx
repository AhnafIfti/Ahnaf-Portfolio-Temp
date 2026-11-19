// src/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Publications from "./pages/Publications/Publications";
import Expertise from "./pages/Expertise/Expertise";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "education", element: <Education /> },
      { path: "publications", element: <Publications /> },
      { path: "expertise", element: <Expertise /> },
      { path: "news", element: <News /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
