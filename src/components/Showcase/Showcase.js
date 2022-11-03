import React from "react";
import Products from "../Products/Products";
import Size from "../Size/Size";
import classes from "../Showcase/Showcase.module.css";
import Sidebar from "../Sidebar/Sidebar";
const Showcase = () => {
  return (
    <div>
      <div className={classes.showcase}>
        <Size />
        <Products />
      </div>
    </div>
  );
};

export default Showcase;
