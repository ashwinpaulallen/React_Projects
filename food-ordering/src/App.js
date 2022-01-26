import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };
  const hideChartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onHideCart={hideChartHandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
