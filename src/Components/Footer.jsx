import { Link } from 'react-router-dom';
import { BsDiscord, BsInstagram,BsTwitter, BsYoutube } from 'react-icons/bs'
import LOGO from "../assets/LOGO.png"
function Footer() {
    const year=new Date().getFullYear();


  return (
    <>
        <footer className='relative top-0 bottom-0 py-5 flex flex-col gap-8 text-white bg-[#1F1F1F] sm:px-20'>
            <div className="flex flex-row justify-center items-center">
                <img className="w-[48px] h-[55px]" src="https://s3-alpha-sig.figma.com/img/9ede/1459/18b2517fd8b5f8249fd12bbf2a269041?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6JGTm16u0uOqPuZ7u8CrF9v4BFk5UtYZpr1mb4vox-yjpLzZi6ZIyqwttGaESuF-2gaNVFrCIUslKYuX244KwJ0szGkW-wlaBdpXOV4dLwA8kaM82j7NdAIf4oCDangeb-K0WIhihPNYV2e5wrMM4azqkcdxthW~TbkhccUp55DU2P-x8MB8i8VcQubwjon~mPNHqzqruiB2~2GQN-3dUo7Gdp1ecAZXV0fdDCTg6XGsCNofAfwcXdK0fmLb2FJIIwjWkphYx9v9H~1mFPstrY1fCyCvc0IJKoYYGq~Tc5PSCIYEBsWUeEUE2AamJB0Wbr--k5EBWSZ-JLbalkj9w__"/>
                <p className="pt-2 font-sans text-[27.661px] not-italic font-semibold leading-[38.725px] text-white" >FinTrek</p>
            </div>
            <div className="flex flex-row items-center justify-around gap-5">
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
                <div className="flex-col justify-start items-start gap-[15px] flex">
                    <div className="text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">Explore</div>
                    <div className="w-[133px] h-[106px] flex-col justify-start items-start gap-5 inline-flex">
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
                    <div className="w-[330px]">
                        <p className="text-stone-300 text-base font-normal font-['Work Sans'] leading-snug inline">Get exclusive boost and powerups by purchasing our </p>
                        <p className="text-yellow-400 text-base font-normal font-['Work Sans'] leading-snug inline cursor-pointer">premium model.</p>
                    </div>
                    <div className="w-[420px] h-[60px] pl-5 py-4 bg-white rounded-[20px] justify-start items-center gap-3 inline-flex">
                        <input type='text' placeholder='Enter your email here' className="grow shrink basis-0 text-neutral-900 text-base font-normal font-['Work Sans'] leading-snug" />
                        <div className="w-[179px] px-[50px] py-5 bg-purple-500 rounded-[20px] justify-end items-center gap-3 flex cursor-pointer">
                            <div className="text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">Subscribe</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
    
  );
}

export default Footer;