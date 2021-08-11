import React, { useState, useRef } from "react"
import { useTranslation } from "react-i18next"
import { Grid, FormGroup, TextField, FormControlLabel, Radio, RadioGroup } from "@material-ui/core"
import * as Yup from "yup"
import { Form, Formik, FormikHelpers } from "formik"
import { PAYMENT_OPTIONS, regxCVV } from "../../../const/_variables"
import { PaymentOptionParam } from "../../../models/checkout-params"
import { PaymentLogos } from "../../../static/mock/mock-data"
import { ImageDataParam, PaymentCardInfoParam } from "../../../models/account-param"
import { observer } from "mobx-react"
// import { shopStore, authStore } from "../../../store"
import { formatCardNumber, formatExpiryDate } from "../../../service/hepler"
import CustomInput from "../../../components/custom-input"

const ProgressPayment = () => {
  const [t] = useTranslation()
  const formikRef = useRef<any>()
  const initialValues = {} as PaymentCardInfoParam

  const [paymentOption, setPaymentOption] = useState<PaymentOptionParam>(
    PAYMENT_OPTIONS.credit_debit.code
  )
  const [promoCode, setPromoCode] = useState("")

  const handlePaymentOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentOption((event.target as HTMLInputElement).value as PaymentOptionParam)
  }

  const formSchema = Yup.object().shape({
    name: Yup.string().required(t("required")).min(1, t("required")),
    number: Yup.string().required(t("required")).min(16, t("required")),
    expiryDate: Yup.string().required(t("required")).min(1, t("required")),
    cvv: Yup.string().required(t("required")).min(3, t("required")),
  })

  const onSave = (values: PaymentCardInfoParam, actions: FormikHelpers<any>) => {
    actions.setSubmitting(false)
    console.log("values", values)
    // shopStore.setProgressStatus(CHECKOUT_PROGRESS_STATUS.confirmation)
  }

  const handleCheckPromoCode = () => {
    console.log("promo-code", promoCode)
  }

  return (
    <>
      <div className="box-cart left-side-shipping">
        <p className="bold" style={{ fontSize: "16px" }}>
          {t("Confirm and Pay")}
        </p>

        <RadioGroup
          aria-label="payment-options"
          name="payment-options"
          value={paymentOption}
          onChange={handlePaymentOptionChange}
          className="customize-radio-group"
        >
          <div style={{ paddingBottom: "8px" }}>
            <FormControlLabel
              value={PAYMENT_OPTIONS.credit_debit.code}
              control={<Radio />}
              label={t(PAYMENT_OPTIONS.credit_debit.text)}
            />
            <div className="payment-logos">
              {PaymentLogos.credit.map((item: ImageDataParam, index: number) => (
                <img src={item.img_src} alt={item.alt} key={index} />
              ))}
            </div>
          </div>
        </RadioGroup>

        {paymentOption === PAYMENT_OPTIONS.credit_debit.code && (
          <div className="radio-select-payment-form">
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
                  <FormGroup className="form-group">
                    <TextField
                      id="name"
                      name="name"
                      InputLabelProps={{ required: false }}
                      value={values.name || ""}
                      error={!!(errors.name && touched.name)}
                      className="shipping-form-control"
                      onChange={(e) => {
                        setFieldValue("name", e.target.value)
                      }}
                      placeholder={`${t("Enter your Credit Card name")}...`}
                      type="text"
                      variant="outlined"
                      margin="dense"
                      helperText={errors.name && touched.name && errors.name}
                      disabled={isSubmitting}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="form-group">
                    <TextField
                      id="number"
                      name="number"
                      InputLabelProps={{ required: false }}
                      value={formatCardNumber(values.number) || ""}
                      error={!!(errors.number && touched.number)}
                      className="shipping-form-control"
                      onChange={(e) => {
                        if (e.target.value.length > 19) {
                          return
                        }
                        setFieldValue("number", e.target.value.replace(/[^\d.-]/g, ""))
                      }}
                      placeholder={`${t("Enter your Card Number")}...`}
                      type="text"
                      variant="outlined"
                      margin="dense"
                      helperText={errors.number && touched.number && errors.number}
                      disabled={isSubmitting}
                    />
                  </FormGroup>

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormGroup className="form-group">
                        <TextField
                          id="expiryDate"
                          name="expiryDate"
                          InputLabelProps={{ required: false }}
                          value={formatExpiryDate(values.expiryDate) || ""}
                          error={!!(errors.expiryDate && touched.expiryDate)}
                          className="shipping-form-control"
                          onChange={(e) => {
                            if (e.target.value.length > 5) {
                              return
                            }
                            setFieldValue("expiryDate", e.target.value.replace(/[^\d.-]/g, ""))
                          }}
                          placeholder={`${t("Expiration Date")}: 01/21`}
                          type="text"
                          variant="outlined"
                          margin="dense"
                          helperText={errors.expiryDate && touched.expiryDate && errors.expiryDate}
                          disabled={isSubmitting}
                        />
                      </FormGroup>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormGroup className="form-group">
                        <TextField
                          id="cvv"
                          name="cvv"
                          InputLabelProps={{ required: false }}
                          value={values.cvv || ""}
                          error={!!(errors.cvv && touched.cvv)}
                          className="shipping-form-control"
                          onChange={(e) => {
                            if (regxCVV.test(e.target.value)) {
                              setFieldValue("cvv", e.target.value)
                            } else {
                              return
                            }
                          }}
                          placeholder="CVV: 123"
                          type="text"
                          variant="outlined"
                          margin="dense"
                          helperText={errors.cvv && touched.cvv && errors.cvv}
                          disabled={isSubmitting}
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>

                  <div className="shipping-form-submit">
                    <button type="submit">{t("Confirm and Pay")}</button>
                    <p>{t("or press ENTER")}</p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>

      <div className="box-cart left-side-shipping" style={{ marginTop: "15px" }}>
        <p className="bold" style={{ fontSize: "16px" }}>
          {t("Enter your promo code")}
        </p>
        <div className="promo-code-form">
          <div className="promo-input">
            <CustomInput value={promoCode} setValue={setPromoCode} placeholder="Promo Code" />
          </div>
          <div className="shipping-form-submit">
            <button type="button" onClick={handleCheckPromoCode}>
              {t("Check this code")}
            </button>
          </div>
        </div>
      </div>

      <div className="progress-payment-logos">
        <div>
          <img src="/img/checkout/buy-now-pay-later.png" alt="buy-now-pay-later" />
          <p>{t("Buy Now Pay Later")}</p>
        </div>
        <div>
          <img src="/img/checkout/12-month-warranty.png" alt="12-month-warranty" />
          <p>{t("12 Month Warranty")}</p>
        </div>
        <div>
          <img src="/img/checkout/secure-payments.png" alt="secure-payments" />
          <p>{t("Verified and Secure Transactions")}</p>
        </div>
      </div>
    </>
  )
}

export default observer(ProgressPayment)
