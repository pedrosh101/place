import React from "react";
import "./Hero.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import heroImg from "../assets/heroImg.jpg"

function Hero() {
  return (
    <>
      <section className="heroSection">
        <Parallax pages={2}>
          <ParallaxLayer offset={0} speed={0.2} factor={1.3} style={{backgroundImage: `url(${heroImg})`, backgroundSize: 'cover'}}>
          </ParallaxLayer>
          <ParallaxLayer offset={0}>
            <div className="imgContainer">
              <div className="heroText">
                <h1>Place</h1>
                <h3>
                  Nunc sed sapien nec quam placerat posuere. Aliquam congue
                  vestibulum enim et feugiat. Morbi non dictum orci, ultricies
                  malesuada eros.
                </h3>
              </div>
            </div>
          </ParallaxLayer>


          <ParallaxLayer offset={1} speed={0.2}>
            <div className="partTwo">
              <h1>i'm coming back soon!</h1>
            </div>
          </ParallaxLayer>
        </Parallax>
      </section>
    </>
  );
}

export default Hero;
