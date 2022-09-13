import React from "react";
import twr from "../assets/contact-img/twtr.png";
import Facb from "../assets/contact-img/fb.png";
import Linkd from "../assets/contact-img/linkd.png";
import Loc from "../assets/contact-img/locn.png";
import Mob from "../assets/contact-img/mob.png";
import Mail from "../assets/contact-img/mail.png";
import Map from "../assets/contact-img/map.png";
import "./Contact.css";

const Cdata = [
  {
    img: Loc,
    text: "6386 Spring St undefined Anchorage, Georgia 12473 United States",
    alt: "Location",
  },
  {
    img: Mob,
    text: "(843) 555-0130",
    alt: "Mobile",
  },
  {
    img: Mail,
    text: "willie.jennings@example.com",
    alt: "E-mail",
  },
];
// function start
function Contact() {
  return (
    <>
      <div className="container mx-auto  md:px-28 px-6 py-32 w-full">
        <h2>Contact Us</h2>
        <div className="my-4 md:mt-0 flex justify-center">
          <h4 className="md:w-1/2 ">
            Most calendars are designed for teams.
            <span className="md:block hidden">
              Slate is designed for freelancers
            </span>
          </h4>
        </div>
        <div className="flex items-center md:flex-row md:flex-nowrap flex-wrap-reverse mt-12 ">
          {/* form left side */}
          <div className="flex justify-center w-full">
            <form className=" border p-4 rounded-lg box-shadow form-wh">
              <h3 className="my-5">Contact Us</h3>
              <input
                type="text"
                placeholder="Your Name"
                className=" my-4 w-full py-4 px-4 text-xs rounded-3xl bg-imput"
                name="fullName"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="my-4 w-full py-4 px-4 text-xs rounded-3xl bg-imput"
                name="email"
                required
              />

              <textarea
                placeholder="Your Massage"
                className=" my-10 w-full py-2 px-2 text-xs h-32 rounded-xs bg-imput"
                name="textBox"
              ></textarea>
              <button className="btn-contact">Send</button>
            </form>
          </div>
          {/* right side contact */}
          <div className="md:pl-12 flex md:flex-wrap flex-wrap-reverse justify-center">
            <div className="grid md:grid-cols-3 grid-row-1 py-12 md:py-0">
              {Cdata.map((val, ind) => {
                return (
                  <div className="flex items-center md:flex-col my-2">
                    <img src={val.img} alt={val.alt} className="pr-4 md:pr-0" />
                    <h5 className=" heading-c text-left md:text-center">
                      {val.text}
                    </h5>
                  </div>
                );
              })}
            </div>
            <div className="md:flex justify-center mt-10 w-full hidden">
              <img src={Map} alt="map" className="w-8/12" />
            </div>
            <div className="flex items-center md:justify-start justify-center w-full mt-10 ">
              <img src={twr} alt="twitter" className="w-6" />
              <img src={Facb} alt="facebook" className="w-6 md:mx-6 mx-10" />
              <img src={Linkd} alt="" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
