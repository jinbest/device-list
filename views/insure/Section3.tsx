import React from "react"
import config from "../../static/config.json"
import _ from "lodash"
import { useTranslation } from "react-i18next"

const Section3 = () => {
  const thisData = _.cloneDeep(config.insure.section3)
  const buttons = _.sortBy(thisData.buttons, (o) => o.order)
  const [t] = useTranslation()

  return (
    <div className="insure-section3">
      <div className="container">
        <div>
          <h1>{t(thisData.title)}</h1>
          <p className="content">{t(thisData.content)}</p>
          <div className="data-container">
            <div>
              {thisData.data.map((item: any, index: number) => {
                return (
                  <div key={index} className="each-data">
                    <img src={item.img_src} alt={`protect-${index}`} />
                    <p>{t(item.title)}</p>
                  </div>
                )
              })}
            </div>
            <div className="awesome-mobile">
              <img src={thisData.awesome.img_src} alt="awesome" />
            </div>
          </div>
          <div className="buttons-container">
            {buttons.map((item: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  {item.visible && <button>{t(item.title)}</button>}
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <div className="awesome">
          <img src={thisData.awesome.img_src} alt="awesome" />
        </div>
      </div>
    </div>
  )
}

export default Section3
