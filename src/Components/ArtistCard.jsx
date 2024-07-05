export const ArtistCard = (props) => {
    return (
        <div className="p-5 w-60 h-60 bg-[#3B3B3B] rounded-2xl">
            <div className="flex justify-center">
                <img className=" w-28 h-28 flex items-center " src={props.image} alt="" />
            </div>
            <div className="mt-5 flex justify-center">
                <p className="text-white font-sans text-xl not-italic font-semibold capitalize">{props.name}</p>
            </div>
            <div className="flex justify-center">
                <p className="text-[#858584] font-sans text-base not-italic font-normal mr-3">Total Sales:</p>
                <p className="text-white font-['Space_Mono'] text-base not-italic font-normal">{props.sales} ETH</p> 
            </div>
        </div> 
    )
}