import { Link } from 'react-router-dom';
import { BsDiscord, BsInstagram,BsTwitter, BsYoutube } from 'react-icons/bs'
import LOGO from "../assets/LOGO.png"
function Footer() {
    const year=new Date().getFullYear();


  return (
    <>
        <footer className='py-5 px-7 flex flex-col gap-8 text-white bg-[#1F1F1F]'>
            <div className="flex flex-row md:justify-center md:items-center">
                <img className="h-[55px]" src={LOGO}/>
                <p className="pt-2 font-sans text-[27.661px] not-italic font-semibold leading-[38.725px] text-white" >FinTrek</p>
            </div>
            <div className="text-stone-300 md:text-center font-normal font-['Work Sans'] leading-snug">NFT marketplace UI created with Anima for Figma.</div>
            <div className="flex flex-col md:flex-row md:items-center justify-around gap-5">
                <div className="flex-col justify-start items-start gap-[15px] flex">
                    <div className="w-[238px] h-[18px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">Join our community</div>
                    <div className="justify-start items-start gap-2.5 inline-flex">
                        <a className='hover:text-purple-500 transition-all ease-in-out duration-300 cursor-pointer'>
                            <BsDiscord />  
                        </a>
                        <a className='hover:text-purple-500 transition-all ease-in-out duration-300 cursor-pointer'>
                            <BsYoutube />  
                        </a>
                        <a className='hover:text-purple-500 transition-all ease-in-out duration-300 cursor-pointer'>
                            <BsTwitter />  
                        </a>
                        <a className='hover:text-purple-500 transition-all ease-in-out duration-300 cursor-pointer'>
                            <BsInstagram />  
                        </a>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-[10px] flex">
                    <div className="text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">Explore</div>
                    <div className="w-[133px] h-[106px] flex-col justify-start items-start gap-3 inline-flex">
                        <Link to='/browsermarket'>
                            <div className="text-stone-300 text-base font-normal font-['Work Sans'] leading-snug cursor-pointer">Marketplace</div>
                        </Link>
                        <Link to='/rankings'> 
                            <div className="text-stone-300 text-base font-normal font-['Work Sans'] leading-snug cursor-pointer">Rankings</div>
                        </Link>
                        <Link to='/connectwallet'>
                            <div className="text-stone-300 text-base font-normal font-['Work Sans'] leading-snug cursor-pointer">Connect a wallet</div>
                        </Link>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-[15px] flex">
                    <div className="text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">Join our weekly digest</div>
                    <div className="w-[330px]">
                        <p className="text-stone-300 text-base font-normal font-['Work Sans'] leading-snug inline">Get exclusive boost and powerups by purchasing our </p>
                        <p className="text-yellow-400 text-base font-normal font-['Work Sans'] leading-snug inline cursor-pointer">premium model.</p>
                    </div>
                    <form className='w-[100%]'>
                        <div className='w-[100%] flex flex-col md:flex-row gap-2'>
                            <input type='text' placeholder='Enter your email here' className="px-5 py-3 md:py-5 md:grow inline bg-white rounded-[20px] text-neutral-900 text-base font-normal font-['Work Sans'] leading-snug" />
                            <input type='submit' className="px-10 py-3 md:py-5 bg-purple-500 rounded-[20px] text-center cursor-pointer text-white text-base font-semibold font-['Work Sans'] leading-snug" value="Subscribe"/>
                        </div>
                    </form>
                </div>
            </div>
        </footer>   
    </>
    
  );
}

export default Footer;