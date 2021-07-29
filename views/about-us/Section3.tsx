import React from "react"
import { useTranslation } from "react-i18next"
import _ from "lodash"
import config from "../../static/config.json"

const Section3 = () => {
  const [t] = useTranslation()
  const thisData = _.cloneDeep(config.aboutus.section3)

  return (
    <div className="about-us-section3">
      <div className="container">
        <p>{t(thisData.content1)}</p>
        <p>{t(thisData.content2)}</p>
      </div>
    </div>
  )
}

export default Section3
