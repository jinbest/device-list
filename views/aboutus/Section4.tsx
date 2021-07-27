import React from "react"
import { useTranslation } from "react-i18next"
import _ from "lodash"
import config from "../../static/config.json"
import { AboutUsSec4Param } from "../../models/aboutus-param"

const Section4 = () => {
  const [t] = useTranslation()
  const thisData = _.cloneDeep(config.aboutus.section4)

  return (
    <div className="aboutus-section4">
      <div className="container">
        <h1>{t(thisData.title)}</h1>
        <div className="data-viewer">
          {thisData.data.map((item: AboutUsSec4Param, index: number) => (
            <div key={index}>
              <h2>{t(item.title)}</h2>
              <div style={{ margin: "10px 0" }}>
                {item.content.map((it: string, idx: number) => (
                  <p key={`${index}-${idx}`}>{t(it)}</p>
                ))}
              </div>
              <button>{item.type === "buyers" ? t("Sign Up") : t("Learn More")}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section4
