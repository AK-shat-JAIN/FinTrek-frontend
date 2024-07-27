import { Link } from "react-router-dom"

export const RecommendationCard = (props) => {
    return (
        <div className="">
            <div className="mb-4">
                <img src={props.imgP}/>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
                <img src={props.imgS1} />
                <img src={props.imgS2} />
                
                <div className="w-24 h-24 bg-[#A259FF] rounded-2xl hover:bg-[#A259ED]">
                <Link to="/recommandations">
                    <p className="text-white text-center mt-8 text-xl font-['Space-Mono'] font-bold capitalize">1025+</p>
                </Link>
                </div>
            </div>
            <p className="text-white font-sans text-xl not-italic font-semibold capitalize mb-2">{props.collection}</p>
            <div className="flex">
                <img src={props.imgL}/>
                <p className="text-white font-sans font-normal text-base ml-3">{props.artist}</p>
            </div>
        </div>
    )
}