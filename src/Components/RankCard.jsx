export const RankCard = (props) => {
    return(
        <>
            <div className="w-[1050px] h-[84px] py-3 bg-neutral-700 rounded-[20px] flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="w-[1050px] px-5 justify-between items-center inline-flex">
                    <div className="h-[60px] justify-start items-center gap-5 flex">
                        <div className="h-[30px] w-[30px] bg-neutral-900 rounded-[20px] gap-2.5 flex justify-center items-center ">
                            <div className="text-zinc-500 font-normal font-['Space Mono'] leading-snug">{props.rank}</div>
                        </div>
                        <div className="grow shrink basis-0 h-[60px] rounded-[20px] justify-center items-center gap-5 flex">
                            <div className="flex-col justify-start items-end inline-flex">
                                <div className="w-[60px] justify-start items-start gap-2.5 inline-flex">
                                    <div className="w-[60px] h-[60px] justify-center items-center flex">
                                        <img className="w-[60px] h-[60px] rounded-[100px]" src={props.img} />
                                    </div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
                                <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">{props.name}</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-end items-center gap-5 flex">
                        <div className="w-40 flex-col justify-start items-start gap-2.5 inline-flex">
                            <div className="self-stretch text-green-600 text-base font-normal font-['Space Mono'] leading-snug">{props.change}%</div>
                        </div>
                        <div className="w-40 flex-col justify-start items-start gap-2.5 inline-flex">
                            <div className="self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">{props.nftsold}</div>
                        </div>
                        <div className="w-40 flex-col justify-start items-start gap-2.5 inline-flex">
                            <div className="self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">{props.vol} ETH</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}