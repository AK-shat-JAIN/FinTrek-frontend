import { Link } from "react-router-dom"

import Keepitreal from "../assets/Keepitreal.png"
import Diglab from "../assets/Diglab.png"
import Gravityone from "../assets/Gravityone.png"
import junaie from "../assets/junaie.png"
import RocketLaunch from "../assets/RocketLaunch.png";
import RocketLaunch_2 from "../assets/RocketLaunch_2.png"
import Bluewhale from "../assets/Bluewhale.png"
import Mrfox from "../assets/Mrfox.png"
import Shrommie from "../assets/Shrommie.png"
import Robotica from "../assets/Robotica.png"
import Rustyrobot from "../assets/Rustyrobot.png"
import Animakid from "../assets/Animakid.png"
import Dotgu from "../assets/Dotgu.png"
import Ghiblier from "../assets/Ghiblier.png"
import R1 from "../assets/R1.png"
import r2 from "../assets/r2.png"
import r3 from "../assets/r3.png"
import r4 from "../assets/r4.png"
import M1 from "../assets/M1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"
import D1 from "../assets/D1.png"
import d2 from "../assets/d2.png"
import d3 from "../assets/d3.png"
import d4 from "../assets/d4.png"
import B1 from "../assets/B1.png"
import brush from "../assets/PaintBrush.png"
import B2 from "../assets/B2.png"
import swatches from "../assets/Swatches.png"
import B3 from "../assets/B3.png"
import music from "../assets/MusicNotes.png"
import B4 from "../assets/B4.png"
import camera from "../assets/Camera.png"
import vid from "../assets/VideoCamera.png"
import B5 from "../assets/B5.png"
import magic from "../assets/MagicWand.png"
import B6 from "../assets/B6.png"
import basket from "../assets/Basketball.png"
import B7 from "../assets/B7.png"
import planet from "../assets/Planet.png"
import B8 from "../assets/B8.png"
import eye from "../assets/Eye.png"
import T1 from "../assets/T1.png"
import T2 from "../assets/T2.png"
import T3 from "../assets/T3.png"
import I1 from "../assets/I1.png"
import I2 from "../assets/I2.png"
import I3 from "../assets/I3.png"
import { ArtistCard } from "../Components/ArtistCard";
import { RecommendationCard } from "../Components/RecommendationCard"
import { BrowserCategoryCard } from "../Components/BrowserCategoryCard"
import { TutorialCard } from "../Components/TutorialCard"
import { InfoCard } from "../Components/InfoCard"
import MAIN_IMAGE from "../assets/MAIN_IMAGE.png"

const Home = () => {
  return (
    <div>
      {/* Play now button and bg-image div */}
      <div className="bg-no-repeat md:h-[824px] h-96 overflow-hidden bg-center mx-auto left-0 md:rounded-none rounded-3xl bg-cover md:w-auto w-80  flex justify-center items-center" style={{ backgroundImage: `url(${MAIN_IMAGE})` }}>
        <button className="absolute flex md:w-[361px] w-44 md:h-[89px] h-11 md:px-[74.07px] px-9 justify-center items-center md:rounded-[33px] rounded-2xl  bg-[#A259FF]">
            <img className="md:mr-[17.78px] mr-2 md:w-[29.629px] w-4 md:h-[29.629px] h-4 " src={RocketLaunch}/>
            <p className="text-white text-center font-sans md:text-[23.704px] text-[12px] not-italic font-semibold md:leading-[33.185px] leading-4">Play Now!!</p>
        </button>
      </div>

      {/* Top Rankers section */}
      <div className="md:py-20 py-10 md:px-28 px-16">
        <div className="flex flex-row">
          <div className="flex flex-col mr-auto">
            <p className="text-white font-sans text-3xl not-italic font-semibold md:leading-[45.6px] leading-10 capitalize h-[46px]">Top Rankers</p>
            <p className="text-white font-sans md:text-[22px] text-base not-italic font-normal leading-[35.2px] capitalize h-[35px]">Checkout Our Top Perfomers</p> 
          </div>
          <Link to="/rankings" className="hidden md:block">
              <button className="px-[50px] justify-center items-center rounded-[20px]  border-[#A259FF] border-[2px] border-solid h-[60px] mt-4 flex">
                <img className="w-8 h-6 pr-3 " src={RocketLaunch_2}/>
                <p className="text-white font-sans  text-base not-italic font-semibold leading-[22.4px]">View Rankings</p>
              </button>
          </Link>
        </div>
        <div className="mt-14 flex flex-wrap gap-5 ">
          <ArtistCard image={Keepitreal} name="Keepitreal" sales="34.53"/>
          <ArtistCard image={Diglab} name="Digilab" sales="34.53"/>
          <ArtistCard image={Gravityone} name="GravityOne" sales="34.53"/>
          <ArtistCard image={junaie} name="Junaie" sales="34.53"/>
          <ArtistCard image={Bluewhale} name="Blue Whale" sales="34.53"/>
          <ArtistCard image={Mrfox} name="Mr Fox" sales="34.53"/>
          <ArtistCard image={Shrommie} name="Shrommie" sales="34.53"/>
          <ArtistCard image={Robotica} name="Robotica" sales="34.53"/>
          <ArtistCard image={Rustyrobot} name="Rusty Robot" sales="34.53"/>
          <ArtistCard image={Animakid} name="Animakid" sales="34.53"/>
          <ArtistCard image={Dotgu} name="Dotgu" sales="34.53"/>
          <ArtistCard image={Ghiblier} name="Ghiblier" sales="34.53"/>
        </div>
        <Link to="/rankings">
          <button className="md:hidden w-11/12 h-14 border-2 flex items-center justify-center border-solid rounded-2xl border-[#A259FF] mt-16">
            <img className="mr-3" src={RocketLaunch_2} alt="" />
            <p className="text-white">View Ranking</p>
          </button>
        </Link>
      </div>

      {/* Recommendation Section */}
      <div className="hidden md:block py-20 px-28 ">
        <div className="mb-14">
          <p className="text-white font-sans text-4xl not-italic font-semibold mb-2">Recommendations</p>
          <p className="text-white text-xl not-italic font-normal">Checkout The Trending Collections To Know What Suits You The Best.</p>
        </div>
        <div className="flex flex-wrap gap-6 2xl:gap-44 self-stretch justify-center">
          <RecommendationCard imgP={R1} imgS1={r2} imgS2={r3} imgL={r4} collection="DESN Animals" artist="MrFox"/>
          <RecommendationCard imgP={M1} imgS1={m2} imgS2={m3} imgL={m4} collection="Magic Mushrooms" artist="Shrommie"/>
          <RecommendationCard imgP={D1} imgS1={d2} imgS2={d3} imgL={d4} collection="Disco Machines" artist="BeKind2Robots"/>
        </div>
      </div>

      {/* Browser Categories */}
       <div className="md:py-20 py-10 md:px-28 px-14">
          <p className="text-white font-sans md:text-4xl text-3xl not-italic font-semibold md:mb-5 mb-10">Browse Categories</p>
          <div className="flex flex-wrap md:gap-6 gap-5 2xl:gap-x-32 2xl:gap-y-11 md:justify-center self-stretch">
            <Link to="/browsermarket">
              <BrowserCategoryCard img={B1} icon={brush} name="Art"/>
            </Link>
            <BrowserCategoryCard img={B2} icon={swatches} name="Collectibles"/>
            <BrowserCategoryCard img={B3} icon={music} name="Music"/>
            <BrowserCategoryCard img={B4} icon={camera} name="Photography"/>
            <BrowserCategoryCard img={B5} icon={vid} name="Video"/>
            <BrowserCategoryCard img={B6} icon={magic} name="Utility"/>
            <BrowserCategoryCard img={B7} icon={basket} name="Sport"/>
            <BrowserCategoryCard img={B8} icon={planet} name="Virutal Worlds"/>
          </div>
       </div>
       
       {/* Tutorial and Recommendations */}
       <div className="md:py-20 py-10 md:px-28 px-16">
        <div className="flex flex-row mb-14">
            <div className="flex flex-col mr-auto">
              <p className="hidden md:block text-white text font-sans text-3xl not-italic font-semibold leading-[45.6px] capitalize w-[703px] h-[46px]">Get Tutorial and Recommendation</p>
              <p className="hidden md:block text-white font-sans text-[22px] not-italic font-normal leading-[35.2px] capitalize w-[703px] h-[35px]">learn, invest, grow</p> 
              <p className="md:hidden text-white font-semibold font-sans leading-10 text-2xl mb-2">Discover More NFTs</p>
              <p className="md:hidden text-base font-normal text-white leading-5">Explore new trending NFTs</p>
            </div>
            <Link to="/artist">
                <button className="hidden px-[50px] justify-center items-center rounded-[20px]  border-[#A259FF] border-[2px] border-solid h-[60px] mt-4 md:flex">
                  <img className="w-8 h-6 pr-3 " src={eye}/>
                  <p className="text-white font-sans  text-base not-italic font-semibold leading-[22.4px]">See All</p>
                </button>
            </Link>
          </div>
            <div className="flex flex-wrap gap-6 2xl:gap-x-36 justify-center self-stretch">
            <TutorialCard img={T1} text="How to Sell Your NFTs OpenSea Tutorial"/>
            <TutorialCard img={T2} text="What is a Smart Contract ? "/>
            <TutorialCard img={T3} text="What is Web3 and Blockchain ? "/>
          </div>
          <Link to="/artist">
            <button className="md:hidden  w-11/12 h-14 border-2 flex items-center justify-center border-solid rounded-2xl border-[#A259FF] mt-16">
              <img className="mr-3" src={eye} alt="" />
              <p className="text-white">See All</p>
            </button>
          </Link>
       </div>

       {/* How It works */}
       <div className="md:py-20 py-10 md:px-28 px-16">
        <div className="mb-12">
          <p className="text-white font-sans md:text-4xl text-3xl not-italic font-semibold mb-2">How it works</p>
          <p className="text-white text-xl not-italic font-normal">Find out how to get started</p>
        </div>
        <div className=" flex flex-wrap gap-5 2xl:gap-x-44 justify-center self-stretch">
          <InfoCard icon={I1} p1="Setup Your wallet" p2="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."/>
          <InfoCard icon={I2} p1="Create Collection" p2="Upload your work and setup your collection. Add a description, social links and floor price."/>
          <InfoCard icon={I3} p1="Start Earning" p2="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."/>
        </div>
       </div>

      
      
    </div>
  )
}

export default Home

// mt-[276px] mx-[460px] mb-[459px]
