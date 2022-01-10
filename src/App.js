import "./App.css";
import { Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// Routes
import Public from "./routes/Public";
import Private from "./routes/Private";

function App() {
  return (
    <>
      <Switch>
        <Public path="/login" component={Login} />
        <Public path="/register" component={Register} />
        <Public path="/" component={Home} />
      </Switch>

      <ToastContainer />
    </>
  );
}

export default App;
