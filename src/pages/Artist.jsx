import { Link } from 'react-router-dom'
import artist from '../assets/artist.png'
import avatar from '../assets/Avatar.png'
import { FaPlus } from 'react-icons/fa'
import { FaCopy } from 'react-icons/fa'
import { BsDiscord, BsInstagram,BsTwitter, BsYoutube } from 'react-icons/bs'
import { NftCard } from '../Components/NftCard'

import B1 from "../assets/B1.png"
import B2 from "../assets/B2.png"
import B3 from "../assets/B3.png"
import B4 from "../assets/B4.png"
import B5 from "../assets/B5.png"
import B6 from "../assets/B6.png"
import B7 from "../assets/B7.png"
import B8 from "../assets/B8.png"
import T1 from "../assets/T1.png"

export const Artist = () => {
    return (
        <div className="pt-5 pb-5 flex flex-col">
            <img className='' src={artist} alt="" />
            <div className="pl-44 mt-[-5rem] justify-start items-start inline-flex">
                <div className="rounded-[20px] border-2 border-zinc-800 justify-start items-start gap-2.5 flex">
                    <div className="h-[120px] justify-center items-center flex">
                        <img className="z-50 h-[120px] rounded-[20px]" src={avatar} />
                    </div>
                </div>
            </div>

            <div className="pt-10 mt-[-3rem] bg-zinc-800 flex-col justify-end items-center inline-flex">
                <div className="py-10 justify-start items-start gap-[300px] inline-flex">
                    <div className="flex-col justify-start items-start gap-[30px] inline-flex">
                        <div className="text-white text-[51px] font-semibold font-['Work Sans'] capitalize leading-[56.10px]">Animakid</div>
                        <div className="h-[74px] pr-[176.67px] rounded-[20px] justify-start items-start gap-5 inline-flex">
                            <div className="w-[156.67px] self-stretch rounded-[20px] flex-col justify-start items-start inline-flex">
                                <div className="self-stretch text-white text-[28px] font-bold font-['Space Mono'] capitalize leading-[39.20px]">250k+</div>
                                <div className="self-stretch text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">Score</div>
                            </div>
                            <div className="w-[156.67px] self-stretch rounded-[20px] flex-col justify-start items-start inline-flex">
                                <div className="self-stretch text-white text-[28px] font-bold font-['Space Mono'] capitalize leading-[39.20px]">50+</div>
                                <div className="self-stretch text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">NFTs Sold</div>
                            </div>
                        </div>
                        <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch text-zinc-500 text-[22px] font-bold font-['Space Mono'] capitalize leading-9">Bio</div>
                            <div className="self-stretch text-white text-[22px] font-normal font-['Work Sans'] capitalize leading-9">The internet's friendliest designer kid.</div>
                        </div>
                        <div className="self-stretch h-[77px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="text-zinc-500 text-[22px] font-bold font-['Space Mono'] capitalize leading-9">Links</div>
                            <div className="justify-start items-start gap-2.5 inline-flex text-white text-lg">
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
                    </div>
                    <div className="justify-end items-start gap-5 flex">
                        <div className="h-[60px] px-[50px] bg-purple-500 rounded-[20px] justify-center items-center gap-3 flex">
                            <FaCopy className='text-white' />
                            <div className="text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">0xc0E3...B79C</div>
                        </div>
                        <div className="h-[60px] px-[30px] rounded-[20px] border-2 border-purple-500 justify-center items-center gap-3 flex">
                            <FaPlus className="text-purple-500" />
                            <div className="text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">Follow</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-20 grow shrink h-[60px] justify-start items-start flex">
                <div className="grow shrink basis-0 h-[60px] px-[30px] border-b-2 border-zinc-500 justify-center items-center gap-4 flex">
                    <div className="text-center text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Created</div>
                    <div className="px-2.5 py-[5px] bg-zinc-500 rounded-[20px] justify-start items-center gap-2.5 flex">
                        <div className="text-white text-base font-normal font-['Space Mono'] leading-snug">302</div>
                    </div>
                </div>
                <div className="grow shrink basis-0 h-[60px] px-[30px] justify-center items-center gap-4 flex">
                    <div className="text-center text-zinc-500 text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">owned</div>
                    <div className="px-2.5 py-[5px] bg-neutral-900 rounded-[20px] justify-start items-center gap-2.5 flex">
                        <div className="text-white text-base font-normal font-['Space Mono'] leading-snug">67</div>
                    </div>
                </div>
                <div className="grow shrink basis-0 h-[60px] px-[30px] justify-center items-center gap-4 flex">
                    <div className="text-center text-zinc-500 text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Collection</div>
                    <div className="px-2.5 py-[5px] bg-neutral-900 rounded-[20px] justify-start items-center gap-2.5 flex">
                        <div className="text-white text-base font-normal font-['Space Mono'] leading-snug">4</div>
                    </div>
                </div>
            </div>

            <div className="py-9 px-40">
                <div className="flex flex-wrap gap-6 2xl:gap-x-12 2xl:gap-y-11 justify-center self-stretch">
                    <NftCard bgimg={B1} cardname="The Great Wave" avatar={avatar} name="Animakid" price="0.5" bid="0.7" />
                    <NftCard bgimg={B2} cardname="The Great Wave" avatar={avatar} name="Animakid" price="0.5" bid="0.7" />
                    <NftCard bgimg={B3} cardname="The Great Wave" avatar={avatar} name="Animakid" price="0.5" bid="0.7" />
                    <NftCard bgimg={B4} cardname="The Great Wave" avatar={avatar} name="Animakid" price="0.5" bid="0.7" />
                    <NftCard bgimg={B5} cardname="The Great Wave" avatar={avatar} name="Animakid" price="0.5" bid="0.7" />
                    <NftCard bgimg={B6} cardname="The Great Wave" avatar={avatar} name="Animakid" price="0.5" bid="0.7" />
                    <NftCard bgimg={B7} cardname="The Great Wave" avatar={avatar} name="Animakid" price="0.5" bid="0.7" />
                    <NftCard bgimg={B8} cardname="The Great Wave" avatar={avatar} name="Animakid" price="0.5" bid="0.7" />
                    <NftCard bgimg={T1} cardname="The Great Wave" avatar={avatar} name="Animakid" price="0.5" bid="0.7" /> 
                </div>
            </div>
        </div>
    )
}

export default Artist