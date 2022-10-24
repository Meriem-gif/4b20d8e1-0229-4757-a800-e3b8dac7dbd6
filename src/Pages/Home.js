import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardEvent from "../component/CardEvent/CardEvent";
import Header from "../component/Header/Header";
import "./Home.scss";

const Home = ({searchWord, addItemToCart, cartItemsIds,removeItemFromCart}) => {

const [event, setEvent] = useState([]);

  const fetchEvents = async () => {
    const { data } = await axios.get(
      `https://tlv-events-app.herokuapp.com/events/uk/london`
    );  
    setEvent(data);
  };

  useEffect(()=>{
    fetchEvents();
  },[])
  console.log(cartItemsIds)
    
  return (
   <>
   <Header />
   <div >
    <Box sx={{position:"sticky"}}>
     <h1>Public Events</h1>
    </Box>
   </div>
    <div className="home">
        {event && event
        .filter(e=>!cartItemsIds.includes(e._id))
        .filter(e=>e.title.toLowerCase().includes(searchWord.toLowerCase()))
        .sort((a,b)=>Number(new Date(a.date)) - Number(new Date(b.date)))
        .map((e,index)=>(
          <CardEvent 
            key={e._id}
            id={e._id}
            img={e.flyerFront}
            title={e.title}
            date={e.date}
            startTime={e.startTime}
            endTime={e.endTime}
            location={e.venue.name} 
            locationDirection={e.venue.direction} 
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
                    />
        ))}
      
    </div>
    </>
 
  );
};
export default Home;