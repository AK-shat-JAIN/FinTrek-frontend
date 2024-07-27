const RecommandationCollectionCard = (props) => {
  return (
    <div className="bg-custom-rgba rounded-xl p-4">
      <img src={props.img} className="rounded-xl " alt="" />
      <p className="text-white font-semibold mt-4">{props.title}</p>
    </div>
  )
}

export default RecommandationCollectionCard
