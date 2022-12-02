import React from "react";
import CardComponent from "./CardComponent";
import Chartcom from "./Components/Chartcom";


function Home() {
  return (
    <div>
        <div style={{display: 'flex'}}>
           <CardComponent />
           <CardComponent />
           <CardComponent />
        </div>
        
      <div style={{margiLetf:'100px'}}>
          <Chartcom/>
      </div>
    </div>
  );
}

export default Home;
