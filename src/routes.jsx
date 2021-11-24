import FullComment from "./Component/FullComment/FullComment";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import NewComment from "./pages/NewComment/NewComment";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/about-us", component: AboutUs },
  { path: "/comment/:id", component: FullComment },
  { path: "/new-comment", component: NewComment },
  { component: NotFound },
];

export default routes;
