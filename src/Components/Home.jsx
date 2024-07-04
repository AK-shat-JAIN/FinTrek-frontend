import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      {/* Play now button and bg-image div */}
      <div className="bg-no-repeat h-[824px] w-[1280px]" style={{ backgroundImage: `url('./src/assets/image.jpg')` }}>
        <button className="absolute flex w-[361px] h-[89px] px-[74.07px] justify-center items-center rounded-[33px] bg-[#A259FF]  mt-[276px] ml-[460px]">
            <img className="mr-[17.78px] w-[29.629px] h-[29.629px] " src="./src/assets/RocketLaunch.png"/>
            <p className="text-white text-center font-sans text-[23.704px] not-italic font-semibold leading-[33.185px]">Play Now!!</p>
        </button>
      </div>

      {/* Top Rankers section */}
      <div className="py-20 px-[120px]">

        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-white text font-sans text-3xl not-italic font-semibold leading-[45.6px] capitalize w-[703px] h-[46px] mr-[100px]">Top Rankers</p>
            <p className="text-white font-sans text-[22px] not-italic font-normal leading-[35.2px] capitalize w-[703px] h-[35px] mr-[100px]">Checkout Our Top Perfomers</p> 
          </div>
          <Link to="ranking">
              <button className="absolute px-[50px] justify-center items-center rounded-[20px]  border-[#A259FF] border-[2px] border-solid h-[60px] mt-4 flex">
                <img className="w-8 h-6 pr-3 " src="./src/assets/RocketLaunch_2.png"/>
                <p className="text-white font-sans  text-base not-italic font-semibold leading-[22.4px]">View Rankings</p>
              </button>
          </Link>
        </div>
    
      


        {/* <div className="mb-[10px] flex flex-row">
          <p className="text-white text font-sans text-3xl not-italic font-semibold leading-[45.6px] capitalize w-[703px] h-[46px] mr-[100px]">Top Rankers</p>
          <Link to="ranking">
            <button className="px-[50px]  rounded-[20px] justify-center border-[#A259FF] border-[2px] border-solid h-[60px] mt-10">
              <img className="w-5 h-5 pr-3" src="./src/assets/RocketLaunch_2.svg"/>
              <p className="text-white text-center font-sans text-base not-italic font-semibold leading-[22.4px]">View Rankings</p>
            </button>
          </Link>
        </div>

        <div className="mt-0x">
          <p className="text-white font-sans text-[22px] not-italic font-normal leading-[35.2px] capitalize w-[703px] h-[35px] mr-[100px]">Checkout Our Top Perfomers</p> */}
          
        {/* </div> */}

      </div>
       
      
    </div>
  )
}

export default Home

// mt-[276px] mx-[460px] mb-[459px]
