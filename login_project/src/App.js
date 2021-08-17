import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import context from "./context/context";

function App() {
  const ctx = useContext(context);
  return (
    <React.Fragment>
      <MainHeader onLogout={ctx.onLogout} />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
