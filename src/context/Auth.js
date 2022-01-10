const { createContext, useState, useEffect } = require("react");

const ctx = createContext();

const Auth = ({ children }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);

  return <ctx.Provider value={{ token, setToken }}>{children}</ctx.Provider>;
};

export { Auth, ctx };
