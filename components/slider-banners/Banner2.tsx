import React from "react"
import { BannerDataParam } from "../../models/banners-param"
import Link from "next/link"

type Props = {
  data: BannerDataParam
}

const Banner2 = ({ data }: Props) => {
  return (
    <div className="slider-banner">
      <div className="slider-contents">
        <div className="banner-2-slider-contents">
          <h1>{data.title}</h1>
          {data.content && <p>{data.content}</p>}
          {data.button.visible && (
            <Link href={data.button.link}>
              <a>
                <button>{data.button.text}</button>
              </a>
            </Link>
          )}
        </div>
      </div>
      <div className="slider-banner-img">
        <div className="banner-2-tending-card" id="banner-2-tending-card">
          <img className="tending-img" src="img/home/banners/tending.png" alt="banner-2-tending" />
          <img
            className="banner-2-laptop"
            src="img/home/banners/laptop.png"
            alt="banner-2-laptop"
          />
          <p className="banner-2-card-title">Microsoft Surface 3</p>
          <p className="banner-2-card-content">starting at $750</p>
        </div>
      </div>
    </div>
  )
}

export default Banner2
