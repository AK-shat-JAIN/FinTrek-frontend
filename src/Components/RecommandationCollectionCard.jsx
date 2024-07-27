const RecommandationCollectionCard = (props) => {
  return (
    <div className="bg-custom-rgba rounded-xl p-4">
      <img src={props.img} className="rounded-xl " alt="" />
      <p className="text-white font-semibold mt-4">{props.title}</p>
      {
        props.categroy && (
          <button className="bg-[#A259FF] text-white w-full p-2 rounded-xl font-semibold mt-[20%]">
            Buy Now
          </button>
        )
      }
    </div>
  )
}

export default RecommandationCollectionCard
