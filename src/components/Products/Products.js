import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "../Products/Products.module.css";
import Data from "../../Data";
const Products = () => {
  return (
    <div className={classes.Products}>
      <div className={classes.totalproducts}>
        <p>16 Product(s) Found:</p>
        <div className={classes.productcards}>
          {Data.map((val) => {
            return (
              <ProductCard
                id={val.id}
                availableSizes={val.availableSizes}
                currencyFormat={val.currencyFormat}
                title={val.title}
                price={val.price}
                image={val.image}
                secondimage={val.secondimage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
