import React, { useState } from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Menu, { MenuProps } from "@material-ui/core/Menu"
import { useTranslation } from "react-i18next"
import { Form, Formik, FormikHelpers, yupToFormErrors } from "formik"
import { Checkbox, FormControlLabel, FormGroup, FormControl } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: 0,
  },
}))

const StyledMenu = withStyles({
  paper: {
    borderRadius: "5px",
    boxShadow: "0 8px 15px 5px rgba(0,0,0,0.25)",
    overflow: "inherit !important",
    marginTop: "5px",
    border: "1px solid #C4C4C4",
    background: "#EFEFEF",
    top: "35px !important",
    width: 400,
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))

const FindStoreMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [t] = useTranslation()
  const classes = useStyles()

  const initialValues = {
    code: "",
    appointment: false,
    booking: false,
    financing: false,
    curbside: false,
    authorized: false,
  }

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onSave = (values: any, actions: FormikHelpers<any>) => {
    actions.setSubmitting(true)

    console.log("values", values)

    actions.setSubmitting(false)
  }

  return (
    <div className="find-a-store-menu">
      <button aria-controls="find-store-menu" aria-haspopup="true" onClick={handleOpen}>
        {t("Find a Store")}
      </button>
      <StyledMenu
        id="find-store-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="triangle" style={{ right: "40px" }}></div>
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
          {({ values, setFieldValue }) => (
            <Form className="find-store-menu-container">
              <p className="store-menu-title" style={{ marginBottom: "20px" }}>
                {t("Find a Store")}
              </p>
              <label className="post-code-label" htmlFor="code">
                {t("Enter your address or postal code")}
              </label>
              <input
                className="post-code-input"
                id="code"
                value={values.code}
                onChange={(e) => {
                  if (e.target.value.length >= 0) {
                    setFieldValue("code", e.target.value)
                  }
                }}
              />
              <FormControl component="fieldset" className={classes.formControl}>
                <p className="store-menu-title">{t("Filter store by")}</p>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.appointment || false}
                        onChange={(e) => {
                          setFieldValue("appointment", e.target.checked)
                        }}
                        name="appointment"
                        color="primary"
                      />
                    }
                    label={t("In-store appointments")}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.booking || false}
                        onChange={(e) => {
                          setFieldValue("booking", e.target.checked)
                        }}
                        name="booking"
                        color="primary"
                      />
                    }
                    label={t("Online Booking")}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.financing || false}
                        onChange={(e) => {
                          setFieldValue("financing", e.target.checked)
                        }}
                        name="financing"
                        color="primary"
                      />
                    }
                    label={t("Financing Available")}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.curbside}
                        onChange={(e) => {
                          setFieldValue("curbside", e.target.checked)
                        }}
                        name="curbside"
                        color="primary"
                      />
                    }
                    label={t("Curbside pick-up")}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.authorized}
                        onChange={(e) => {
                          setFieldValue("authorized", e.target.checked)
                        }}
                        name="authorized"
                        color="primary"
                      />
                    }
                    label={t("Apple authorized")}
                  />
                </FormGroup>
              </FormControl>
              <button className="store-menu-submit" type="submit">
                {t("Find a Store")}
              </button>
            </Form>
          )}
        </Formik>
      </StyledMenu>
    </div>
  )
}

export default FindStoreMenu
