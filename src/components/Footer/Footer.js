import loc from "../assets/social-icons/loc-f.png";
import mob from "../assets/social-icons/mob-f.png";
import Twtr from "../assets/social-icons/twitter.png";
import Fb from "../assets/social-icons/facebook.png";
import Lk from "../assets/social-icons/linkedin.png";
function Footer() {
  return (
    <>
      {/*======================== SCREEN LG VIEW FOOTER ========================*/}
      <footer style={{ background: "#252B42" }} className="md:flex hidden">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap md:px-28 px-6 py-32 w-full text-gray-100 ">
          {/*========================== left side ==========================*/}
          <div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-20">
            {/*================== Column1 ==================*/}
            <div className="flex flex-col items-start">
              <h3 className="text-gray-100">Pages</h3>
              <ul>
                <li className="py-4">Home</li>
                <li className="py-4">Product</li>
                <li className="py-4">Pricing</li>
                <li className="py-4">About</li>
                <li className="py-4">Contact</li>
              </ul>
            </div>
            {/*================== Column2 ==================*/}
            <div className="flex flex-col items-start ">
              <h3 className="text-gray-100">Tomothy</h3>
              <ul>
                <li className="py-4">Eleanor Edwards</li>
                <li className="py-4">Ted Robertson</li>
                <li className="py-4">Annette Russell </li>
                <li className="py-4">Jennie Mckunney</li>
                <li className="py-4">Gloria Richards</li>
              </ul>
            </div>
            {/*================== Column3 ==================*/}
            <div className="flex flex-col items-start">
              <h3 className="text-gray-100">Jane Black</h3>
              <ul>
                <li className="py-4">Philip Jones</li>
                <li className="py-4">Product</li>
                <li className="py-4">Colleen Russell </li>
                <li className="py-4">Marvin Hawkins</li>
                <li className="py-4">Bruce Simmmons</li>
              </ul>
            </div>
          </div>
          {/*============================= Right side =============================*/}
          <div className="flex flex-col">
            {/*====================== Adress ======================*/}
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
            {/*===================== Social icons =====================*/}
            <div className="flex justify-center md:justify-start md:mt-3">
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

export default Footer;
