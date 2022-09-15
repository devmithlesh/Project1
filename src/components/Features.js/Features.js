import React from "react";
import Fdata from "./data";
import "./Features.css";
import Videoimg from "../assets/features-img/screen.png";
import Play from "../assets/features-img/play button.png";
function Features() {
  return (
    <>
      <section>
        <div className="container mx-auto md:px-28 px-4  flex items-center flex-col ">
          {/*=================== Main Heading in this section ===================*/}
          <h2>Features</h2>
          <h4 className="mt-4 md:mt-0">
            Most calendars are designed for teams.
            <span className="md:inline hidden ">
              <br /> Slate is designed for freelancers
            </span>
          </h4>
          {/*=================== Dynamic Data pass Three text card ===============*/}
          <div className="flex items-center md:flex-wrap flex-wrap-reverse">
            <div className="flex md:flex-row flex-col items-center justify-center text-center py-10 w-full">
              {Fdata.map((pro, ind) => {
                return (
                  <div className="w-48 md:mx-8 py-10 md:py-0 flex flex-col items-center">
                    <img
                      src={pro.img}
                      alt="first-img"
                      className="mx-auto pb-3 md:pb-1"
                    />
                    <h3 className="md:w-40 mb-2 md:mb-0">{pro.heading}</h3>
                    <p>{pro.passage}</p>
                  </div>
                );
              })}
            </div>

            {/*============================ Down Video Img ============================*/}

            <div className="img-video mt-10 md:mt-0">
              <img src={Videoimg} alt="video-img" />
              <img
                src={Play}
                alt="video-play"
                className="img-play md:w-40 w-20 cursor-pointer shadow-lg hover:shadow-blue-500/50 rounded-full duration-200"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
