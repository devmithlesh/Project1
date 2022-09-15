import React from "react";
import Tuser from "./assets/partners/Tuser.png";
import Tuser2 from "./assets/partners/Tuser2.png";
import IBM from "./assets/partners/ibm.png";
function Testimonls() {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center py-10 md:py-0">
          <h2 className="mb-4">Testimonials</h2>
          <img src={IBM} alt="IBM" className="py-24" />
          <p className="text-center font-bold md:font-normal text-sm md:text-lg md:w-2/4 md:px-10">
            Most calendars are designed for teams.
            <br className="md:hidden inline" /> Slate is designed for
            freelancers who want a<br className="md:hidden inline" /> simple way
            to plan their schedule.
          </p>
          <div className="flex mt-10 items-center">
            {/* ======== LG view ========== */}
            <img src={Tuser} alt="Tuser" className="mr-2 md:inline hidden" />
            {/* ======== mobile view ========== */}
            <img src={Tuser2} alt="Tuser" className="mr-2 inline md:hidden" />
            <div>
              <p className="text-xs">Organize across</p>
              <p className="text-xs">Ui designer</p>
            </div>
          </div>
          <button className="button-primary my-16">More Testimonials</button>
        </div>
      </section>
    </>
  );
}

export default Testimonls;
