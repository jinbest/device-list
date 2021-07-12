import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Form, Formik, FormikHelpers, yupToFormErrors } from "formik"
import { Checkbox, FormControlLabel, FormGroup, FormControl } from "@material-ui/core"
import { SignParam } from "../../models/sign-params"

type Props = {
  signKey: SignParam
  setSignKey: (val: SignParam) => void
}

const SignForm = ({ signKey, setSignKey }: Props) => {
  const [t] = useTranslation()

  const initialValues = {
    email: "",
    password: "",
    confPass: "",
    first_name: "",
    last_name: "",
    receive_email: false,
    agree_policy: false,
  }

  const [passType, setPassType] = useState(true)
  const [confPassType, setConfPassType] = useState(true)

  const onSave = (values: any, actions: FormikHelpers<any>) => {
    actions.setSubmitting(true)

    console.log("values", values)

    actions.setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSave(values, actions)
      }}
      validate={() => {
        try {
          // EMPTY
        } catch (error) {
          return yupToFormErrors(error)
        }
        return {}
      }}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form className="sign-form">
          <label className="sign-label" htmlFor="email">
            {t("Email Address")}
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="sign-input"
            id="email"
            value={values.email}
            placeholder={t("Enter your email address...")}
            onChange={(e) => {
              if (e.target.value.length >= 0) {
                setFieldValue("email", e.target.value)
                handleChange(e)
              }
            }}
          />
          {signKey === "login" && (
            <button type="button" className="forgot-button">
              {t("Forgot Username?")}
            </button>
          )}

          {signKey === "signup" && (
            <div className="sign-flex-form">
              <div>
                <label className="sign-label" htmlFor="first_name">
                  {t("First Name")}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="sign-input"
                  id="first_name"
                  value={values.first_name}
                  placeholder={t("Enter your first name...")}
                  onChange={(e) => {
                    if (e.target.value.length >= 0) {
                      setFieldValue("first_name", e.target.value)
                      handleChange(e)
                    }
                  }}
                />
              </div>
              <div>
                <label className="sign-label" htmlFor="last_name">
                  {t("Last Name")}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="sign-input"
                  id="last_name"
                  value={values.last_name}
                  placeholder={t("Enter your last name...")}
                  onChange={(e) => {
                    if (e.target.value.length >= 0) {
                      setFieldValue("last_name", e.target.value)
                      handleChange(e)
                    }
                  }}
                />
              </div>
            </div>
          )}

          <label className="sign-label" htmlFor="password">
            {t("Password")}
            <span style={{ color: "red" }}>*</span>
          </label>
          <div className="sign-input">
            <input
              id="password"
              type={passType ? "password" : "text"}
              value={values.password}
              placeholder={t("Enter your password...")}
              onChange={(e) => {
                if (e.target.value.length >= 0) {
                  setFieldValue("password", e.target.value)
                  handleChange(e)
                }
              }}
            />
            <span
              onClick={() => {
                setPassType(!passType)
              }}
            >
              {passType ? t("show") : t("hide")}
            </span>
          </div>

          {signKey === "signup" ? (
            <span className="form-description">
              {t(
                "At least 8 characters, includng 1 uppercase, 1 lowercase  and 1 number, you can never be too sure."
              )}
            </span>
          ) : (
            <button type="button" className="forgot-button">
              {t("Forgot Password?")}
            </button>
          )}

          {signKey === "signup" && (
            <>
              <label className="sign-label" htmlFor="confPass">
                {t("Confirm Password")}
                <span style={{ color: "red" }}>*</span>
              </label>
              <div className="sign-input">
                <input
                  id="confPass"
                  type={confPassType ? "password" : "text"}
                  value={values.confPass}
                  placeholder={t("Re-enter your password...")}
                  onChange={(e) => {
                    if (e.target.value.length >= 0) {
                      setFieldValue("confPass", e.target.value)
                      handleChange(e)
                    }
                  }}
                />
                <span
                  onClick={() => {
                    setConfPassType(!confPassType)
                  }}
                >
                  {confPassType ? t("show") : t("hide")}
                </span>
              </div>
            </>
          )}

          {signKey === "signup" && (
            <FormControl component="fieldset" style={{ margin: 0 }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.receive_email || false}
                      onChange={(e) => {
                        setFieldValue("receive_email", e.target.checked)
                        handleChange(e)
                      }}
                      name="receive_email"
                      color="primary"
                    />
                  }
                  label={t(
                    "I agree to receive emails with the best deals on the web and newsletter from DeviceList"
                  )}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.agree_policy || false}
                      onChange={(e) => {
                        setFieldValue("agree_policy", e.target.checked)
                        handleChange(e)
                      }}
                      name="agree_policy"
                      color="primary"
                    />
                  }
                  label={
                    <span>
                      {t("I agree to the DeviceList")} <a href="#">{t("Privacy Policy")}</a>
                    </span>
                  }
                />
              </FormGroup>
            </FormControl>
          )}
          <button className="sign-submit" type="submit">
            {signKey === "signup" ? t("Create Customer Account") : t("Log In")}
          </button>
          {signKey === "login" && (
            <button
              className="sign-button"
              type="button"
              onClick={() => {
                setSignKey("signup")
              }}
            >
              {t("Sign Up")}
            </button>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default SignForm
