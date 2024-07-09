import prepic from "../assets/premiumpic.png"
import { PremiumCard } from "../Components/PremiumCard"
const Premium = () => {
  return (
    <div>
      <div className="bg-cover" style={{ backgroundImage: `url(${prepic})` }}>
        <div className="flex items-center justify-center h-full mb-2">
          <p className="mt-44 text-white text-5xl text-center font-sans not-italic font-semibold">Become a <span className="text-[#A259FF]">Super</span> Member Now!</p>
        </div>
        <div className="flex items-center justify-center h-full ">
          <p className="text-white mb-16 font-sans text-lg font-medium">14 days unlimited free trial. No contract or credit card required.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-9 2xl:gap-28 pb-36 ">
          <PremiumCard title="Pay Monthly" dollar="15"/>
          <PremiumCard title="Pay Quarterly" dollar="10"/>
          <PremiumCard title="Pay Yearly" dollar="7"/>
        </div>
      </div>
    </div>
  )
}

export default Premium
