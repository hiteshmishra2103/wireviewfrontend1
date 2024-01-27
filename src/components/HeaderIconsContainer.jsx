import React from "react";
import styles from "../styles/header.module.css";

import LoginLogout from "./LoginLogout";
import Cart from "./Cart";

const HeaderIconsContainer = () => {
  return (
    <div className={styles.headerIconsContainer}>
      <LoginLogout />
      <Cart />
    </div>
  );
};

export default HeaderIconsContainer;
