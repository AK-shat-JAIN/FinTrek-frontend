import { Link } from "react-router-dom"

export const BrowserCategoryCard = (props) => {
    return (
    <div className="md:w-60 w-32 md:h-80 h-52 bg-neutral-700 rounded-2xl flex-col md:justify-start md:items-center md:inline-flex">
        <Link to="/browsermarket">
        <div className="md:w-60 w-32 md:h-60 h-36 relative rounded-tl-2xl rounded-tr-2xl">
            <div className="md:w-60 w-32 md:h-60 h- 36 left-0 top-0 absolute justify-center items-center inline-flex">
                <img className="grow shrink basis-0 self-stretch rounded-tl-2xl rounded-tr-2xl" src={props.img}/>
            </div>
            <div className="md:w-60 w-32 md:h-60 h-36 left-0 top-0 absolute bg-white/opacity-10 rounded-tl-2xl rounded-tr-2xl backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
                <img src={props.icon} className="md:w-24 w-20 md:h-24 h-20 relative" />
            </div>
        </div>
        <div className="self-stretch h-16 md:px-7 md:pt-5 p-3 pb-6 flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch text-white md:text-[22px] text-base font-semibold font-['Work Sans'] capitalize md:leading-7 leading-5">{props.name}</div>
        </div>
        </Link>
    </div>

    )
}