import React from "react"
import config from "../../static/config.json"
import _ from "lodash"
import { useTranslation } from "react-i18next"

const Section1 = () => {
  const thisData = _.cloneDeep(config.insure.section1)
  const [t] = useTranslation()

  return (
    <div className="insure-section1">
      <div className="container">
        <div className="contents-container">
          <h1>{t(thisData.title)}</h1>
          <p>{t(thisData.content)}</p>
          <button>{t(thisData.button.title)}</button>
        </div>
        <div className="img-container">
          <img src={thisData.img_src} alt="insure-section1" />
        </div>
      </div>
    </div>
  )
}

export default Section1
