import React from "react"
import { LookingForCardParam } from "../models/looking-for-card-param"

type Props = {
  data: LookingForCardParam
}

const LookingForCard = ({ data }: Props) => {
  return (
    <div className={data.vertical ? "looking-for-card looking-for-vertical" : "looking-for-card"}>
      <img src={data.img_src} alt={`looking-for-${data.alt}`} />
      <div>
        <p className="looking-for-title">{data.title}</p>
        <p className="looking-for-content">{data.content}</p>
      </div>
    </div>
  )
}

export default LookingForCard
