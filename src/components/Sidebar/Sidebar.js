import React from "react";
import classes from "../Sidebar/Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={classes.mainn}>
      <div className={classes.sidebarmain}>
        <button className={classes.mainwithbutton}>
          <span>X</span>
        </button>

        <div className={classes.cart}>
          <img src="/images/cart-icon.png" alt="images1"></img>
          <div className={classes.sidebar}>Cart</div>
        </div>
        <div className={classes.cartitems}>
          <p>Add items to the cart</p>
          <p>:)</p>
        </div>

        <div className={classes.subtotal}>
          <div>
            <p>SUBTOTAL</p>
            <p>$ 0.00</p>
          </div>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
