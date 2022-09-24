import React, { Fragment } from "react";
import classes from "./Header.module.css";

import mealsImages from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImages} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
