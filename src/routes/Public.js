import { Route, Redirect, useLocation } from "react-router-dom";

import useAuth from "../hooks/UseAuth";

const Public = (props) => {
  const [token] = useAuth();
  const { pathname } = useLocation();

  if (token && pathname === "/register") {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

export default Public;
