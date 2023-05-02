import React from "react";
import "./Homepage.css";
import Typer from "../Typer/Typer";
import {FaLinkedin,FaWhatsappSquare, FaGithubSquare} from "react-icons/fa";

function Homepage(){
  return(
    <div className="home-bg flex flex-row">
    <div className="home-r flex-auto basis-1/6">
      <div className="home-r-content">
        <h2>Hello,</h2>
        <h2>I'm Navindu Sachintha</h2>
        <span><Typer /></span>
        <div className="home-social flex">
          <button onClick={() => {
                window.open("https://www.linkedin.com/in/navindu-sachintha/");
              }}
                className='social-btn'><FaLinkedin className='icon' /></button>
          <button onClick={() => {
              window.open("https://github.com/navindu-sachintha");
            }}
              className='social-btn'><FaGithubSquare className='icon' /></button>
          <button onClick={() => {
              window.open("");
            }}
              className='social-btn'><FaWhatsappSquare className='icon' /></button>    
        </div>
      </div>      
    </div>
    <div className="home-l flex-auto">
      <div className="main-pic"></div>
    </div>
  </div>
  )
  
}
export default Homepage;