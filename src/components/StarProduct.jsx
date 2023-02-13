import React from "react";
import "../styles/StarProduct.css";

const StarProduct = ({ startProduct }) => {
  return (
    <div className="starProduct">
      <a href={startProduct[0].url}>
        <img src={startProduct[0].image} alt="1st Products" />
      </a>
      <div>
        <a href={startProduct[1].url}>
          <img src={startProduct[1].image} alt="2nd Products" />
        </a>
        <a href={startProduct[2].url}>
          <img src={startProduct[2].image} alt="3rd Products" />
        </a>
        <a href={startProduct[3].url}>
          <img src={startProduct[3].image} alt="4th Products" />
        </a>
      </div>
    </div>
  );
};

export default StarProduct;
