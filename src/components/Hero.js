import React from "react";
import Slide from "./Slide"
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Hero.css";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import back from "../assets/heroImg.jpg";

function Hero() {
  return (
    <>
      <section className="heroSection">
        <Navbar />
        <div className="imgContainer">
          <img src={back} alt="back" className="background" />
          <div className="texts">
            <h1>Place</h1>
            <h3>
              Nunc sed sapien nec quam placerat posuere. Aliquam congue
              vestibulum enim et feugiat. Morbi non dictum orci, ultricies
              malesuada eros.
            </h3>
          </div>
        </div>

        <div className="partTwo">
          <img src={pic1} alt="idk" className="picLeft" />
          <div className="rightSection">
            <div className="rightText">
              <h3>
                Cras et mi turpis. Sed sapien tortor, porta vitae egestas id,
                condimentum vel ligula.
              </h3>
              <p>
                Nullam aliquam mi et nulla convallis dignissim. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. In hac habitasse platea dictumst.
              </p>
            </div>
            <img src={pic2} alt="idk2" className="picRight" />
          </div>
        </div>
        <img src={pic3} alt="idk3" className="pic3" />
        
        <Slide />
        <Footer />
      </section>
    </>
  );
}

export default Hero;
