import React from "react";
import classes from "../Navbar/Navbar.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export const Navbar = () => {
  return (
    <>
      <div className={classes.navbar}>
        <nav className={classes.nav}>
          <AddShoppingCartIcon fontSize="large" />
        </nav>
      </div>
    </>
  );
};
