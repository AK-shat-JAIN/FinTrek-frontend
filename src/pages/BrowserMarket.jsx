import { NftCard } from "../Components/NftCard"
import B1 from "../assets/B1.png"
import Mushroom from "../assets/Magic Mashroom.png"
import robot from "../assets/happyrobot.png"
import fox from "../assets/Mrfox.png"
import Shrommie from "../assets/Shrommie.png"
import robot2 from "../assets/happyrobot2.png"
import cherry from "../assets/Cherry.png"
import space from "../assets/SpaceTravel.png"
import sunset from "../assets/sunset.png"

export const BrowserMarket = () => {
    return(
        <div className="mx-24">
            <div className="mb-14 my-20 ">
                <p className="text-white font-sans text-4xl not-italic font-semibold mb-2">Browse Marketplace</p>
                <p className="text-white text-xl not-italic font-normal mb-8">Browse through more than 50k NFTs on the NFT Marketplace.</p>

                <div className="w-[1050px] h-16 rounded-3xl border-[#3B3B3B] border-solid border-2 ">
                    <input className="my-4 ml-5 w-[960px] h-6 border-none focus:outline-none text-white bg-[#171717] font-sans text-base"  type="text" placeholder="Search your favourite NFTs" />
                </div>
            </div>

        
            <div className=" justify center items-center w-[1050px] h-10 mx-20 flex gap-16">
                <button className="text-xl text-[#858584] w-2/6 mx-7 items-center  hover:text-white  hover:decoration-white">
                        <p className="font-semibold hover:underline hover:underline-offset-8">NFTs</p>
                </button>
                
                <button className="text-xl text-[#858584] justify-center w-2/6 mx-7 items-center  hover:text-white  hover:decoration-white">
                        <p className=" font-semibold hover:underline hover:underline-offset-8">Collections</p>
                </button>
            </div>

            <div className="my-14 flex flex-wrap gap-9">
                <NftCard bgimg={Mushroom} cardname="The Great Wave" avatar={Shrommie} name="Animakid" price="0.5" bid="0.7" />
                <NftCard bgimg={robot} cardname="Happy Robot 032" avatar={fox} name="BeKind2Robots" price="0.5" bid="0.7" />
                <NftCard bgimg={robot2} cardname="Happy Robot 024" avatar={fox} name="BeKind2Robots" price="0.5" bid="0.7" />
                <NftCard bgimg={cherry} cardname="Cherry Blossom Girl 035" avatar={fox} name="MoonDancer" price="0.5" bid="0.7" />
                <NftCard bgimg={space} cardname="Space Travel" avatar={fox} name="NebulaKid" price="0.5" bid="0.7" />
                <NftCard bgimg={sunset} cardname="Sunset Dimension" avatar={Shrommie} name="Animakid" price="0.5" bid="0.7" />
                <NftCard bgimg={cherry} cardname="Cherry Blossom Girl 035" avatar={fox} name="MoonDancer" price="0.5" bid="0.7" />
                <NftCard bgimg={robot2} cardname="Happy Robot 024" avatar={fox} name="BeKind2Robots" price="0.5" bid="0.7" />
                <NftCard bgimg={space} cardname="Space Travel" avatar={fox} name="NebulaKid" price="0.5" bid="0.7" />
            </div>
        </div>
    )
}