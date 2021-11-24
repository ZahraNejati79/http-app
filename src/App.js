import "./App.css";
import DiscussComponent from "./Container/DiscussComponent/DiscussComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import { Route, Switch } from "react-router";
import routes from "./routes";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
