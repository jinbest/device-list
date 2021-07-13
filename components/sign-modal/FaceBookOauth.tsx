import React from "react"
import { SignParam } from "../../models/sign-params"
import { useTranslation } from "react-i18next"

type Props = {
  signKey: SignParam
}

const FaceBookOauth = ({ signKey }: Props) => {
  const [t] = useTranslation()

  const handleClick = () => {
    console.log("Facebook-Oauth Sign")
  }
  return (
    <button type="button" onClick={handleClick}>
      <span>
        <img src="/img/icons/facebook.png" alt="google-logo" />
        <p style={{ color: "#1877F2" }}>
          {signKey === "signup" ? t("Sign up with Facebook") : t("Sign in with Facebook")}
        </p>
      </span>
    </button>
  )
}

export default FaceBookOauth
