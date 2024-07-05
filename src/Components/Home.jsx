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
import { IMAGE_1 } from "../utils/constants"
import { ArtistCard } from "./ArtistCard";
import { RecommendationCard } from "./RecommendationCard"

const Home = () => {
  return (
    <div>
      {/* Play now button and bg-image div */}
      <div className="bg-no-repeat h-[824px] overflow-hidden bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${IMAGE_1})` }}>
        <button className="absolute flex w-[361px] h-[89px] px-[74.07px] justify-center items-center rounded-[33px] bg-[#A259FF]">
            <img className="mr-[17.78px] w-[29.629px] h-[29.629px] " src={RocketLaunch}/>
            <p className="text-white text-center font-sans text-[23.704px] not-italic font-semibold leading-[33.185px]">Play Now!!</p>
        </button>
      </div>

      {/* Top Rankers section */}
      <div className="py-20 px-28">
        <div className="flex flex-row">
          <div className="flex flex-col mr-auto">
            <p className="text-white text font-sans text-3xl not-italic font-semibold leading-[45.6px] capitalize w-[703px] h-[46px]">Top Rankers</p>
            <p className="text-white font-sans text-[22px] not-italic font-normal leading-[35.2px] capitalize w-[703px] h-[35px]">Checkout Our Top Perfomers</p> 
          </div>
          <Link to="ranking">
              <button className=" px-[50px] justify-center items-center rounded-[20px]  border-[#A259FF] border-[2px] border-solid h-[60px] mt-4 flex">
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
      </div>

      {/* Recommendation Section */}
      <div className="py-20 px-28">
        <div className="mb-14">
          <p className="text-white font-sans text-4xl not-italic font-semibold mb-2">Recommendations</p>
          <p className="text-white text-xl not-italic font-normal">Checkout The Trending Collections To Know What Suits You The Best.</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <RecommendationCard imgP={R1} imgS1={r2} imgS2={r3} imgL={r4} collection="DESN Animals" artist="MrFox"/>
          <RecommendationCard imgP={M1} imgS1={m2} imgS2={m3} imgL={m4} collection="Magic Mushrooms" artist="Shrommie"/>
          <RecommendationCard imgP={D1} imgS1={d2} imgS2={d3} imgL={d4} collection="Disco Machines" artist="BeKind2Robots"/>
        </div>
      </div>

      {/* Browser Categories */}
       
      
    </div>
  )
}

export default Home

// mt-[276px] mx-[460px] mb-[459px]
