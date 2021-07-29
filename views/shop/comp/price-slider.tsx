import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import { useTranslation } from "react-i18next"

function valuetext(value: number) {
  return `$${value}`
}

const PriceSlider = () => {
  const [t] = useTranslation()

  const [value, setValue] = useState<number[]>([50, 800])

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <div className="price-slider">
      <Typography id="range-slider" gutterBottom>
        {t("Price")}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={1000}
        min={50}
      />
      <div className="slider-label">
        <div>
          <p>{`${t("Min")} ($)`}</p>
          <p style={{ color: "black" }}>{value[0]}</p>
        </div>
        <div>
          <p>{`${t("Max")} ($)`}</p>
          <p style={{ color: "black" }}>{value[1]}</p>
        </div>
      </div>
    </div>
  )
}

export default PriceSlider
