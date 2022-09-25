import React from "react";
import { Image } from "./core/Image";
import "./Hero.css";
import imgForest from '../assets/img-forest.jpg'

function Hero() {
  return (
    <>
      <section className="heroSection">
        <div className="imgContainer">
          {/* <img
            src="./img/hero.jpg"
            alt="office"
            className="imgHero"
          ></img> */}
          <div className="heroText">
            <h1>Place</h1>
            <h3>
              Nunc sed sapien nec quam placerat posuere. Aliquam congue
              vestibulum enim et feugiat. Morbi non dictum orci, ultricies
              malesuada eros.
            </h3>
          </div>
        </div>

        <Image src={imgForest} alt="Forest Background" height="50vh" speed={1}>
          <h1 className="image-text">42525424</h1>
        </Image>
      </section>
    </>
  );
}

export default Hero;
