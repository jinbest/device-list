import React from "react"

type Props = {
  color?: string
}

const Setting = ({ color }: Props) => {
  return (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 14.5V16.5H6V14.5H0ZM0 2.5V4.5H10V2.5H0ZM10 18.5V16.5H18V14.5H10V12.5H8V18.5H10ZM4 6.5V8.5H0V10.5H4V12.5H6V6.5H4ZM18 10.5V8.5H8V10.5H18ZM12 6.5H14V4.5H18V2.5H14V0.5H12V6.5Z"
        fill={color ? color : "#505050"}
      />
    </svg>
  )
}

export default Setting
