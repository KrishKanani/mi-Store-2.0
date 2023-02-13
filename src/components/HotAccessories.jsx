import React from "react";
import HotItemCard from "./HotItemCard";
import "../styles/HotAccessories.css";

const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifestyle,
  lifestyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) => {
  return (
    <div className="HotAccessories">
      <div className="musicCover">
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifestyleCover ||
            mobileAccessoriesCover
          }
          alt="Cover"
        />
      </div>

      <div className="music">
        {music?.map((item, index) => (
          <HotItemCard
            key={item.name}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}

        {/* We can also write it like smartDevice && smartDevice.map(()...) instead of smartDevice?.map(()..) */}
        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotItemCard
              key={item.name}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {home?.map((item, index) => (
          <HotItemCard
            key={item.name}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}

        {lifestyle?.map((item, index) => (
          <HotItemCard
            key={item.name}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}

        {mobileAccessories?.map((item, index) => (
          <HotItemCard
            key={item.name}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HotAccessories;
