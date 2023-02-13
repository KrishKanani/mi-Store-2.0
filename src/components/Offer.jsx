import React from "react";

const Offer = ({ key, index, src, url }) => {
  return (
    <div>
      <a href={url}>
        <img src={src} alt={`${index} Offer`} />
      </a>
    </div>
  );
};

export default Offer;
