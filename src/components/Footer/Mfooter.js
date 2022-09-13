import loc from "../assets/social-icons/loc-f.png";
import mob from "../assets/social-icons/mob-f.png";
import Twtr from "../assets/social-icons/twitter.png";
import Fb from "../assets/social-icons/facebook.png";
import Lk from "../assets/social-icons/linkedin.png";
function Mfooter() {
  return (
    <>
      <footer style={{ background: "#252B42" }} className="flex md:hidden">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap md:px-28 px-6 py-32 w-full text-gray-100 ">
          {/* left side */}
          <div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-20">
            <div className="flex flex-col items-start">
              <h3 className="text-gray-100">Annette Steward</h3>
              <ul>
                <li className="py-4">Jennie Cooper</li>
                <li className="py-4">Julie Henry</li>
                <li className="py-4">Johnny Murphy</li>
                <li className="py-4">Gregory Mccoy</li>
                <li className="py-4">Marvin Mickinney</li>
              </ul>
            </div>
            <div className="flex flex-col items-start ">
              <h3 className="text-gray-100">Annette Steward</h3>
              <ul>
                <li className="py-4">Jennie Cooper</li>
                <li className="py-4">Julie Henry</li>
                <li className="py-4">Johnny Murphy</li>
                <li className="py-4">Gregory Mccoy</li>
                <li className="py-4">Marvin Mickinney</li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-100">Annette Steward</h3>
              <ul>
                <li className="py-4">Jennie Cooper</li>
                <li className="py-4">Julie Henry</li>
                <li className="py-4">Johnny Murphy</li>
                <li className="py-4">Gregory Mccoy</li>
                <li className="py-4">Marvin Mickinney</li>
              </ul>
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col">
            <div className="flex flex-col md:my-0 my-10">
              <div className="flex items-center">
                <img src={loc} alt="location" className="w-8" />
                <p className="text-gray-100">7480 Mockingbird Hill undefined</p>
              </div>
              <div className="flex items-center ml-2 my-5">
                <img src={mob} alt="mobile" className="w-4 mr-4" />
                <p className="text-gray-100"> (239) 555-0108 </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={Twtr} alt="twitter" />
              <img src={Fb} alt="facebook" className="mx-5" />
              <img src={Lk} alt="linkedin" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Mfooter;
