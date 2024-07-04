import { BsDiscord, BsInstagram,BsTwitter, BsYoutube } from 'react-icons/bs'

function Footer() {
    const year=new Date().getFullYear();


  return (
    <>
        <footer className='relative top-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-[#1F1F1F] sm:px-20'>
            <section className='text-lg'>
                Copyright {year} | All Rights Reserved &copy;
            </section>
            <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                <a className='hover:text-yellow-200 transition-all ease-in-out duration-300'>
                    <BsDiscord />  
                </a>
                <a className='hover:text-yellow-200 transition-all ease-in-out duration-300'>
                    <BsYoutube />  
                </a>
                <a className='hover:text-yellow-200 transition-all ease-in-out duration-300'>
                    <BsTwitter />  
                </a>
                <a className='hover:text-yellow-200 transition-all ease-in-out duration-300'>
                    <BsInstagram />  
                </a>
            </section>
        </footer>
    </>
    
  );
}

export default Footer;