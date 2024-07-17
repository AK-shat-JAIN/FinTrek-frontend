export const TutorialCard = (props) => {
    return (
    <div className="w-80 h-[485px] bg-black rounded-3xl  shadow-sm shadow-white">
        <img className=" items-center md:ml-[5px] px-3 md:mt-2 pt-3 mb-6" src={props.img} alt="" />
        <p className="ml-2 text-white text-justify font-['Space-Grotesk'] text-lg font-medium tracking-wider mr-2">{props.text}</p>
    </div>
    )
}