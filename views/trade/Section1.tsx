import React from "react"
import config from "../../static/config.json"
import _ from "lodash"
import { useTranslation } from "react-i18next"

const Section1 = () => {
  const thisData = _.cloneDeep(config.corporate.section1)
  const [t] = useTranslation()

  return (
    <div className="corporate-section1">
      <div className="container">
        <div className="contents">
          <h1>
            {t(thisData.title.main)}&nbsp;
            <span>{t(thisData.title.span)}</span>
          </h1>
          <button>{t("Get Started")}</button>
        </div>
        <div className="lifecycle">
          <img src={thisData.img_src} alt="lifecycle" />
        </div>
      </div>
    </div>
  )
}

export default Section1
