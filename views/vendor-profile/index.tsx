import React from "react"
import Section1 from "./Section1"
import dynamic from "next/dynamic"

const DynamicSection2 = dynamic(() => import("./Section2"), { ssr: false })

type Props = {
  slug: string | string[]
}

const VendorProfile = ({ slug }: Props) => {
  console.log("slug", slug) // it will be used later.

  return (
    <div className="vendor-profile">
      <Section1 />
      <DynamicSection2 />
    </div>
  )
}

export default VendorProfile
