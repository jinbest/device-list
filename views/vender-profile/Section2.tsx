import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { venderData, venderStatus } from "../../static/mock-data"
import _ from "lodash"
import SearchIcon from "../../components/svg/search-icon"
import {
  VenderProfileShopParam,
  VenderProfileReviewsParam,
} from "../../models/vender-profile-param"
import { formatWarranty, getWidth } from "../../service/hepler"
import Rating from "@material-ui/lab/Rating"

type ColsParam = {
  start: number
  end: number
}

const Section2 = () => {
  const [t] = useTranslation()
  const thisData = _.cloneDeep(venderData),
    shops = _.cloneDeep(thisData.data.shop),
    shopLen = shops.length,
    reviews = _.cloneDeep(thisData.data.reviews)

  const [tab, setTab] = useState<"shop" | "services" | "reviews">("shop")
  const [subReviews, setSubReviews] = useState(5)
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [cols, setCols] = useState<ColsParam[]>([])

  const handleResize = () => {
    if (getWidth() < 600) {
      setDevice("mobile")
    } else if (getWidth() < 960) {
      setDevice("tablet")
    } else {
      setDevice("desktop")
    }
  }

  useEffect(() => {
    handleResize()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  useEffect(() => {
    setSubReviews(5)
  }, [tab])

  useEffect(() => {
    if (device === "desktop") {
      setCols([
        { start: 0, end: Math.round(shopLen / 4) },
        { start: Math.round(shopLen / 4), end: Math.round(shopLen / 2) },
        { start: Math.round(shopLen / 2), end: Math.round((shopLen * 3) / 4) },
        { start: Math.round((shopLen * 3) / 4), end: shopLen },
      ])
    } else if (device === "tablet") {
      setCols([
        { start: 0, end: Math.round(shopLen / 2) },
        { start: Math.round(shopLen / 2), end: shopLen },
      ])
    } else {
      setCols([{ start: 0, end: shopLen }])
    }
  }, [device])

  const _getVenderStatus_ = (status: string) => {
    let result = {
      bgCol: "#4360FA",
      img_src: "/img/vender-profile/icons/trending.png",
    }
    if (status === venderStatus.promo) {
      result = {
        bgCol: "#FC6530",
        img_src: "/img/vender-profile/icons/promo.png",
      }
    } else if (status === venderStatus.favorite) {
      result = {
        bgCol: "#CBBBFA",
        img_src: "/img/vender-profile/icons/favorite.png",
      }
    }
    return result
  }

  return (
    <div className="vender-profile-section2">
      <div className="container">
        <div className="vender-tabs">
          <div className="flex" style={{ marginBottom: "-3px" }}>
            <p
              style={{
                borderBottom: tab === "shop" ? "3px solid #4360FA" : "",
                color: tab === "shop" ? "#4360FA" : "",
              }}
              onClick={() => {
                setTab("shop")
              }}
            >
              {t("Shop")}
            </p>
            <p
              style={{
                borderBottom: tab === "services" ? "3px solid #4360FA" : "",
                color: tab === "services" ? "#4360FA" : "",
              }}
              onClick={() => {
                setTab("services")
              }}
            >
              {t("Services")}
            </p>
            <p
              style={{
                borderBottom: tab === "reviews" ? "3px solid #4360FA" : "",
                color: tab === "reviews" ? "#4360FA" : "",
              }}
              onClick={() => {
                setTab("reviews")
              }}
            >
              {t("Reviews")}
            </p>
          </div>
          <SearchIcon color="black" />
        </div>

        {tab === "shop" && (
          <div className="shop-data-container">
            {cols.map((item: ColsParam, index: number) => (
              <div className="vender-shop-data-viewer" key={index}>
                {shops
                  .slice(item.start, item.end)
                  .map((it: VenderProfileShopParam, idx: number) => {
                    return (
                      <div key={`${index}-${idx}`} className="vender-shop">
                        <img src={it.img_src} alt={it.name} />
                        <div>
                          <h2>{it.name}</h2>
                          <p>{`${it.capacity} | ${it.color}`}</p>
                          <p className="shop-cost">{`$${it.cost}`}</p>
                          <p className="as-low-as">{`${t("As low as")} ${it.asLowas}`}</p>
                          <p className="shop-warranty">{`${t("Warranty")}: ${formatWarranty(
                            it.warranty,
                            it.warranty_unit
                          )}`}</p>
                        </div>
                        {it.status && (
                          <div
                            className="vender-shop-spinner"
                            style={{ background: _getVenderStatus_(it.status).bgCol }}
                          >
                            <img src={_getVenderStatus_(it.status).img_src} alt={it.status} />
                          </div>
                        )}
                      </div>
                    )
                  })}
              </div>
            ))}
          </div>
        )}

        {tab === "reviews" && (
          <div className="reviews-data-container">
            {reviews.slice(0, subReviews).map((item: VenderProfileReviewsParam, index: number) => {
              return (
                <div key={index}>
                  <p className="reviewer-name">{item.name}</p>
                  <div className="flex justify-between align-center">
                    <Rating
                      style={{ margin: "5px 0", color: "#FC6530" }}
                      name="read-only"
                      value={Math.round(item.score)}
                      max={5}
                      readOnly
                    />
                    <p className="reviewer-day">{item.day}</p>
                  </div>
                  <p>{item.comments}</p>
                </div>
              )
            })}
            {subReviews !== reviews.length ? (
              <p
                onClick={() => {
                  setSubReviews(reviews.length)
                }}
              >
                {t("See More")}
              </p>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Section2
