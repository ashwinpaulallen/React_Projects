import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./header.module.css";
import CartButton from "./headerCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Ordering</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
