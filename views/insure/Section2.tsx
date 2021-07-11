import React from "react"
import config from "../../static/config.json"
import _ from "lodash"
import { useTranslation } from "react-i18next"
import { InsureSec2DataParam } from "../../models/insure-params"

const Section2 = () => {
  const thisData = _.cloneDeep(config.insure.section2)
  const [t] = useTranslation()

  return (
    <div className="insure-section2">
      <div className="container">
        <h1>{t(thisData.title)}</h1>
        <div className="data-contents">
          {thisData.data.map((item: InsureSec2DataParam, index: number) => {
            return (
              <div key={index}>
                <img src={item.img_src} alt={`bounce-${index}`} />
                <p className="bounce-title">{t(item.title)}</p>
                <p className="bounce-price">{item.price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Section2
