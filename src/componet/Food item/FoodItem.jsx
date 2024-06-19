import React, { useContext, useState } from "react";
import "./FoodItem.css";

import { StoreContext } from "../../context/Storecontext";
import { assets } from "../../assets/assets";

const FoodItem = ({id, name, price, description,image }) => {
  // const [itemCount, setItemCount] = useState(0)
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
//   console.log("FoodItem Props:",{ id, name, price, description, image });
  return (
    
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? 
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
         : 
          // onClick={()=>{
          //     setItemCount(prev=> prev + 1)
          // }}
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
            {/* {
                    setItemCount(prev => prev + 1)
                } */}
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-decription">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
