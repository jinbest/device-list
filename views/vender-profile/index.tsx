import React from "react"
import Section1 from "./Section1"
import Section2 from "./Section2"

type Props = {
  slug: string
}

const VenderProfile = ({ slug }: Props) => {
  console.log("slug", slug) // it will be used later.

  return (
    <div className="vender-profile">
      <Section1 />
      <Section2 />
    </div>
  )
}

export default VenderProfile
