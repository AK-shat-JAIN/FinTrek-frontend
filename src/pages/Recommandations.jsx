import RecommandationCollectionCard from "../Components/RecommandationCollectionCard"
import RecommandationSitesCard from "../Components/RecommandationSitesCard"
import m1 from "../assets/Recommandation_Collection/M-1.png"
import m2 from "../assets/Recommandation_Collection/M-2.png"
import m3 from "../assets/Recommandation_Collection/M-3.png"
import m4 from "../assets/Recommandation_Collection/M-4.png"
import m5 from "../assets/Recommandation_Collection/M-5.png"
import m6 from "../assets/Recommandation_Collection/M-6.png"
import m7 from "../assets/Recommandation_Collection/M-7.png"
import m8 from "../assets/Recommandation_Collection/M-8.png"
import s1 from "../assets/Recommandation_Collection/S_1.png"
import s2 from "../assets/Recommandation_Collection/S_2.png"
import s3 from "../assets/Recommandation_Collection/S_3.png"
const Recommandations = () => {
  return (
    <div>
        {/* Heading of page */}
        <div className='flex flex-col justify-center items-center my-[5%] gap-2'>
            <h1 className='text-[#A259FF] text-4xl font-semibold font-sans'>Recommandations</h1>
            <p className='text-white text-xl'>Checkout the trending collections to know what suits you the best.</p>
        </div>

        {/* Recommandation Collection */}
        <div className='flex justify-center items-center mb-[4%]'>
            <h1 className='text-white text-3xl font-bold'>Hot Collections</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-6 mb-[8%]'>
            <RecommandationCollectionCard img={m1} title="SKISIRS #02"/>
            <RecommandationCollectionCard img={m2} title="SKELATON #01"/>
            <RecommandationCollectionCard img={m3} title="SKISIRS #02"/>
            <RecommandationCollectionCard img={m4} title="SKELATON #01"/>
            <RecommandationCollectionCard img={m5} title="SKISIRS #02"/>
            <RecommandationCollectionCard img={m6} title="SKELATON #01"/>
            <RecommandationCollectionCard img={m7} title="SKISIRS #02"/>
            <RecommandationCollectionCard img={m8} title="SKELATON #01"/>
        </div>

        {/* Explore more */}
        <div className='flex justify-center items-center mb-[4%]'>
            <h1 className='text-white text-3xl font-bold'>Explore More Over...</h1>
        </div>
        <div className="flex flex-wrap gap-40 justify-center items-center mb-[5%]">
            <RecommandationSitesCard img={s1} flag={true} text="OpenSea" link="https://opensea.io/"/>
            <RecommandationSitesCard img={s2} flag={true} text="Rarible" link="https://rarible.com/"/>
            <RecommandationSitesCard img={s3} flag={false} text="Solana" link="https://solana.com/"/>
        </div>
    </div>
  )
}

export default Recommandations
