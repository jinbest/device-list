import React, { useState } from "react"
// import RightArrow from "../../components/svg/right-arrow"
import _, { capitalize } from "lodash"
// import statesData from "../../const/statesData"
import { vendorData } from "../../static/mock-data"
import { useTranslation } from "react-i18next"
import Rating from "@material-ui/lab/Rating"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import Favorite from "../../components/svg/favorite"
import { getScore } from "../../service/hepler"

// type Props = {
//   slug: string
// }

const Section1 = () => {
  const [t] = useTranslation()
  const thisData = _.cloneDeep(vendorData)
  // const state = _.find(statesData[thisData.locInfo.country], { code: thisData.locInfo.state }),
  // stateName = !isEmpty(state) ? state.name : thisData.locInfo.state
  const score = getScore(thisData.data.reviews)

  const [favorite, setFavorite] = useState(false)

  return (
    <div className="vendor-profile-section1">
      <div className="container">
        {/* <div className="bread-crumbs">
          <p>Home</p>
          <RightArrow color="#4360FA" />
          <p>Find Location</p>
          <RightArrow color="#4360FA" />
          <p>{stateName}</p>
          <RightArrow color="#4360FA" />
          <p>{capitalize(thisData.locInfo.city)}</p>
          <RightArrow color="#4360FA" />
          <p>{`${thisData.locInfo.name} - ${capitalize(thisData.locInfo.slug)}`}</p>
        </div> */}
        <div className="vendor-profile-info">
          <div className="profile-info-logo">
            <img src={thisData.logo.img_src} alt={thisData.logo.alt} />
          </div>
          <div className="profile-info-details">
            <div className="profile-info-locaions">
              <div>
                <div className="flex align-center">
                  <h2>{`${thisData.locInfo.name} - ${capitalize(thisData.locInfo.slug)}`}</h2>
                  <CheckCircleIcon style={{ color: "#A0E744" }} />
                </div>
                <p
                  className="thin"
                  style={{ padding: "5px 0" }}
                >{`Unit F - ${thisData.locInfo.address_1}`}</p>
                <div className="flex align-center">
                  <p className="bold">{score}</p>
                  <Rating
                    style={{ margin: "0 10px", color: "#FC6530" }}
                    name="read-only"
                    value={Math.round(score)}
                    max={5}
                    readOnly
                  />
                  <p className="bold">{`(${thisData.data.reviews.length})`}</p>
                </div>
              </div>
              <div className="flex flex-wrap" style={{ marginTop: "10px" }}>
                <button>{t("About")}</button>
                <button>{t("Directions")}</button>
                <button>{t("Call")}</button>
                <button>{t("Chat")}</button>
                <button>{t("Book Repair")}</button>
              </div>
            </div>
            <div className="location-availability">
              {thisData.locAvailability.map((item: string, index: number) => (
                <p key={index}>{t(item)}</p>
              ))}
            </div>
          </div>
          <div
            className="profile-favorite"
            onClick={() => {
              setFavorite(!favorite)
            }}
          >
            <Favorite fill={favorite ? "red" : ""} border={favorite ? "red" : ""} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
