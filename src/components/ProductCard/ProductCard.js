import * as React from "react";
import CardButton from "../CardButton/CardButton";
import classes from "../ProductCard/ProductCard.module.css";
const ProductCard = ({ currencyFormat, title, price, image, secondimage }) => {
  const [enter, setEnter] = React.useState(false);
  const handleEnter = () => {
    setEnter(true);
  };
  const handleLeave = () => {
    setEnter(false);
  };
  return (
    <div
      className={classes.productCardDesign}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div>
        <div className={classes.cardImage}>
          <img src={enter ? secondimage : image} alt="images" />
          <p className={classes.productname}>{title}</p>
          <div className={classes.pp}>
            <p className={classes.productprice}>
              <small>{currencyFormat}</small>
              <div>
                <h2>{price}</h2>
              </div>
            </p>
            <p className={classes.discount}>
              <span>or</span>
              <span> 9</span>
              <span> x</span>
              <b> {currencyFormat}</b>
              <b>1.21</b>
            </p>
          </div>
        </div>
        <CardButton />
      </div>
    </div>
  );
};

export default ProductCard;
