import FullComment from "./Component/FullComment/FullComment";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import NewCommetPage from "./pages/NewCommentPage";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/about-us", component: AboutUs },
  { path: "/comment/:id", component: FullComment },
  { component: NotFound },
  { path: "/new-comment", component: NewCommetPage },
];

export default routes;
