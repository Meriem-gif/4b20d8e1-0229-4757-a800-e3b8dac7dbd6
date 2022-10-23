import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardEvent from "../component/CardEvent/CardEvent";

import "./Home.css";

const Home = () => {


const [event, setEvent] = useState([]);

  const fetchEvents = async () => {
    const { data } = await axios.get(
      `https://tlv-events-app.herokuapp.com/events/uk/london`
    );
    console.log(data.country);
  
    setEvent(data);
  };

  useEffect(()=>{
    fetchEvents();

  },[])
  return (
    <div>
      <Button variant="outlined" >
      LONDON
      </Button>
     <Button variant="outlined" >
      28.11.2021-10.12.2021
     </Button>
    <div className="Home">
        {event && event.map((e)=>(
          <CardEvent 
            key={e.id}
            img={e.flyerFront}
            title={e.title}
            date={e.date}
            startTime={e.startTime}
            endTime={e.endTime}
            location={e.venue.name} id={undefined}          />
        ))}
      
    </div>
    </div>
  );
};
export default Home;