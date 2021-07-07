import React, { useRef, useState, useCallback, useEffect } from "react"
import Swiper from "react-id-swiper"
import Banner1 from "../../components/slider-banners/Banner1"

const sliderBG = ["#cbbbfa", "#4360fa", "#fc6530"]

const Section1 = () => {
  const ref = useRef<any>(null)
  const [step, setStep] = useState(0)

  const goNext = () => {
    if (ref.current !== null && ref.current?.swiper !== null) {
      ref.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev()
    }
  }

  const updateIndex = useCallback(() => {
    if (ref.current !== null && ref.current?.swiper !== null) {
      setStep(ref.current.swiper.realIndex)
    }
  }, [])

  useEffect(() => {
    if (ref.current !== null && ref.current?.swiper !== null) {
      const swiperInstance = ref.current.swiper
      if (swiperInstance) {
        swiperInstance.on("slideChange", updateIndex)
      }
      return () => {
        if (swiperInstance) {
          swiperInstance.off("slideChange", updateIndex)
        }
      }
    }
  }, [updateIndex])

  const swiperParams = {
    loop: true,
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goNext()
  //   }, 15000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className="slider-container" style={{ background: sliderBG[step] }}>
      <button className="slider-button" onClick={goPrev}>
        <span>
          <img src="img/icons/arrow-left.png" alt="arrow-left" />
        </span>
      </button>
      <Swiper ref={ref} {...swiperParams}>
        <div className="slider-item-container">
          <Banner1 />
        </div>
        <div className="slider-item-container">
          <Banner1 />
        </div>
        <div className="slider-item-container">
          <Banner1 />
        </div>
      </Swiper>
      <button className="slider-button" onClick={goNext}>
        <span>
          <img src="img/icons/arrow-right.png" alt="arrow-right" />
        </span>
      </button>
    </div>
  )
}

export default Section1
