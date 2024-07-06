import { Link } from "react-router-dom"

export const BrowserCategoryCard = (props) => {
    return (
    <div className="w-60 h-80 bg-neutral-700 rounded-2xl flex-col justify-start items-center inline-flex">
        <Link to="/browsermarket">
        <div className="w-60 h-60 relative rounded-tl-2xl rounded-tr-2xl">
            <div className="w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
                <img className="grow shrink basis-0 self-stretch rounded-tl-2xl rounded-tr-2xl" src={props.img}/>
            </div>
            <div className="w-60 h-60 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-2xl rounded-tr-2xl backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                <img src={props.icon} className="w-24 h-24 relative" />
            </div>
        </div>
        <div className="self-stretch h-16 px-7 pt-5 pb-6 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-7">{props.name}</div>
        </div>
        </Link>
    </div>

    )
}