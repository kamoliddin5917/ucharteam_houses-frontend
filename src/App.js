import "./App.css";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>

      <ToastContainer/>
    </>
  );
}

export default App;
