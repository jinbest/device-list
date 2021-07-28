import React from "react"
import Section1 from "./Section1"

type Props = {
  slug: string
}

const VenderProfile = ({ slug }: Props) => {
  return (
    <div className="vender-profile">
      <Section1 slug={slug} />
    </div>
  )
}

export default VenderProfile
