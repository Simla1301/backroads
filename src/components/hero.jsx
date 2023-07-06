import React from "react";
import img from "../images/hero.jpeg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="mt-4">
      <div>
        <img src={img} style={{ width: "100%", height: "600px" }} />
      </div>
      <div className="para">
        <h1 style={{fontSize: '70px'}}>BACKROAD APP</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus<br/>
          excepturi, omnis quasi aut porro officia. Cum quibusdam ab explicabo<br/>
          doloremque nulla amet eaque in, ad commodi soluta fugit quisquam 
          magni?
        </p>
      </div>
    </div>
  );
};
export default Hero;
