import "./App.css";
import DiscussComponent from "./Container/DiscussComponent/DiscussComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <DiscussComponent />
    </div>
  );
}

export default App;
