import React from 'react'
import { useParams } from 'react-router-dom'
import RecommandationCollectionCard from '../Components/RecommandationCollectionCard';
import a1 from "../assets/Categroies/Art/A-1.png"
import a2 from "../assets/Categroies/Art/A-2.png"
import a3 from "../assets/Categroies/Art/A-3.png"
import a4 from "../assets/Categroies/Art/A-4.png"
import m1 from "../assets/Categroies/Music/M-1.png"
import m2 from "../assets/Categroies/Music/M-2.png"
import m3 from "../assets/Categroies/Music/M-3.png"
import m4 from "../assets/Categroies/Music/M-4.png"
import p1 from "../assets/Categroies/Photography/P-1.png"
import p2 from "../assets/Categroies/Photography/P-2.png"
import p3 from "../assets/Categroies/Photography/P-3.png"
import p4 from "../assets/Categroies/Photography/P-4.png"
import c1 from "../assets/Categroies/Collectibles/C-1.png"
import c2 from "../assets/Categroies/Collectibles/C-2.png"
import c3 from "../assets/Categroies/Collectibles/C-3.png"
import c4 from "../assets/Categroies/Collectibles/C-4.png"
import v1 from "../assets/Categroies/Video/V-1.png"
import v2 from "../assets/Categroies/Video/V-2.png"
import v3 from "../assets/Categroies/Video/V-3.png"
import v4 from "../assets/Categroies/Video/V-4.png"
import u1 from "../assets/Categroies/Utility/U-1.png"
import u2 from "../assets/Categroies/Utility/U-2.png"
import u3 from "../assets/Categroies/Utility/U-3.png"
import u4 from "../assets/Categroies/Utility/U-4.png"
import s1 from "../assets/Categroies/Sport/S-1.png"
import s2 from "../assets/Categroies/Sport/S-2.png"
import s3 from "../assets/Categroies/Sport/S-3.png"
import s4 from "../assets/Categroies/Sport/S-4.png"
import vr1 from "../assets/Categroies/Virual/VR-1.png"
import vr2 from "../assets/Categroies/Virual/VR-2.png"
import vr3 from "../assets/Categroies/Virual/VR-3.png"
import vr4 from "../assets/Categroies/Virual/VR-4.png"

const Categroy = () => {
    const {id} = useParams();
  return (
    <div>
        {/* Heading of page */}
        <div className='flex flex-col justify-center items-center my-[5%] gap-2'>
            <h1 className='text-[#A259FF] text-4xl font-semibold font-sans'>Recommandations</h1>
            <p className='text-white text-xl'>Checkout the trending collections to know what suits you the best.</p>
        </div>

        {/* Categories Collection */}
        <div className='flex justify-center items-center mb-[4%]'>
            <h1 className='text-white text-3xl font-bold'>{id}  Categroies</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-6 mb-[8%]'>
            {
                id === "Art" && (
                    // Art Collection
                    <>
                        <RecommandationCollectionCard img={a1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={a2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={a3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={a4} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={a1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={a2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={a3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={a4} title="SKELATON #01" categroy={true}/>
                    </>
                )
            }
            {
                id === "Music" && (
                    // Music Collection
                    <>
                        <RecommandationCollectionCard img={m1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={m2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={m3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={m4} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={m1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={m2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={m3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={m4} title="SKELATON #01" categroy={true}/>
                    </>
                )
            }
            {
                id === "Photography" && (
                    // Photography Collection
                    <>
                        <RecommandationCollectionCard img={p1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={p2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={p3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={p4} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={p1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={p2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={p3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={p4} title="SKELATON #01" categroy={true}/>
                    </>
                )
            }
            {
                id === "Collectibles" && (
                    // Collectibles Collection
                    <>
                        <RecommandationCollectionCard img={c1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={c2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={c3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={c4} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={c1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={c2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={c3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={c4} title="SKELATON #01" categroy={true}/>
                    </>
                )
            }
            {
                id === "Video" && (
                    // Video Collection
                    <>
                        <RecommandationCollectionCard img={v1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={v2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={v3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={v4} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={v1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={v2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={v3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={v4} title="SKELATON #01" categroy={true}/>
                    </>
                )
            }
            {
                id === "Utility" && (
                    // Utility Collection
                    <>
                        <RecommandationCollectionCard img={u1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={u2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={u3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={u4} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={u1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={u2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={u3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={u4} title="SKELATON #01" categroy={true}/>
                    </>
                )
            }
            {
                id === "Sport" && (
                    // Sport Collection
                    <>
                        <RecommandationCollectionCard img={s1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={s2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={s3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={s4} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={s1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={s2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={s3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={s4} title="SKELATON #01" categroy={true}/>
                    </>
                )
            }
            {
                id === "Virutal Worlds" && (
                    // Virtual Worlds Collection
                    <>
                        <RecommandationCollectionCard img={vr1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={vr2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={vr3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={vr4} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={vr1} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={vr2} title="SKELATON #01" categroy={true}/>
                        <RecommandationCollectionCard img={vr3} title="SKISIRS #02" categroy={true}/>
                        <RecommandationCollectionCard img={vr4} title="SKELATON #01" categroy={true}/>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Categroy
