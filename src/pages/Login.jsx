import login from "../assets/login.png"
import email from "../assets/email.png"
import lock from "../assets/LockKey.png"
const Login = () => {
  return (
    <div className="flex flex-row bg-[#2B2B2B]">
      <div className="w-[50%]">
        <img src={login} alt="" />
      </div>
      <div className="mt-40">
        <div className="w-[460px] text-white text-5xl font-semibold font-['Work Sans'] capitalize leading-10 mb-5">Login</div>
        <div className="w-[460px] text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9 mb-10">Welcome! enter your details and start creating, collecting and selling NFTs.</div>

        <div className=" flex bg-white px-5 py-4 w-80 h-11 items-center rounded-2xl mt-4 ">
          <img src={email} />
          <input className="ml-3 border-none focus:outline-none w-full placeholder-black" type="email" placeholder="Email Address" />
        </div>
        
        <div className=" flex bg-white px-5 py-4 w-80 h-11 items-center rounded-2xl mt-4 mb-8">
          <img src={lock} />
          <input className="ml-3 border-none focus:outline-none w-full placeholder-black" type="password" placeholder="Password" />
        </div>

        <button className="w-80 h-12 bg-[#A259FF] justify-center text-white rounded-2xl text-base font-semibold">Login</button>
      </div>
    </div>
  )
}

export default Login
