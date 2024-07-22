import signup from "../assets/signup.png"
import user from "../assets/User.png"
import email from "../assets/email.png"
import lock from "../assets/LockKey.png"
import signupMobile from "../assets/signup-mobile.png"
import { Link } from "react-router-dom"
const Signup = () => {
  return (
    <div className="flex md:flex-row flex-col  bg-[#2B2B2B] pb-16">
      <div className="mr-14 hidden md:block">
        <img src={signup} alt="" />
      </div>
      <div className="md:hidden">
        <img src={signupMobile} className="w-screen" alt="" />
      </div>
      <div className="md:mt-24 md:px-0 px-[9%] mt-8 md:mb-0 mb-10">
        <div className="md:w-[460px] w-80 text-white md:text-5xl text-4xl font-semibold font-['Work Sans'] capitalize leading-10 mb-5">Create account</div>
        <div className="md:w-[460px] w-80 text-white md:text-[22px] text-base font-normal font-['Work Sans'] capitalize md:leading-9 mb-10">Welcome! enter your details and start creating, collecting and selling NFTs.</div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          
          <div className=" flex bg-white px-5 py-4 w-80 h-11 items-center rounded-2xl">
            <img src={user} />
            <input className="ml-3 border-none focus:outline-none p-1 w-full placeholder-black" type="text" placeholder="Username"/>
          </div>

          <div className=" flex bg-white px-5 py-4 w-80 h-11 items-center rounded-2xl mt-4 ">
            <img src={email} />
            <input className="ml-3 border-none focus:outline-none w-full placeholder-black" type="email" placeholder="Email Address" />
          </div>
          
          <div className=" flex bg-white px-5 py-4 w-80 h-11 items-center rounded-2xl mt-4">
            <img src={lock} />
            <input className="ml-3 border-none focus:outline-none w-full placeholder-black" type="password" placeholder="Password" />
          </div>

          <div className=" flex bg-white px-5 py-4 w-80 h-11 items-center rounded-2xl mt-4 mb-8">
            <img src={lock} />
            <input className="ml-3 border-none focus:outline-none w-full placeholder-black" type="password" placeholder="Confirm Password" />
          </div>

          <button className="w-80 h-12 bg-[#A259FF] justify-center text-white rounded-2xl text-base font-semibold">Create account</button>
        </form>

        <div className="w-96 text-white text-lg font-normal font-['Work Sans'] mt-[6%] md:px-0 px-2">
          Already has an account? &nbsp;
          <Link to="/login">
            <span className="text-[#A259FF] cursor-pointer">
              Log In
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
