import React from "react";
import classes from "../Sidebar/Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={classes.cartdesign}>
      <div className={classes.sidebarmain}>
        <div className={classes.cart}>
          <img src="/images/cart-icon.png" alt="images1"></img>
          <div className={classes.sidebar}>Cart</div>
        </div>
        <div className={classes.carttext}>
          <p>Add some Products in the Cart </p>
        </div>
      </div>
      <div>empty</div>
      <div className={classes.total}>
        <div className={classes.subtotal}>
          <h4>SUBTOTAL</h4>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Sidebar;
