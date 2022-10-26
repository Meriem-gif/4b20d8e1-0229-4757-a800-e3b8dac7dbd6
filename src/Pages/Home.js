import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardEvent from "../component/CardEvent/CardEvent";
import Header from "../component/Header/Header";
import "./Home.scss";
const Home = ({searchWord, addItemToCart, cartItemsIds,removeItemFromCart}) => {

  const [event, setEvent] = useState([]);

  const fetchEvents = async () => {
    const {data}  = await axios.get(`https://tlv-events-app.herokuapp.com/events/uk/london`)  
      setEvent(data);
   };

  useEffect(()=>{
    fetchEvents();
  },[]);
   
useEffect(()=>{
  const scrollFunction = ()=>{
    document.querySelectorAll(".sticky").forEach(e => {
      if(e.getBoundingClientRect().bottom <=150){
        e.classList.add("onScroll")
      }
      else{
        e.classList.remove("onScroll")
      }
    })}
  document.addEventListener("scroll",scrollFunction)

},[])

  const groupBy = (arr, criteria) =>
  arr.reduce((obj, item) => {
      let key = typeof criteria === "function" ? criteria(item) : item[criteria];
      if (!obj.hasOwnProperty(key)) obj[key] = [];
      obj[key].push(item);
      return obj;
  }, {});
  const grouped= groupBy(event,"date");
 
  const dates=Object.keys(grouped).sort((a,b)=>Number(new Date(a)) - Number(new Date(b)));

  
  return (
   <>
   <Header />
   <div >
     <h1>Public Events</h1> 
   </div>
    <div className="home">
      {event && dates.map(d =>(
        <div className="group">
         <Typography className="sticky" variant="h5" color="primary" >{ d.split('T').join (", ").split('.')[0].split(',')[0]}</Typography>
         {grouped[d].filter(e=>!cartItemsIds.includes(e._id))
        .filter(e=>e.title.toLowerCase().includes(searchWord.toLowerCase()))
        .map((e)=>(
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
                            />))}
        
        </div>
      
      ))}  
    </div>
    </>
 
  );
};
export default Home;