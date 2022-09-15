import React from "react";
import "./Pricing.css";
function Pricing() {
  return (
    <>
      <section style={{ background: "#252B42" }}>
        <div className="w-full py-24 md:px-28 container mx-auto">
          <h2 style={{ color: "#ffffff" }}>Pricing</h2>
          <div className="flex justify-center mb-16 mt-1">
            <h4 className="h4heading">
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </h4>
          </div>
          {/*==================== card section start ========================*/}
          <div className="flex flex-wrap items-stretch justify-center">
            <div className="p-4 lg:w-1/3 flex flex-col items-center">
              <div className="h-full bg-white px-6 py-12 rounded-lg overflow-hidden text-center relative box-shadow1">
                <h3>FREE</h3>
                <div className="flex justify-center">
                  <h5 className="w-32 pb-2 md:pb-0">
                    Organize across all apps by hand
                  </h5>
                </div>
                <div className="flex md:items-center justify-center md:mb-5">
                  <h1 className="h1heading">0</h1>
                  <div className="text-left">
                    <p>$</p>
                    <p>Per Month</p>
                  </div>
                </div>
                <p>Pricing Feature</p>
                <p className="py-4">Pricing Feature</p>
                <p>Pricing Feature</p>
                <p className="py-4">Pricing Feature</p>
                <p>Pricing Feature</p>
                <button className="button-primary mt-10">Order Now</button>
              </div>
            </div>
            {/*================== second card ====================*/}
            <div className="lg:w-1/3 flex flex-col items-center my-10 md:my-0">
              <div
                className="h-full bg-white px-6 py-12 rounded-lg overflow-hidden text-center relative box-shadow1"
                style={{ background: "#2091F9" }}
              >
                <h3 className="pt-4 text-white">STANDARD</h3>
                <div className="flex justify-center">
                  <h5 className="w-32 text-white pb-2 md:pb-0">
                    Organize across all apps by hand
                  </h5>
                </div>
                <div className="flex md:items-center justify-center text-white md:mb-5">
                  <h1 className="h1heading h1col">10</h1>
                  <div className="text-left">
                    <p className="text-white">$</p>
                    <p className="text-white">Per Month</p>
                  </div>
                </div>
                <p className="text-white">Pricing Feature</p>
                <p className="py-4 text-white">Pricing Feature</p>
                <p className="text-white">Pricing Feature</p>
                <p className="py-4 text-white">Pricing Feature</p>
                <p className="text-white">Pricing Feature</p>
                <button
                  className="button-primary mt-10"
                  style={{ background: "#ffffff", color: "#2091F9" }}
                >
                  Order Now
                </button>
              </div>
            </div>
            {/*======================= third card ==================================*/}
            <div className="p-4 lg:w-1/3 flex flex-col items-center ">
              <div className="h-full bg-white px-6 py-12 rounded-lg overflow-hidden text-center relative box-shadow1">
                <h3>FREE</h3>
                <div className="flex justify-center">
                  <h5 className="w-32 pb-2 md:pb-0">
                    Organize across all apps by hand
                  </h5>
                </div>
                <div className="flex md:items-center justify-center md:mb-5">
                  <h1 className="h1heading">0</h1>
                  <div className="text-left">
                    <p>$</p>
                    <p>Per Month</p>
                  </div>
                </div>
                <p>Pricing Feature</p>
                <p className="py-4">Pricing Feature</p>
                <p>Pricing Feature</p>
                <p className="py-4">Pricing Feature</p>
                <p>Pricing Feature</p>
                <button className="button-primary mt-10">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
