import React from "react";
import { Button } from "../Button/Buton";
import "./HeroSection.css";

import '../../images/main.jpg'

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Let's the jorney begins</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--outline"
        >
          Tap here to begin
        </Button>
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--primary"
        >
          Get more info
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
