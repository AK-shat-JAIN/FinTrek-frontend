export const InfoCard = (props) => {
    return(
    <div className="md:w-80 w-96 md:h-[430px] h-36 md:px-6 md:pb-7 p-5 bg-neutral-700 rounded-2xl md:flex-col justify-center items-center md:gap-5 gap-1 inline-flex">
        <div className="relative" />
        <img src={props.icon} className="md:w-auto md:h-auto w-24 h-24"/>
        <div className="md:self-stretch py-1 h-32 flex-col justify-start items-center md:gap-2 gap-0.5 flex">
            <div className="self-stretch md:text-center text-white md:text-2xl text-sm font-semibold font-['Work Sans'] capitalize md:leading-7 leading-5">{props.p1}</div>
            <div className="self-stretch md:text-center text-white md:text-base text-[9px]  font-normal font-['Work Sans'] md:leading-snug leading-4">{props.p2}</div>
        </div>
    </div>
    )
}