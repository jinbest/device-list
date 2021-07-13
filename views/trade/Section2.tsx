import React from "react"
import config from "../../static/config.json"
import _ from "lodash"
import { useTranslation } from "react-i18next"
import { CorporateSec2DataParam } from "../../models/corporate-param"

const Section2 = () => {
  const thisData = _.cloneDeep(config.corporate.section2)
  const data = _.sortBy(thisData.data, (o) => o.order)
  const [t] = useTranslation()

  return (
    <div className="corporate-section2">
      <div className="container">
        <h1>{t(thisData.title)}</h1>
        <div className="child-data">
          {data.map((item: CorporateSec2DataParam, index: number) => {
            return (
              <React.Fragment key={index}>
                {item.visible && (
                  <div>
                    <img src={item.img_src} alt={`corporate-${index}`} />
                    <button>{t(item.title)}</button>
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Section2
