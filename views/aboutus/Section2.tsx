import React from "react"
import { useTranslation } from "react-i18next"
import _ from "lodash"
import config from "../../static/config.json"
import { AboutUsSec2DataParam, AboutUsSec2DataChildParam } from "../../models/aboutus-param"

const Section2 = () => {
  const [t] = useTranslation()
  const thisData = _.cloneDeep(config.aboutus.section2),
    data = _.filter(
      _.sortBy(thisData.data, (o) => o.order),
      (o) => o.visible
    )

  return (
    <div className="aboutus-section2">
      <div className="container">
        <h1>{t(thisData.title)}</h1>
        <div className="data-viewer">
          {data.map((item: AboutUsSec2DataParam, index: number) => {
            return (
              <div key={index}>
                <div className="round-viewer">
                  <img src={item.img.img_src} alt={item.img.alt} />
                </div>
                <h2>{t(item.title)}</h2>
                {_.filter(
                  _.sortBy(item.child, (o) => o.order),
                  (o) => o.visible
                ).map((it: AboutUsSec2DataChildParam, idx: number) => (
                  <div className="child-data" key={`${index}-${idx}`} id={`child-${index}-${idx}`}>
                    <h3>{t(it.title)}</h3>
                    {it.content && <p>{t(it.content)}</p>}
                    {it.listData.length ? (
                      <ul>
                        {it.listData.map((itChild: string, idxChild: number) => (
                          <li key={`${index}-${idx}-${idxChild}`}>{t(itChild)}</li>
                        ))}
                      </ul>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Section2
