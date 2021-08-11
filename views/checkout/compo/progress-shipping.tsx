import React, { useRef, useState, useEffect } from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"
import {
  Grid,
  FormGroup,
  TextField,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core"
import countriesData from "../../../const/countriesData"
import statesData from "../../../const/statesData"
import _, { isEmpty } from "lodash"
import PhoneInput from "../../../components/phone-input"
import { SHIPPING_STEP_STATUS, SHIPPING_FORM_TITLE } from "../../../const/_variables"
import { observer } from "mobx-react"
import { shopStore } from "../../../store"
import { formatCountryName, phoneFormatString } from "../../../service/hepler"
import EditIcon from "../../../components/svg/edit-svg"
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined"

type Props = {
  shippingStepStatus: string
  setShippingStepStatus: (val: string) => void
}

const ProgressShipping = ({ shippingStepStatus, setShippingStepStatus }: Props) => {
  const [t] = useTranslation()
  const formikRef = useRef<any>()
  const initialValues = _.cloneDeep(shopStore.orderAddress)

  const [states, setStates] = useState<any[]>(statesData["CA"])
  const [phone, setPhone] = useState("")
  const [formTitle, setFormTitle] = useState(SHIPPING_FORM_TITLE.order_address)

  useEffect(() => {
    if (formikRef.current) {
      if (shippingStepStatus === SHIPPING_STEP_STATUS.order_address) {
        formikRef.current.resetForm({
          values: _.cloneDeep(shopStore.orderAddress),
        })
      } else if (shippingStepStatus === SHIPPING_STEP_STATUS.billing_address) {
        formikRef.current.resetForm({
          values: _.cloneDeep(shopStore.billingAddress),
        })
      }
    }
    if (shippingStepStatus === SHIPPING_STEP_STATUS.order_address) {
      setFormTitle(SHIPPING_FORM_TITLE.order_address)
    } else if (shippingStepStatus === SHIPPING_STEP_STATUS.billing_address) {
      setFormTitle(SHIPPING_FORM_TITLE.billing_address)
    } else if (shippingStepStatus === SHIPPING_STEP_STATUS.confirm_order_address) {
      setFormTitle(SHIPPING_FORM_TITLE.confirm_order_address)
    } else if (shippingStepStatus === SHIPPING_STEP_STATUS.confirm_billing_address) {
      setFormTitle(SHIPPING_FORM_TITLE.confirm_billing_address)
    } else {
      setFormTitle("")
    }
  }, [shippingStepStatus])

  const formSchema = Yup.object().shape({
    firstName: Yup.string().required(t("First Name is required.")),
    lastName: Yup.string().required(t("Last Name is required.")),
    address_1: Yup.string().required(t("Address_1 is required.")),
    city: Yup.string().required(t("City is required.")),
    postcode: Yup.string().required(t("Post Code is required.")),
    country: Yup.string().required(t("Country is required.")),
    state: Yup.string().required(t("State is required.")),
  })

  const onSave = (values: any) => {
    if (values.billing_address && shippingStepStatus === SHIPPING_STEP_STATUS.order_address) {
      shopStore.setOrderAddress(values)
      shopStore.setBillingAddress(values)
      setShippingStepStatus(SHIPPING_STEP_STATUS.confirm_order_address)
      // shopStore.setProgressStatus(CHECKOUT_PROGRESS_STATUS.payment)
    } else if (shippingStepStatus === SHIPPING_STEP_STATUS.order_address) {
      shopStore.setOrderAddress(values)
      setShippingStepStatus(SHIPPING_STEP_STATUS.billing_address)
    } else if (shippingStepStatus === SHIPPING_STEP_STATUS.billing_address) {
      shopStore.setBillingAddress(values)
      setShippingStepStatus(SHIPPING_STEP_STATUS.confirm_order_address)
    }
  }

  const handleNext = () => {
    if (shippingStepStatus === SHIPPING_STEP_STATUS.confirm_order_address) {
      setShippingStepStatus(SHIPPING_STEP_STATUS.confirm_billing_address)
    }
  }

  const loadStates = (countryCode: string) => {
    setStates(statesData[countryCode])
  }

  return (
    <div className="box-cart left-side-shipping">
      {formTitle && (
        <p className="bold" style={{ fontSize: "16px" }}>
          {t(formTitle)}
        </p>
      )}

      {(shippingStepStatus === SHIPPING_STEP_STATUS.order_address ||
        shippingStepStatus === SHIPPING_STEP_STATUS.billing_address) && (
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onSave(values)
          }}
          validationSchema={formSchema}
          innerRef={formikRef}
        >
          {({ values, setFieldValue, errors, touched }) => (
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

              <FormGroup className="form-group">
                <TextField
                  id="address_2"
                  name="address_2"
                  InputLabelProps={{ required: false }}
                  value={values.address_2}
                  error={!!(errors.address_2 && touched.address_2)}
                  className="shipping-form-control"
                  onChange={(e) => {
                    setFieldValue("address_2", e.target.value)
                  }}
                  placeholder={t("Address 2 (building, code ...) - optional")}
                  type="text"
                  variant="outlined"
                  margin="dense"
                  helperText={errors.address_2 && touched.address_2 && errors.address_2}
                />
              </FormGroup>

              <FormGroup className="form-group">
                <TextField
                  id="city"
                  name="city"
                  InputLabelProps={{ required: false }}
                  value={values.city}
                  error={!!(errors.city && touched.city)}
                  className="shipping-form-control"
                  onChange={(e) => {
                    setFieldValue("city", e.target.value)
                  }}
                  placeholder={t("City")}
                  type="text"
                  variant="outlined"
                  margin="dense"
                  helperText={errors.city && touched.city && errors.city}
                />
              </FormGroup>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormGroup className="form-group">
                    <TextField
                      id="postcode"
                      name="postcode"
                      InputLabelProps={{ required: false }}
                      value={values.postcode}
                      error={!!(errors.postcode && touched.postcode)}
                      className="shipping-form-control"
                      onChange={(e) => {
                        setFieldValue("postcode", e.target.value)
                      }}
                      placeholder={t("Postal Code")}
                      type="text"
                      variant="outlined"
                      margin="dense"
                      helperText={errors.postcode && touched.postcode && errors.postcode}
                    />
                  </FormGroup>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormGroup className="form-group">
                    <TextField
                      id="country"
                      name="country"
                      InputLabelProps={{ required: false }}
                      value={values.country}
                      error={!!(errors.country && touched.country)}
                      className="shipping-form-control"
                      onChange={(e) => {
                        setFieldValue("country", e.target.value)
                        setFieldValue("state", statesData[e.target.value][0].code)
                        loadStates(e.target.value)
                      }}
                      placeholder={t("Country")}
                      type="text"
                      variant="outlined"
                      margin="dense"
                      helperText={errors.country && touched.country && errors.country}
                      autoComplete="off"
                      select
                    >
                      {countriesData.map((c) => (
                        <MenuItem key={c.code} value={c.code}>
                          {c.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormGroup>
                </Grid>
              </Grid>

              <FormGroup className="form-group">
                <TextField
                  id="state"
                  name="state"
                  InputLabelProps={{ required: false }}
                  value={values.state}
                  error={!!(errors.state && touched.state)}
                  className="shipping-form-control"
                  onChange={(e) => {
                    setFieldValue("state", e.target.value)
                  }}
                  placeholder={t("State / Province / Region")}
                  type="text"
                  variant="outlined"
                  margin="dense"
                  helperText={errors.state && touched.state && errors.state}
                  autoComplete="off"
                  select
                >
                  {states.length &&
                    !isEmpty(states) &&
                    states.map((state: { [key: string]: string }) => (
                      <MenuItem key={state.code} value={state.code}>
                        {state.name}
                      </MenuItem>
                    ))}
                </TextField>
              </FormGroup>

              {shippingStepStatus === SHIPPING_STEP_STATUS.order_address && (
                <FormGroup className="form-group">
                  <PhoneInput
                    handleSetPhone={(val) => {
                      setFieldValue("phone", val)
                      setPhone(val)
                    }}
                    val={phone}
                    placeholder={t("Phone Number")}
                    label={t("We need it for the delivery, just in case we need to reach you.")}
                  />
                </FormGroup>
              )}

              {shippingStepStatus === SHIPPING_STEP_STATUS.order_address && (
                <FormControl className="custom-form-control" component="fieldset">
                  <FormGroup className="form-group">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.billing_address || false}
                          onChange={(e) => {
                            setFieldValue("billing_address", e.target.checked)
                          }}
                          name="billing_address"
                          color="primary"
                        />
                      }
                      label={t("Same as billing address")}
                    />
                  </FormGroup>
                </FormControl>
              )}

              <div className="shipping-form-submit">
                <button type="submit">{t("Next")}</button>
                <p>{t("or press ENTER")}</p>
              </div>
            </Form>
          )}
        </Formik>
      )}

      {(shippingStepStatus === SHIPPING_STEP_STATUS.confirm_order_address ||
        shippingStepStatus === SHIPPING_STEP_STATUS.confirm_billing_address) && (
        <>
          <p className="registered-address-label">
            {t("Here's the last address registered on DeviceList")}:
          </p>

          {shippingStepStatus === SHIPPING_STEP_STATUS.confirm_order_address && (
            <div className="confirm-address-form">
              <p
                className="change-address"
                onClick={() => {
                  setShippingStepStatus(SHIPPING_STEP_STATUS.order_address)
                }}
              >
                {t("Change Address")}
                <span>
                  <EditIcon />
                </span>
              </p>
              <p>{`${shopStore.orderAddress.firstName} ${shopStore.orderAddress.lastName}`}</p>
              <p>{shopStore.orderAddress.address_1}</p>
              {shopStore.orderAddress.address_2 && <p>{shopStore.orderAddress.address_2}</p>}
              <p>{`${shopStore.orderAddress.postcode}, ${shopStore.orderAddress.city}, ${shopStore.orderAddress.state}`}</p>
              <p>{formatCountryName(shopStore.orderAddress.country)}</p>
              {shopStore.orderAddress.phone && (
                <p className="flex align-center">
                  <span>
                    <PhoneOutlinedIcon />
                  </span>
                  {phoneFormatString(shopStore.orderAddress.phone)}
                </p>
              )}
            </div>
          )}

          {shippingStepStatus === SHIPPING_STEP_STATUS.confirm_billing_address && (
            <div className="confirm-address-form">
              <p
                className="change-address"
                onClick={() => {
                  setShippingStepStatus(SHIPPING_STEP_STATUS.billing_address)
                }}
              >
                {t("Change Address")}
                <span>
                  <EditIcon />
                </span>
              </p>
              <p>{`${shopStore.billingAddress.firstName} ${shopStore.billingAddress.lastName}`}</p>
              <p>{shopStore.billingAddress.address_1}</p>
              {shopStore.billingAddress.address_2 && <p>{shopStore.billingAddress.address_2}</p>}
              <p>{`${shopStore.billingAddress.postcode}, ${shopStore.billingAddress.city}, ${shopStore.billingAddress.state}`}</p>
              <p>{formatCountryName(shopStore.billingAddress.country)}</p>
              {shopStore.billingAddress.phone && (
                <p className="flex align-center">
                  <span>
                    <PhoneOutlinedIcon />
                  </span>
                  {phoneFormatString(shopStore.billingAddress.phone)}
                </p>
              )}
            </div>
          )}

          <div className="shipping-form-submit">
            <button type="button" onClick={handleNext}>
              {t("Next")}
            </button>
            <p>{t("or press ENTER")}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default observer(ProgressShipping)
