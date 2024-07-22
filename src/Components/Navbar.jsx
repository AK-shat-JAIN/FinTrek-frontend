import { FaRegUser } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LOGO from "../assets/LOGO.png"
const Navbar = () => {
  return (
    <div className="md:pl-12 pl-5 md:pr-12 pr-4 md:py-5 py-4 bg-[#171717] flex flex-row">
      <Link to="/">
        <div className="flex flex-row md:mt-0 mt-1">
          <img className="md:w-16 md:h-14 w-5 h-4 md:my-0 my-1" src={LOGO}/>
          <p className="md:pt-2 font-sans md:text-[27.661px] text-sm not-italic font-semibold md:leading-[38.725px] text-white" >FinTrek</p>
        </div>
      </Link>

      <div className="flex flex-row ml-auto ">
        <Link to="/rankings" className="hidden md:block">
          <button className="mt-2 flex h-[46px] justify-center items-center px-5 rounded-[20px]">
            <p className="text-white text-center font-sans text-base not-italic font-semibold leading-[22.4px]">Rankings</p>
          </button>
        </Link>

        <Link to="/connectwallet" className="hidden md:block">
          <button className="mt-2 flex h-[46px] justify-center items-center px-5 rounded-[20px] ml-8">
            <p className="text-white text-center font-sans text-base not-italic font-semibold leading-[22.4px]">Connect a wallet</p>
          </button>
        </Link>

        <Link to="/premium">
          <button className="mt-[0px] flex md:h-[60px] h-7 md:w-auto w-24 justify-center items-center md:px-[30px] md:rounded-[20px] rounded-lg md:ml-8 ml-20 border-[#A259FF] md:border-[3px] border-2 border-solid">
            <FaCrown className="md:w-[26px] w-3 md:h-5 h-2 md:mr-3 mr-1 text-yellow-400"/>
            <p className="text-white text-center font-sans text-[7px] md:text-base not-italic font-semibold md:leading-[22.4px] leading-3">Get Premium</p>  
          </button>
        </Link>

        <Link to="/signup">
          <button className="mt-[0px] flex md:h-[60px] h-7 md:w-44 w-20 justify-center items-center  md:rounded-[20px] rounded-lg ml-8 bg-[#A259FF] md:mr-0 mr-6">
            <FaRegUser className="md:w-5 md:h-5 w-2 h-2 md:mr-3 mr-1 text-white" />
            <p className="text-white text-center font-sans md:text-base text-[8px] not-italic font-semibold leading-3 md:leading-[22.4px]">Sign Up</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;