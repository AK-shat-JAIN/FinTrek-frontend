export const NftCard = (props) => {
    return(
        <>
            <div className="w-[330px] h-[469px] bg-neutral-900 rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="self-stretch h-[295px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
                    <img className="self-stretch h-[295px] rounded-tl-[20px] rounded-tr-[20px]" src={props.bgimg} />
                </div>
                <div className="self-stretch h-[173px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
                    <div className="self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex">
                        <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">{props.cardname}</div>
                        <div className="self-stretch justify-start items-start gap-3 inline-flex">
                            <div className="justify-start items-start gap-2.5 flex">
                                <div className="w-6 h-6 justify-center items-center flex">
                                    <img className="w-6 h-6 rounded-[120px]" src={props.avatar} />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">{props.name}</div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
                            <div className="self-stretch text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">Price</div>
                            <div className="self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">{props.price} ETH</div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
                            <div className="self-stretch text-right text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">Highest Bid</div>
                            <div className="self-stretch text-right text-white text-base font-normal font-['Space Mono'] leading-snug">{props.bid} wETH</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}