// import { IMAGE_1 } from "../utils/constants" 

const Home = () => {
  return (
    <div>
      <div className="w-[1280px] h-[824px] bg-{url['/src/assets/image.svg']}">
        <button className="flex w-[361px] h-[89px] px-[74.07px] justify-center items-center rounded-[33px] bg-[#A259FF]  mt-[276px] mx-[460px] mb-[459px]">
            <img className="mr-[17.78px] w-[29.629px] h-[29.629px]" src="/src/assets/RocketLaunch.svg"/>
            <p className="text-white text-center font-sans text-[23.704px] not-italic font-semibold leading-[33.185px]">Play Now!!</p>
        </button>
      </div>
    </div>
  )
}

export default Home
