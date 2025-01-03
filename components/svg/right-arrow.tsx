import React from "react"

type Props = {
  color: string
}

const RightArrow = ({ color }: Props) => {
  return (
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.57856e-07 1.7625L5.56275 7.5L2.10176e-08 13.2375L1.71255 15L9 7.5L1.71255 2.0422e-08L1.57856e-07 1.7625Z"
        fill={color}
      />
    </svg>
  )
}

export default RightArrow
