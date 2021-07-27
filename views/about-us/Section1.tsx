import React from "react"
import { useTranslation } from "react-i18next"
import _ from "lodash"
import config from "../../static/config.json"

const Section1 = () => {
  const [t] = useTranslation()
  const thisData = _.cloneDeep(config.aboutus.section1)

  return (
    <div className="about-us-section1">
      <div className="container">
        <h1>{t(thisData.title)}</h1>
        <p>{t(thisData.content)}</p>
        <img src={thisData.img_src} alt="mobile-devices" />
      </div>
    </div>
  )
}

export default Section1
