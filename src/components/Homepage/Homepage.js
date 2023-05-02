import React from "react";
import "./Homepage.css";
import Typer from "../Typer/Typer";

function Homepage(){
  return(
    <div className="home-bg flex flex-row">
    <div className="home-r flex-auto basis-1/6">
      <div className="home-r-content">
        <h2>Hello,</h2>
        <h2>I'm Navindu Sachintha</h2>
        <span><Typer /></span>
        <div className="home-btn"></div>
        
      </div>      
    </div>
    <div className="home-l flex-auto">
      <div className="main-pic"></div>
    </div>
  </div>
  )
  
}
export default Homepage;