import React, { useState } from "react"
import ReactPhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

type Props = {
  placeholder?: string
  handleSetPhone: (val: string) => void
  val: string
  errorText?: string
  label?: string
}

const PhoneInput = ({ placeholder, handleSetPhone, errorText, label }: Props) => {
  const [phone, setPhone] = useState("1")

  const handleOnChange = (value: string) => {
    if (value.length < 1) {
      setPhone("1")
      handleSetPhone("1")
    } else if (value.substring(0, 1) !== "1") {
      setPhone(`1${value}`)
      handleSetPhone(`1${value}`)
    } else {
      setPhone(value)
      handleSetPhone(value)
    }
  }

  return (
    <div>
      <ReactPhoneInput
        inputProps={{
          name: "phone",
          required: true,
        }}
        country="ca"
        onlyCountries={["ca", "us"]}
        // enableAreaCodes={true}
        placeholder={placeholder}
        value={phone}
        onChange={handleOnChange}
        inputClass={errorText ? "error-phone-input" : ""}
        buttonClass={errorText ? "error-phone-input" : ""}
      />
      {errorText && (
        <span style={{ color: "red", fontSize: "12px", marginLeft: "20px" }}>{errorText}</span>
      )}
      {label && (
        <span style={{ color: "#BDBFC3", fontSize: "12px", marginLeft: "20px" }}>{label}</span>
      )}
    </div>
  )
}

export default PhoneInput
