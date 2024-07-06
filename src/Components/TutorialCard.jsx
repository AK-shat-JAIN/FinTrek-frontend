export const TutorialCard = (props) => {
    return (
    <div className="w-80 h-[485px] bg-black rounded-3xl  shadow-sm shadow-white">
        <img className="items-center ml-[5px] mt-2 mb-6" src={props.img} alt="" />
        <p className="ml-2 text-white text-justify font-['Space-Grotesk'] text-lg font-medium tracking-wider mr-2">{props.text}</p>
    </div>
    )
}