import React from "react";
import lighting from "./assets/lighting.png";
function Lighting() {
  return (
    <>
      <section className=" py-20">
        {/*==================== mobile view ====================*/}
        <div className="mb-2 inline md:hidden text-center">
          <h3>At your fingertips</h3>
          <h2>Newsletter</h2>
          <p className="py-4">
            Most calendars are designed for teams.
            <br /> Slate is designed for freelancers
          </p>
        </div>

        <div
          className="container mx-auto flex md:px-28 px-6
         md:flex-row flex-col items-center justify-center"
        >
          {/* =================== Left side img ======================= */}
          <div className="md:w-1/2 w-full my-14 md:my-0">
            <img src={lighting} alt="laptop-img" />
          </div>
          <div className="flex flex-col md:items-start items-center justify-center md:w-1/2 w-full md:ml-28">
            {/*================= screen view Right side =================*/}
            <div className="mb-2 hidden md:inline">
              <h3 className="text-left">At your fingertips</h3>
              <h2 className="w-8/12 text-left py-2">
                Lightning fast prototyping
              </h2>
            </div>
            <h3 className="text-left">Subscribe to our Newsletter</h3>
            <p>Available exclusivery on Figmaland</p>

            {/* ================== Button & input box ==================== */}

            <div className="flex items-center md:flex-row flex-col mt-10 w-full">
              <input
                type="email"
                className="button-primary"
                style={{
                  background: "#f4f4f4",
                  border: "1px solid #e8e8e8",
                  padding: "19px 39px",
                  marginRight: "8px",
                  color: " #374754",
                  width: "100%",
                }}
                placeholder="Your Email"
              />
              <button
                className="button-primary mt-4 md:mt-0"
                style={{ width: "100%", height: "58px" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lighting;
