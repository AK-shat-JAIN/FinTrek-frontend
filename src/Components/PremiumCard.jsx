export const PremiumCard = (props) => {
    return (
    <div className="w-80 h-[535px] pb-[0.12px] bg-zinc-700/opacity-40 rounded-2xl backdrop-blur-[37.30px] flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[535px] px-11 py-9 flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch h-[458px] flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="w-[274.27px] h-[24.14px] justify-center items-center inline-flex mb-1">
                        <div className="w-[274.27px] self-stretch text-white text-xl font-semibold font-['Inter']">{props.title}</div>
                    </div>
                    <div className="w-[274.27px] h-[24.14px] justify-center items-center inline-flex">
                        <div className="w-[274.27px] self-stretch text-white text-[13.16px] font-normal font-['Inika']">Membership</div>
                    </div>
                    <div className="w-[274.27px] justify-start items-end gap-[6.58px] inline-flex mb-7">
                        <div className="text-white text-[43.88px] font-medium font-['Inter']">${props.dollar}</div>
                        <div className="w-[89.96px] h-[23.04px] text-stone-50 text-[13.16px] font-semibold font-['Inter']">/Month</div>
                    </div>
                    {/* <div className="self-stretch h-[24.14px] text-white/opacity-0 text-[13.16px] font-normal font-['Inika']">Save $30</div> */}
                </div>
                <div className=" w-[230.39px] h-[0px] border border-zinc-400"></div>
                <div className="w-[230.39px] h-[182.12px] relative">
                    <div className="h-[15px] left-0 top-0 absolute flex-col justify-start items-start gap-[14.26px] inline-flex">
                        <div className="h-[15px] flex-col justify-start items-start gap-[12.07px] flex">
                            <div className="self-stretch justify-center items-center gap-[14.26px] inline-flex">
                                <div className="w-[6.58px] h-[6.58px] relative">
                                    <div className="w-[5.49px] h-[5.49px] left-0 top-[0.55px] absolute bg-white rounded-full" />
                                </div>
                                <div className=" grow shrink basis-0 text-white text-[13.16px] font-medium font-['Work Sans']">Boosted Game Score Upto 3 Times</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[15px] left-0 top-[38.40px] absolute flex-col justify-start items-start gap-[14.26px] inline-flex">
                        <div className="h-[15px] flex-col justify-start items-start gap-[12.07px] flex">
                            <div className="self-stretch justify-center items-center gap-[14.26px] inline-flex">
                                <div className="w-[6.58px] h-[6.58px] relative">
                                    <div className="w-[5.49px] h-[5.49px] left-0 top-[0.55px] absolute bg-white rounded-full" />
                                </div>
                                <div className="grow shrink basis-0 text-white text-[13.16px] font-medium font-['Work Sans']">Get Unlimited Free Tutorials </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[15px] left-0 top-[76.80px] absolute flex-col justify-start items-start gap-[14.26px] inline-flex">
                        <div className="h-[15px] flex-col justify-start items-start gap-[12.07px] flex">
                            <div className="self-stretch justify-center items-center gap-[14.26px] inline-flex">
                                <div className="w-[6.58px] h-[6.58px] relative">
                                    <div className="w-[5.49px] h-[5.49px] left-0 top-[0.55px] absolute bg-white rounded-full" />
                                </div>
                                <div className="grow shrink basis-0 text-white text-[13.16px] font-medium font-['Work Sans']">Connect From Anywhere</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[17.55px] left-0 top-[153.59px] absolute" />
                </div>
                <div className="self-stretch h-[48.91px] backdrop-blur-[3.29px] flex-col justify-center items-start gap-[10.97px] flex">
                    <div className="self-stretch py-[16.46px] bg-purple-500 rounded-[64.73px] justify-start items-start gap-[10.97px] inline-flex">
                        <div className="grow shrink basis-0 text-center text-white text-[13.16px] font-semibold font-['Inter'] cursor-pointer">Choose Plan</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}