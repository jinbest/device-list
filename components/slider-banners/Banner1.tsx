import React from "react"
import { BannerDataParam } from "../../models/banners-param"
import Link from "next/link"

type Props = {
  data: BannerDataParam
}

const Banner1 = ({ data }: Props) => {
  return (
    <div className="slider-banner">
      <div className="slider-contents">
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
      <div className="slider-banner-img">
        <img className="banner-1-img" src="img/home/banners/banner1.png" alt="banner-1" />
      </div>
    </div>
  )
}

export default Banner1