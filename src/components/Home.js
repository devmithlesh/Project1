import React from "react";
import "./Home.css";
import Bacimg from "./assets/background.jpg";
import Features from "./Features.js/Features";
import Fastest from "./Fastest";
import Lighting from "./Lighting";
import Partners from "./Partners";
import Testimonls from "./Testimonls";
import Pricing from "./Pricing";
import Contact from "./Contact";
function Hero() {
  return (
    <>
      <section>
        <div className="w-full h-screen">
          <div className="hero">
            <img src={Bacimg} alt="background-img" className="hero-img" />
          </div>
          <div className="content-hero">
            <h1>The best products start with Figma</h1>
            <h4 className="mt-2" style={{ color: "#FFFFFF" }}>
              Most calendars are designed for teams.
              <span className="md:inline hidden " style={{ color: "#FFFFFF" }}>
                Slate is designed <br />
                for freelancers
              </span>
            </h4>
            <button className="button-primary btn-hero">Try For Free</button>
          </div>
        </div>
      </section>
      {/* features section */}
      <Features />
      {/* fasters section */}
      <Fastest />
      {/* Lihting section third */}
      <Lighting />
      {/* Partners forth section */}
      <Partners />
      {/* Testimonls */}
      <Testimonls />
      {/* Pricing */}
      <Pricing />
      {/* contact section */}
      <Contact />
    </>
  );
}

export default Hero;
