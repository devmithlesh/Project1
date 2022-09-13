import React from "react";

function Pricing() {
  return (
    <>
      <section style={{ background: "#252B42" }}>
        <div className="w-full py-24 md:px-28 container mx-auto">
          <h2 style={{ color: "#ffffff" }}>Pricing</h2>
          <div className="flex justify-center mb-16 mt-1">
            <h4
              style={{
                width: "500px",
                height: "80px",
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </h4>
          </div>
          {/* card section start */}
          <div className="flex flex-wrap items-stretch justify-center">
            <div className="p-4 lg:w-1/3 flex flex-col items-center">
              <div className="h-full bg-white px-6 py-12 rounded-lg overflow-hidden text-center relative">
                <h3>FREE</h3>
                <div className="flex justify-center">
                  <h5 className="w-32">Organize across all apps by hand</h5>
                </div>
                <div className="flex items-center justify-center mb-5">
                  <h1
                    style={{
                      width: "55px",
                      height: "84px",
                      marginRight: "2px",
                      color: "#252B42",
                    }}
                  >
                    0
                  </h1>
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
            {/* second card */}
            <div className="lg:w-1/3 flex flex-col items-center my-10 md:my-0">
              <div
                className="h-full bg-white px-6 py-12 rounded-lg overflow-hidden text-center relative"
                style={{ background: "#2091F9" }}
              >
                <h3 className="pt-4 text-white">STANDARD</h3>
                <div className="flex justify-center">
                  <h5 className="w-32 text-white">
                    Organize across all apps by hand
                  </h5>
                </div>
                <div className="flex items-center justify-center text-white mb-5">
                  <h1
                    style={{
                      width: "88px",
                      height: "84px",
                      marginRight: "2px",
                      color: "#ffff",
                    }}
                  >
                    10
                  </h1>
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
            {/* third card */}
            <div className="p-4 lg:w-1/3 flex flex-col items-center ">
              <div className="h-full bg-white px-6 py-12 rounded-lg overflow-hidden text-center relative">
                <h3>FREE</h3>
                <div className="flex justify-center">
                  <h5 className="w-32">Organize across all apps by hand</h5>
                </div>
                <div className="flex items-center justify-center mb-5">
                  <h1
                    style={{
                      width: "55px",
                      height: "84px",
                      marginRight: "2px",
                      color: "#252B42",
                    }}
                  >
                    0
                  </h1>
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
