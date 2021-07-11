import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
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

type Props = {
  open: boolean
  setOpen: (val: boolean) => void
}

const FindStoreModal = ({ open, setOpen }: Props) => {
  const classes = useStyles()
  const [t] = useTranslation()

  const initialValues = {
    code: "",
    appointment: false,
    booking: false,
    financing: false,
    curbside: false,
    authorized: false,
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSave = (values: any, actions: FormikHelpers<any>) => {
    actions.setSubmitting(true)

    console.log("values", values)

    actions.setSubmitting(false)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="find-store-modal"
    >
      <div>
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
                    handleChange(e)
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
                          handleChange(e)
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
                          handleChange(e)
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
                          handleChange(e)
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
                          handleChange(e)
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
                          handleChange(e)
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
      </div>
    </Modal>
  )
}

export default FindStoreModal
