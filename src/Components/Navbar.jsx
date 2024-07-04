import { FaRegUser } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="pl-12 pr-12 pt-5 pb-5 bg-[#171717] flex flex-row">
      <Link to="/">
        <div className="flex flex-row">
          <img className="w-[48px] h-[55px]" src="https://s3-alpha-sig.figma.com/img/9ede/1459/18b2517fd8b5f8249fd12bbf2a269041?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6JGTm16u0uOqPuZ7u8CrF9v4BFk5UtYZpr1mb4vox-yjpLzZi6ZIyqwttGaESuF-2gaNVFrCIUslKYuX244KwJ0szGkW-wlaBdpXOV4dLwA8kaM82j7NdAIf4oCDangeb-K0WIhihPNYV2e5wrMM4azqkcdxthW~TbkhccUp55DU2P-x8MB8i8VcQubwjon~mPNHqzqruiB2~2GQN-3dUo7Gdp1ecAZXV0fdDCTg6XGsCNofAfwcXdK0fmLb2FJIIwjWkphYx9v9H~1mFPstrY1fCyCvc0IJKoYYGq~Tc5PSCIYEBsWUeEUE2AamJB0Wbr--k5EBWSZ-JLbalkj9w__"/>
          <p className="pt-2 font-sans text-[27.661px] not-italic font-semibold leading-[38.725px] text-white" >FinTrek</p>
        </div>
      </Link>

      <div className="flex flex-row ml-auto">
        <Link to="/rankings">
          <button className="mt-2 flex h-[46px] justify-center items-center px-5 rounded-[20px]">
            <p className="text-white text-center font-sans text-base not-italic font-semibold leading-[22.4px]">Rankings</p>
          </button>
        </Link>

        <Link to="/connectwallet">
          <button className="mt-2 flex h-[46px] justify-center items-center px-5 rounded-[20px] ml-8">
            <p className="text-white text-center font-sans text-base not-italic font-semibold leading-[22.4px]">Connect a wallet</p>
          </button>
        </Link>

        <Link to="/premium">
          <button className="mt-[0px] flex h-[60px] justify-center items-center px-[30px] rounded-[20px] ml-8 border-[#A259FF] border-[3px] border-solid">            <FaCrown className="w-[26px] h-5 mr-3 text-yellow-400"/>
            <p className="text-white text-center font-sans text-base not-italic font-semibold leading-[22.4px]">Get Premium</p>  
          </button>
        </Link>

        <Link to="/signup">
          <button className="mt-[0px] flex h-[60px] justify-center items-center px-[30px] rounded-[20px] ml-8 bg-[#A259FF]">
            <FaRegUser className="w-5 h-5 mr-3 text-white" />
            <p className="text-white text-center font-sans text-base not-italic font-semibold leading-[22.4px]">Sign Up</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;