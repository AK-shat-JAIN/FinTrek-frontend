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

import { RankCard } from "../Components/RankCard"

const Rankings = () => {
  return (
    <div className="py-5 flex flex-col">
      <div className="pl-52 pb-14 bg-neutral-900 flex-col justify-start gap-10 inline-flex">
        <div className="flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-white text-[51px] font-semibold font-['Work Sans'] capitalize">Top Rankers</div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch text-white text-[22px] font-normal font-['Work Sans']">Check out top ranking NFT artists on the NFT Marketplace.</div>
            </div>
        </div>
      </div>

      <div className="px-20 bg-neutral-900 flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="w-full justify-start items-start inline-flex">
          <div className="grow shrink basis-0 px-[30px] border-b-2 border-zinc-500 justify-center items-center gap-4 flex">
              <div className="text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize">Today</div>
          </div>
          <div className="grow shrink basis-0 px-[30px] justify-center items-center gap-4 flex">
              <div className="text-center text-zinc-500 text-[22px] font-semibold font-['Work Sans'] capitalize">This Week</div>
          </div>
          <div className="grow shrink basis-0 px-[30px] justify-center items-center gap-4 flex">
              <div className="text-center text-zinc-500 text-[22px] font-semibold font-['Work Sans'] capitalize">This Month</div>
          </div>
          <div className="grow shrink basis-0 px-[30px] justify-center items-center gap-4 flex">
              <div className="text-center text-zinc-500 text-[22px] font-semibold font-['Work Sans'] capitalize">All Time</div>
          </div>
        </div>
      </div>

      <div className="py-9 px-40">
        <div className="flex flex-wrap gap-6 2xl:gap-x-12 2xl:gap-y-6 justify-center self-stretch">
                  
          <div className="w-[1050px] h-[46px] py-3 rounded-[20px] border border-neutral-700 flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="w-[1050px] px-5 justify-between items-center inline-flex">
              <div className="h-[22px] justify-start items-center gap-5 flex">
                <div className="w-[30px] text-center text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">#</div>
                <div className="text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">Artist</div>
              </div>
              <div className="justify-end items-center gap-5 flex">
                <div className="w-40 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="self-stretch text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">Change</div>
                </div>
                <div className="w-40 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="self-stretch text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">NFTs Sold</div>
                </div>
                <div className="w-40 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="self-stretch text-zinc-500 text-base font-normal font-['Space Mono'] leading-snug">Volume</div>
                </div>
              </div>
            </div>
          </div>
          
          <RankCard rank="1" img={Keepitreal} name="keepitreal" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="2" img={Diglab} name="diglab" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="3" img={Gravityone} name="gravityone" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="4" img={junaie} name="junaie" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="5" img={RocketLaunch} name="rocketlaunch" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="6" img={RocketLaunch_2} name="rocketlaunch" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="7" img={Bluewhale} name="bluewhale" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="8" img={Mrfox} name="mrfox" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="9" img={Shrommie} name="shrommie" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="10" img={Robotica} name="robotica" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="11" img={Rustyrobot} name="rustyrobot" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="12" img={Animakid} name="animakid" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="13" img={Dotgu} name="dotgu" change="1.41" nftsold="602" vol="12.4"/>
          <RankCard rank="14" img={Ghiblier} name="ghiblier" change="1.41" nftsold="602" vol="12.4"/>
          

        </div>
      </div>
    </div>
  )
}

export default Rankings
