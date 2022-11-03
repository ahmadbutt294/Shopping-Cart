import React from "react";
import classes from "../Navbar/Navbar.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Sidebar from "../Sidebar/Sidebar";
export const Navbar = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <>
      <div className={classes.navbar}>
        <nav className={classes.nav}>
          <div
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
          >
            <AddShoppingCartIcon fontSize="large" />
          </div>
        </nav>
        {isCartOpen && (
          <div className={classes.mainsidebar}>
            <Sidebar className={classes.showSidebar} />
          </div>
        )}
      </div>
    </>
  );
};
