import React from "react"
import RightArrow from "./svg/right-arrow"
import { useTranslation } from "react-i18next"

type Props = {
  data: string[]
}

const BreadCrumbs = ({ data }: Props) => {
  const [t] = useTranslation()

  return (
    <div className="bread-crumbs">
      {data.map((item: string, index: number) => {
        return (
          <React.Fragment key={index}>
            <p>{t(item)}</p>
            {index < data.length - 1 && <RightArrow color="#4360FA" />}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default BreadCrumbs