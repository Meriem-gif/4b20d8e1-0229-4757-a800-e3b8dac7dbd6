import React, { useContext } from "react";
import { EventContext } from "../App";
import CardEvent from "../component/CardEvent/CardEvent";
import "./Cart.scss";

const Cart = ({cart,removeItemFromCart,addItemToCart}) => {

 const state = useContext(EventContext)
  return (
  
    <div className="cart">
        { state && state.cart.map((e)=>(
          <CardEvent 
            key={e.id}
            id={e.id}
            img={e.img}
            title={e.title}
            date={e.date}
            startTime={e.startTime}
            endTime={e.endTime}
            location={e.location}  
            locationDirection={e.direction} 
            removeItemFromCart={removeItemFromCart}
            addItemToCart={addItemToCart}
                    />
        ))}
      
    </div>
 
  );
};
export default Cart