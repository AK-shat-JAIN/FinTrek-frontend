import { BsDiscord, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs'

function Footer() {
    const year=new Date().getFullYear();


  return (
    <>
        <footer className='relative top-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-[#1F1F1F] sm:px-20'>
            <section className='text-6xl'>
                FinTrek 
            </section>
            <section className='flex items-center justify-center gap-5 text-2xl text-white'>
            </section>
        </footer>
    </>
    
  );
}

export default Footer;