import React from "react";
import classes from "../Size/Size.module.css";
const Size = () => {
  return (
    <div className={classes.sizesmain}>
      <div>
        <div className={classes.sizes}>
          <h4 className={classes.size}>Sizes:</h4>
          <div className={classes.sizebuttonmain}>
            <div className={classes.sizebutton}>
              <label>
                <span>XS</span>
              </label>
            </div>
            <div className={classes.sizebutton}>
              <label>
                <span>S</span>
              </label>
            </div>
            <div className={classes.sizebutton}>
              <label>
                <span>M</span>
              </label>
            </div>
            <div className={classes.sizebutton}>
              <label>
                <span>ML</span>
              </label>
            </div>
            <div className={classes.sizebutton}>
              <label>
                <span>L</span>
              </label>
            </div>
            <div className={classes.sizebutton}>
              <label>
                <span>XL</span>
              </label>
            </div>
            <div className={classes.sizebutton}>
              <label>
                <span>XXL</span>
              </label>
            </div>
          </div>
        </div>
        <div className={classes.star}>
          <p>
            <small>
              Leave a star on Github if this repository is useful :)))
            </small>
          </p>
          <a>Star</a>
        </div>
      </div>
    </div>
  );
};

export default Size;
