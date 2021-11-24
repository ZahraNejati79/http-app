import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", component: Home },
  { path: "/about-us", component: AboutUs },
  { path: "/notFound", component: NotFound },
];

export default routes;
