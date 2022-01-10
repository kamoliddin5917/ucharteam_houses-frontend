import { useContext } from "react";
import { ctx } from "../context/Auth";

const useAuth = (setterOnly) => {
  const { token, setToken } = useContext(ctx);

  return setterOnly ? [setToken] : [token, setToken];
};

export default useAuth;
