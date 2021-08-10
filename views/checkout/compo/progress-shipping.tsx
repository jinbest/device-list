import React, { useRef } from "react"
import { Form, Formik, FormikHelpers } from "formik"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"
import { Grid, FormGroup, TextField } from "@material-ui/core"
import Loading from "../../../components/Loading"
import { ProgressShippingFormParam } from "../../../models/checkout-params"

const ProgressShipping = () => {
  const [t] = useTranslation()
  const formikRef = useRef<any>()

  const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    address_1: "",
    address_2: "",
    city: "",
    postcode: "",
    country: "",
    state: "",
    phone: "",
  } as ProgressShippingFormParam

  const formSchema = Yup.object().shape({
    firstName: Yup.string().required(t("First Name is required.")),
    lastName: Yup.string().required(t("Last Name is required.")),
    address_1: Yup.string().required(t("Address_1 is required.")),
    city: Yup.string().required(t("City is required.")),
    postcode: Yup.string().required(t("Post Code is required.")),
    country: Yup.string().required(t("Country is required.")),
    state: Yup.string().required(t("State is required.")),
    phone: Yup.string().required(t("Phone Number is required.")),
  })

  const onSave = (values: any, actions: FormikHelpers<any>) => {
    actions.setSubmitting(true)
    console.log("values", values)
    actions.setSubmitting(false)
  }

  return (
    <div className="box-cart left-side-shipping">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          onSave(values, actions)
        }}
        validationSchema={formSchema}
        innerRef={formikRef}
      >
        {({ values, setFieldValue, errors, touched, isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormGroup className="form-group">
                  <TextField
                    id="firstName"
                    name="firstName"
                    InputLabelProps={{ required: false }}
                    value={values.firstName}
                    error={!!(errors.firstName && touched.firstName)}
                    className="shipping-form-control"
                    onChange={(e) => {
                      setFieldValue("firstName", e.target.value)
                    }}
                    placeholder={t("First Name*")}
                    type="text"
                    variant="outlined"
                    margin="dense"
                    helperText={errors.firstName && touched.firstName && errors.firstName}
                  />
                </FormGroup>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormGroup className="form-group">
                  <TextField
                    id="lastName"
                    name="lastName"
                    InputLabelProps={{ required: false }}
                    value={values.lastName}
                    error={!!(errors.lastName && touched.lastName)}
                    className="shipping-form-control"
                    onChange={(e) => {
                      setFieldValue("lastName", e.target.value)
                    }}
                    placeholder={t("Last Name*")}
                    type="text"
                    variant="outlined"
                    margin="dense"
                    helperText={errors.lastName && touched.lastName && errors.lastName}
                  />
                </FormGroup>
              </Grid>
            </Grid>

            <FormGroup className="form-group">
              <TextField
                id="companyName"
                name="companyName"
                InputLabelProps={{ required: false }}
                value={values.companyName}
                error={!!(errors.companyName && touched.companyName)}
                className="shipping-form-control"
                onChange={(e) => {
                  setFieldValue("companyName", e.target.value)
                }}
                placeholder={t("Company - optional")}
                type="text"
                variant="outlined"
                margin="dense"
                helperText={errors.companyName && touched.companyName && errors.companyName}
              />
            </FormGroup>

            <FormGroup className="form-group">
              <TextField
                id="address_1"
                name="address_1"
                InputLabelProps={{ required: false }}
                value={values.address_1}
                error={!!(errors.address_1 && touched.address_1)}
                className="shipping-form-control"
                onChange={(e) => {
                  setFieldValue("address_1", e.target.value)
                }}
                placeholder={t("Address (number and name)")}
                type="text"
                variant="outlined"
                margin="dense"
                helperText={errors.address_1 && touched.address_1 && errors.address_1}
              />
            </FormGroup>

            <div className="shipping-form-submit">
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  opacity: isSubmitting ? 0.7 : "",
                  cursor: isSubmitting ? "inherit" : "",
                }}
              >
                {isSubmitting ? (
                  <span>
                    <Loading />
                  </span>
                ) : (
                  <>{t("Next")}</>
                )}
              </button>
              <p>{t("or press ENTER")}</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ProgressShipping
