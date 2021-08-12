import React, { useEffect, useState } from "react"
import { Form, Formik, FormikHelpers } from "formik"
import {
  FormGroup,
  TextField,
  Grid,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormControl,
} from "@material-ui/core"
import * as Yup from "yup"
import { observer } from "mobx-react"
import { authStore, shopStore } from "../../../store"
import { AddressBookFormParam, AddressBookParam } from "../../../models/account-param"
import { AddressParam, AddressKeyParam } from "../../../models/customer-data-params"
import countriesData from "../../../const/countriesData"
import statesData from "../../../const/statesData"
import { useTranslation } from "react-i18next"
import _, { isEmpty } from "lodash"
import { ToastMsgParams } from "../../../components/toast/toast-msg-params"

type Props = {
  states: any[]
  editIndex: number
  addStatus: boolean
  setStates: (val: any[]) => void
  setEditIndex: (val: number) => void
  setAddStatus: (val: boolean) => void
  setToastParams: (val: ToastMsgParams) => void
  inputAddressStatus?: boolean
}

const AddressBookForm = React.forwardRef(
  (
    {
      states,
      editIndex,
      addStatus,
      setStates,
      setEditIndex,
      setToastParams,
      setAddStatus,
      inputAddressStatus,
    }: Props,
    ref: any
  ) => {
    const [t] = useTranslation()
    const delayTime = 2000
    const initialValues = {} as AddressBookFormParam

    const [selectedAddress, setSelectedAddress] = useState<AddressParam>({} as AddressParam)
    const [billing, setBilling] = useState(false)
    const [shipping, setShipping] = useState(false)
    const [filteredAddresses, setFilteredAddresses] = useState<AddressParam[]>([] as AddressParam[])
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
      const newFiltered = [] as AddressParam[],
        allAddresses = _.cloneDeep(shopStore.address_list)
      allAddresses.forEach((item: AddressParam) => {
        if (billing && item.address_type === "BILLING") {
          newFiltered.push(item)
        } else if (shipping && item.address_type === "SHIPPING") {
          newFiltered.push(item)
        }
      })
      if (newFiltered.length) {
        setSelectedAddress(newFiltered[0])
      }
      setFilteredAddresses(newFiltered)
    }, [billing, shipping])

    const handleSaveNewAddress = () => {
      setIsSubmitting(true)
      console.log("selectedAddress", selectedAddress, billing, shipping)
      setIsSubmitting(false)
    }

    useEffect(() => {
      if (editIndex > -1) {
        const info = _.cloneDeep(authStore.accountData.addressBook.address[editIndex].info)
        if (ref.current) {
          ref.current.resetForm({
            values: {
              address_1: info.address_1,
              address_2: info.address_2,
              city: info.city,
              state: info.state,
              country: info.country,
              postcode: info.postcode,
              billing: false,
              delivery: false,
            },
          })
          setStates(statesData[info.country])
        }
      } else if (addStatus && inputAddressStatus) {
        if (ref.current) {
          ref.current.resetForm({
            values: {
              address_1: "",
              address_2: "",
              city: "",
              state: statesData["CA"][0].code,
              country: "CA",
              postcode: "",
              billing: true,
              delivery: false,
            },
          })
          setStates(statesData["CA"])
        }
      }
    }, [editIndex, addStatus])

    const formSchema = Yup.object().shape({
      address_1: Yup.string().required(t("required")).min(1, t("required")),
      city: Yup.string().required(t("required")).min(1, t("required")),
      state: Yup.string().required(t("required")).min(1, t("required")),
      country: Yup.string().required(t("required")).min(1, t("required")),
      postcode: Yup.string().required(t("required")).min(1, t("required")),
    })

    const onSave = (values: AddressBookFormParam, actions: FormikHelpers<any>) => {
      actions.setSubmitting(true)
      let msg = "",
        isWarning = false

      const cntAccountData = _.cloneDeep(authStore.accountData)
      if (editIndex > -1) {
        let updateInfo = cntAccountData.addressBook.address[editIndex].info
        updateInfo = {
          first_name: updateInfo.first_name,
          last_name: updateInfo.last_name,
          address_1: values.address_1,
          address_2: values.address_2,
          city: values.city,
          state: values.state,
          postcode: values.postcode,
          country: values.country,
        } as AddressParam
        cntAccountData.addressBook.address[editIndex].info = updateInfo
      } else if (addStatus) {
        if (!values.billing && !values.delivery) {
          msg = t("You have to check Billing Address or Delivery Address.")
          isWarning = true
          setToastParams({
            msg,
            isSuccess: !isWarning,
            isWarning: isWarning,
          })
          actions.setSubmitting(false)
          return
        } else {
          if (values.billing) {
            cntAccountData.addressBook.address.push({
              title: "Billing Address",
              type: "BILLING",
              info: {
                first_name: authStore.mockCredential.first_name,
                last_name: authStore.mockCredential.last_name,
                address_1: values.address_1,
                address_2: values.address_2,
                city: values.city,
                state: values.state,
                postcode: values.postcode,
                country: values.country,
              },
            } as AddressBookParam)
          }
          if (values.delivery) {
            cntAccountData.addressBook.address.push({
              title: "Delivery Address",
              type: "SHIPPING",
              info: {
                first_name: authStore.mockCredential.first_name,
                last_name: authStore.mockCredential.last_name,
                address_1: values.address_1,
                address_2: values.address_2,
                city: values.city,
                state: values.state,
                postcode: values.postcode,
                country: values.country,
              },
            } as AddressBookParam)
          }
        }
      }

      setTimeout(() => {
        authStore.setAccountData(cntAccountData)
        if (editIndex > -1) {
          msg = `${t(cntAccountData.addressBook.address[editIndex].title)} ${t(
            "has been updated successfully."
          )}`
        } else if (addStatus) {
          msg = t("New Address has been added.")
        }
        setToastParams({
          msg,
          isSuccess: !isWarning,
          isWarning: isWarning,
        })
        actions.setSubmitting(false)
        setAddStatus(false)
        setEditIndex(-1)
      }, delayTime)
    }

    const loadStates = (countryCode: string) => {
      setStates(statesData[countryCode])
    }

    const handleSelectAddress = (key: AddressKeyParam, val: string | null) => {
      const selIndex = _.findIndex(filteredAddresses, (o) => o[key] === val)
      if (selIndex > -1) {
        setSelectedAddress(filteredAddresses[selIndex])
      }
    }

    return (
      <>
        {(!addStatus || (addStatus && inputAddressStatus)) && (
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              onSave(values, actions)
            }}
            validationSchema={formSchema}
            innerRef={ref}
          >
            {({ values, setFieldValue, errors, touched, isSubmitting }) => (
              <Form className="my-details-form">
                <label className="my-details-label" htmlFor="address_1">
                  {t("Street Address")}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <FormGroup className="form-group">
                  <TextField
                    id="address_1"
                    name="address_1"
                    InputLabelProps={{ required: false }}
                    value={values.address_1 || ""}
                    error={!!(errors.address_1 && touched.address_1)}
                    className="form-control"
                    onChange={(e) => {
                      setFieldValue("address_1", e.target.value)
                    }}
                    placeholder={`${t("Enter your street address")}...`}
                    type="text"
                    variant="outlined"
                    margin="dense"
                    helperText={errors.address_1 && touched.address_1 && errors.address_1}
                    disabled={isSubmitting}
                    required
                  />
                </FormGroup>

                <label className="my-details-label" htmlFor="address_2">
                  {`${t("Second Address")} (${t("optional")})`}
                </label>
                <FormGroup className="form-group">
                  <TextField
                    id="address_2"
                    name="address_2"
                    InputLabelProps={{ required: false }}
                    value={values.address_2 || ""}
                    error={!!(errors.address_2 && touched.address_2)}
                    className="form-control"
                    onChange={(e) => {
                      setFieldValue("address_2", e.target.value)
                    }}
                    type="text"
                    variant="outlined"
                    margin="dense"
                    helperText={errors.address_2 && touched.address_2 && errors.address_2}
                    disabled={isSubmitting}
                  />
                </FormGroup>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <label className="my-details-label" htmlFor="city">
                      {t("City")}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <FormGroup className="form-group">
                      <TextField
                        id="city"
                        name="city"
                        InputLabelProps={{ required: false }}
                        value={values.city || ""}
                        error={!!(errors.city && touched.city)}
                        className="form-control"
                        onChange={(e) => {
                          setFieldValue("city", e.target.value)
                        }}
                        type="text"
                        variant="outlined"
                        margin="dense"
                        helperText={errors.city && touched.city && errors.city}
                        disabled={isSubmitting}
                      />
                    </FormGroup>
                  </Grid>

                  <Grid item xs={6}>
                    <label className="my-details-label" htmlFor="state">
                      {t("Province")}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <FormGroup className="form-group">
                      <TextField
                        id="state"
                        name="state"
                        InputLabelProps={{ required: false }}
                        value={values.state || ""}
                        error={!!(errors.state && touched.state)}
                        className="form-control"
                        onChange={(e) => {
                          setFieldValue("state", e.target.value)
                        }}
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
                            <MenuItem key={state.code} value={state.code} className="select-items">
                              {state.name}
                            </MenuItem>
                          ))}
                      </TextField>
                    </FormGroup>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <label className="my-details-label" htmlFor="country">
                      {t("Country")}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <FormGroup className="form-group">
                      <TextField
                        id="country"
                        name="country"
                        InputLabelProps={{ required: false }}
                        value={values.country || ""}
                        error={!!(errors.country && touched.country)}
                        className="form-control"
                        onChange={(e) => {
                          setFieldValue("country", e.target.value)
                          setFieldValue("state", statesData[e.target.value][0].code)
                          loadStates(e.target.value)
                        }}
                        type="text"
                        variant="outlined"
                        margin="dense"
                        helperText={errors.country && touched.country && errors.country}
                        autoComplete="off"
                        select
                      >
                        {countriesData.map((c) => (
                          <MenuItem key={c.code} value={c.code} className="select-items">
                            {c.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormGroup>
                  </Grid>

                  <Grid item xs={6}>
                    <label className="my-details-label" htmlFor="postcode">
                      {t("Postal Code")}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <FormGroup className="form-group">
                      <TextField
                        id="postcode"
                        name="postcode"
                        InputLabelProps={{ required: false }}
                        value={values.postcode || ""}
                        error={!!(errors.postcode && touched.postcode)}
                        className="form-control"
                        onChange={(e) => {
                          setFieldValue("postcode", e.target.value)
                        }}
                        type="text"
                        variant="outlined"
                        margin="dense"
                        helperText={errors.postcode && touched.postcode && errors.postcode}
                        disabled={isSubmitting}
                      />
                    </FormGroup>
                  </Grid>
                </Grid>

                {addStatus && (
                  <FormControl component="fieldset" style={{ margin: 0, padding: "20px 10px" }}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={values.billing || false}
                            onChange={(e) => {
                              setFieldValue("billing", e.target.checked)
                            }}
                            name="billing"
                            color="primary"
                          />
                        }
                        label={t("Billing Address")}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={values.delivery || false}
                            onChange={(e) => {
                              setFieldValue("delivery", e.target.checked)
                            }}
                            name="delivery"
                            color="primary"
                          />
                        }
                        label={t("Delivery Address")}
                      />
                    </FormGroup>
                  </FormControl>
                )}

                <button className="icon-button" type="submit" disabled={isSubmitting}>
                  <span>
                    {!isSubmitting ? (
                      <img src="/img/icons/save-blue.png" alt="save-blue" />
                    ) : (
                      <img src="/img/icons/save-grey.png" alt="save-grey" />
                    )}
                  </span>
                </button>
              </Form>
            )}
          </Formik>
        )}
        {addStatus && !inputAddressStatus && (
          <>
            <FormGroup className="form-group">
              <TextField
                name="id"
                InputLabelProps={{ required: false }}
                value={selectedAddress.id || ""}
                className="shipping-form-control"
                onChange={(e) => {
                  handleSelectAddress("id", e.target.value)
                }}
                type="text"
                variant="outlined"
                margin="dense"
                autoComplete="off"
                select
              >
                {filteredAddresses.map((item: AddressParam, index: number) => (
                  <MenuItem key={index} value={item.id}>
                    {item.address_1}
                  </MenuItem>
                ))}
              </TextField>
            </FormGroup>

            <FormControl component="fieldset" style={{ margin: 0, padding: "20px 10px" }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={billing}
                      onChange={(e) => {
                        setBilling(e.target.checked)
                      }}
                      name="billing"
                      color="primary"
                    />
                  }
                  label={t("Billing Address")}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={shipping}
                      onChange={(e) => {
                        setShipping(e.target.checked)
                      }}
                      name="shipping"
                      color="primary"
                    />
                  }
                  label={t("Delivery Address")}
                />
              </FormGroup>
            </FormControl>

            <button className="icon-button" type="button" onClick={handleSaveNewAddress}>
              <span>
                {!isSubmitting ? (
                  <img src="/img/icons/save-blue.png" alt="save-blue" />
                ) : (
                  <img src="/img/icons/save-grey.png" alt="save-grey" />
                )}
              </span>
            </button>
          </>
        )}
      </>
    )
  }
)

export default observer(AddressBookForm)
