import React from 'react';
import './Typer.css';
import Typewriter from "typewriter-effect";

function Typer (){
  return (
    <Typewriter
      options={{
        strings:[
          "Full-Stack Developer",
          "Blogger"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Typer;