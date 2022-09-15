import React from "react";
import img1 from "./assets/partners/amazon1.png";
import img2 from "./assets/partners/amazon2.png";
import img3 from "./assets/partners/dropbox.png";
import img4 from "./assets/partners/google1.png";
import img5 from "./assets/partners/google2.png";
import img6 from "./assets/partners/microsoft.png";
import img7 from "./assets/partners/uber1.png";
import img8 from "./assets/partners/uber2.png";
function Partners() {
  return (
    <>
      <section>
        <div className="container mx-auto md:px-28 px-6 py-28">
          <div className="flex flex-col items-center text-center w-full mb-16">
            {/*================  Main in that section ================*/}
            <h2>Partners</h2>
            <h4
              style={{ fontSize: "28px" }}
              className="mb-10 md:mb-0 w-full md:mt-0 mt-2"
            >
              Most calendars are designed for teams.
              <br className="md:inline hidden" /> Slate is designed for
              freelancers
            </h4>
          </div>

          {/*================= company log box style =================*/}

          <div className="flex justify-center md:flex-row flex-col my-24 md:mb-0">
            {/* ================================== Logo Box1 ================================= */}
            <div className="p-8 border border-gray-200 flex flex-col items-center justify-center">
              <p>Client Name</p>
              <img
                src={img4}
                alt="company-logo"
                className="hover:scale-110 duration-300"
              />
            </div>
            {/* ================================== Logo Box2 ================================= */}
            <div className="p-8 border border-gray-200 flex flex-col items-center justify-center my-10 md:my-0">
              <p className="mb-1">Client Name</p>
              <img
                src={img1}
                alt="company-logo"
                className="hover:scale-110 duration-300"
              />
            </div>
            {/* ================================== Logo Box3 ================================= */}
            <div className="p-8 border border-gray-200 flex flex-col items-center justify-center">
              <p>Client Name</p>
              <img
                src={img6}
                alt="company-logo"
                className="hover:scale-110 duration-300"
              />
            </div>
            {/* ================================== Logo Box4 ================================= */}
            <div className="p-8 border border-gray-200 flex-col items-center justify-center md:inline hidden">
              <p>Client Name</p>
              <img
                src={img7}
                alt="company-logo"
                className="hover:scale-110 duration-300"
              />
            </div>
            {/* ================================== Logo Box5 ================================= */}
          </div>
          <div className="justify-center mb-16 md:flex hidden">
            <div className="p-8 border border-gray-200 flex flex-col items-center justify-center">
              <p>Client Name</p>
              <img
                src={img3}
                alt="company-logo"
                className="hover:scale-110 duration-300"
              />
            </div>
            {/* ================================== Logo Box6 ================================= */}
            <div className="p-8 border border-gray-200 flex flex-col items-center justify-center">
              <p>Client Name</p>
              <img
                src={img5}
                alt="company-logo"
                className="hover:scale-110 duration-300"
              />
            </div>
            {/* ================================== Logo Box7 ================================= */}
            <div className="p-8 border border-gray-200 flex flex-col items-center justify-center">
              <p>Client Name</p>
              <img
                src={img8}
                alt="company-logo"
                className="hover:scale-110 duration-300"
              />
            </div>
            {/* ================================== Logo Box8 ================================= */}
            <div className="p-8 border border-gray-200 flex flex-col items-center justify-center">
              <p className="mb-1">Client Name</p>
              <img
                src={img2}
                alt="company-logo"
                className="hover:scale-110 duration-300"
              />
            </div>
          </div>
          {/* =============== Bottom Button ============ */}
          <div className="flex justify-center items-center">
            <button className="button-primary">Try For Free</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
