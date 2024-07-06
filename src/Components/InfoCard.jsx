export const InfoCard = (props) => {
    return(
    <div className="w-80 h-[430px] px-6 pb-7 bg-neutral-700 rounded-2xl flex-col justify-start items-center gap-5 inline-flex">
        <div className="w-60 h-60 relative" />
        <img src={props.icon}/>
        <div className="self-stretch h-32 flex-col justify-start items-center gap-2.5 flex">
            <div className="self-stretch text-center text-white text-2xl font-semibold font-['Work Sans'] capitalize leading-7 mb-3">{props.p1}</div>
            <div className="self-stretch text-center text-white text-base font-normal font-['Work Sans'] leading-snug">{props.p2}</div>
        </div>
    </div>
    )
}