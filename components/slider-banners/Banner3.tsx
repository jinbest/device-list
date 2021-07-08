import React from "react"
import { BannerDataParam } from "../../models/banners-param"
import Link from "next/link"

type Props = {
  data: BannerDataParam
}

const Banner3 = ({ data }: Props) => {
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
      <div className="slider-banner-img banner-dell-container">
        <img
          className="banner-dell-img comb-dell-img"
          src="img/home/banners/comb-dell.png"
          alt="banner-dell"
        />
        <img
          className="banner-dell-img individual-dell"
          src="img/home/banners/dell.png"
          alt="banner-dell"
        />
      </div>
    </div>
  )
}

export default Banner3
