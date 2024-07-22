export const ArtistCard = (props) => {
    return (
        <div className="p-4 md:w-60 w-80 md:h-60 h-auto bg-[#3B3B3B] rounded-2xl md:flex flex-col ">
            <div className="flex md:justify-center md:mr-0 mr-5">
                <img className="md:w-28 md:h-28 w-14 h-14 flex items-center " src={props.image} alt="" />
                <div className="flex-col md:hidden ml-4">
                <p className="text-white font-sans text-xl not-italic font-semibold capitalize">{props.name}</p>
                    <div className="flex">
                    <p className="text-[#858584] font-sans md:text-base text-sm not-italic font-normal md:mr-3 mr-3">Total Sales:</p> 
                    <p className="text-white font-['Space_Mono'] md:text-base text-sm not-italic font-normal">{props.sales} ETH</p> 
                    </div>
               </div>
            </div>
            <div className="md:mt-5 md:flex justify-center md:ml-0 ml-8 hidden ">
                <p className="text-white font-sans text-xl not-italic font-semibold capitalize">{props.name}</p>
            </div>
            <div className="md:flex md:justify-center justify-end hidden">
                <p className="text-[#858584] font-sans text-base not-italic font-normal md:mr-3 mr-1">Total Sales:</p>
                <p className="text-white font-['Space_Mono'] text-base not-italic font-normal">{props.sales} ETH</p> 
            </div>  
        </div> 
    )
}