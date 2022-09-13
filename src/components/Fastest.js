import React from "react";
import laptop from "./assets/laptop.png";
function Fastest() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex md:px-28 px-6 py-32 md:flex-row flex-col items-center">
          <div className="flex flex-col md:w-1/2 w-full items-center">
            <h2 className="md:w-8/12 md:text-left ">Fastest way to organize</h2>
            <h4 className="md:w-11/12 md:text-left mt-4 md:mt-0">
              Most calendars are designed for teams.
              <span className="md:flex-inline hidden">
                Slate is designed for freelancers
              </span>
            </h4>
            <button className="button-primary mt-10 md:mb-0 mb-14">
              Button
            </button>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={laptop} alt="laptop-img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Fastest;
