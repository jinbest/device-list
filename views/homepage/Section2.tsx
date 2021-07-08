import React from "react"
import { LookingForCardParam } from "../../models/looking-for-card-param"
import config from "../../static/config.json"
import _ from "lodash"
import LookingForCard from "../../components/LookingForCard"

const Section2 = () => {
  const thisData = _.cloneDeep(config.home.lookingFor)
  const lookingData = _.sortBy(thisData, (o) => o.order)

  return (
    <div className="looking-for-container">
      <h3>Find what you&apos;re loking for</h3>
      <div className="looking-for-cards">
        {lookingData.map((item: LookingForCardParam, index: number) => {
          return (
            <React.Fragment key={index}>
              {item.visible && (
                <div className={item.vertical ? "looking-vertical" : "looking-horizontal"}>
                  <LookingForCard data={item} />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Section2
