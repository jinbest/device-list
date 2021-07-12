import React from "react"
import { GoogleLogin } from "react-google-login"
import { SignParam } from "../../models/sign-params"
import { useTranslation } from "react-i18next"

const clientID = "691377113408-gmk00d2v8hm8t738jb9q1cpennjd66se.apps.googleusercontent.com"

type Props = {
  signKey: SignParam
}

const GoogleOauth = ({ signKey }: Props) => {
  const [t] = useTranslation()

  const handleGoogle = (googleData: any) => {
    if (googleData.error) return

    console.log("googleData.tokenId", googleData.tokenId)
  }

  return (
    <GoogleLogin
      clientId={clientID}
      render={(renderProps) => (
        <button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <span>
            <img src="/img/icons/google.png" alt="google-logo" />
            <p>{signKey === "signup" ? t("Sign up with Google") : t("Sign in with Google")}</p>
          </span>
        </button>
      )}
      onSuccess={handleGoogle}
      onFailure={handleGoogle}
      cookiePolicy="single_host_origin"
    />
  )
}

export default GoogleOauth
