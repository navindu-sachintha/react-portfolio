import React from "react";
import './Footer.css';

export default function Footer (){
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footer">
      <div className="footer-content flex flex-row">
        <p className="f-title">Brewed with ❤️ by Myself</p>
        <p className="f-tagline">Copyright © {year} _NS</p>
      </div>
    </div>
  )
}