import React from "react"
import { LookingForCardParam } from "../../models/looking-for-card-param"
import config from "../../static/config.json"
import _ from "lodash"
import LookingForCard from "../../components/LookingForCard"

const Section2 = () => {
  const thisData = _.cloneDeep(config.home.lookingFor)

  return (
    <div className="looking-for-container">
      <h3>Find what you&apos;re loking for</h3>
      <div className="looking-for-cards">
        {thisData.map((item: LookingForCardParam, index: number) => {
          return (
            <div key={index} style={{ width: item.vertical ? "32%" : "49%" }}>
              <LookingForCard data={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Section2
