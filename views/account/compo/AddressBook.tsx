import React, { useState, useEffect, useRef } from "react"
import { observer } from "mobx-react"
import { authStore } from "../../../store"
import { useTranslation } from "react-i18next"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import DeleteAddress from "../modal/delete-address"
import { isEmpty } from "lodash"
import { Form, Formik, FormikHelpers } from "formik"
import { FormGroup, TextField, Grid, MenuItem } from "@material-ui/core"
import * as Yup from "yup"
import _ from "lodash"
import countriesData from "../../../const/countriesData"
import statesData from "../../../const/statesData"
import { ToastMsgParams } from "../../../components/toast/toast-msg-params"
import Toast from "../../../components/toast/toast"
import { formatCountryName } from "../../../service/hepler"

type SelectParam = {
  name: string
  code: string
}

type FormParam = {
  address_1: string
  address_2: string
  city: string
  state: string
  country: string
  postcode: string
}

const AddressBook = () => {
  const [t] = useTranslation()
  const delayTime = 2000
  const formikRef = useRef<any>()
  const initialValues = {} as FormParam

  const [addStatus, setAddStatus] = useState(false)
  const [editStatus, setEditStatus] = useState(false)
  const [address, setAddress] = useState(authStore.accountData.addressBook.address)
  const [editIndex, setEditIndex] = useState(-1)
  const [deleteIndex, setDeleteIndex] = useState(-1)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteTitle, setDeleteTitle] = useState("")
  const [deleteInfo, setDeleteInfo] = useState<any>({} as any)
  const [toastParams, setToastParams] = useState<ToastMsgParams>({} as ToastMsgParams)
  const [states, setStates] = useState<SelectParam[]>(statesData["CA"])

  useEffect(() => {
    setAddress(authStore.accountData.addressBook.address)
    setEditIndex(-1)
  }, [authStore.accountData])

  useEffect(() => {
    if (editIndex > -1) {
      const info = _.cloneDeep(authStore.accountData.addressBook.address[editIndex].info)
      if (formikRef.current) {
        formikRef.current.resetForm({
          values: {
            address_1: info.address_1,
            address_2: info.address_2,
            city: info.city,
            state: info.state,
            country: info.country,
            postcode: info.postcode,
          },
        })
        setStates(statesData[info.country])
      }
    }
  }, [editIndex])

  const formSchema = Yup.object().shape({
    address_1: Yup.string().required(t("required")).min(1, t("required")),
    city: Yup.string().required(t("required")).min(1, t("required")),
    state: Yup.string().required(t("required")).min(1, t("required")),
    country: Yup.string().required(t("required")).min(1, t("required")),
    postcode: Yup.string().required(t("required")).min(1, t("required")),
  })

  const onSave = (values: FormParam, actions: FormikHelpers<any>) => {
    actions.setSubmitting(true)

    const cntAccountData = _.cloneDeep(authStore.accountData)
    let updateInfo = cntAccountData.addressBook.address[editIndex].info
    updateInfo = {
      name: updateInfo.name,
      address_1: values.address_1,
      address_2: values.address_2,
      city: values.city,
      state: values.state,
      postcode: values.postcode,
      country: values.country,
    }
    cntAccountData.addressBook.address[editIndex].info = updateInfo

    setTimeout(() => {
      authStore.setAccountData(cntAccountData)
      setToastParams({
        msg: `${t(cntAccountData.addressBook.address[editIndex].title)} ${t(
          "has been updated successfully."
        )}`,
        isSuccess: true,
      })
      setEditStatus(false)
      setEditIndex(-1)
      actions.setSubmitting(false)
    }, delayTime)
  }

  const loadStates = (countryCode: string) => {
    setStates(statesData[countryCode])
  }

  const resetStatuses = () => {
    setToastParams({
      msg: "",
      isError: false,
      isWarning: false,
      isInfo: false,
      isSuccess: false,
    })
  }

  return (
    <div className="account-details">
      <p className="details-title">{t(authStore.accountData.addressBook.title)}</p>
      {!addStatus && !editStatus && (
        <button
          className="icon-button"
          onClick={() => {
            setAddStatus(true)
          }}
        >
          <span>
            <img src="/img/icons/plus.png" alt="plus" />
          </span>
        </button>
      )}
      {!addStatus && (
        <>
          {address.map((item, index) => {
            return (
              <div key={index} className="account-address">
                <div className="account-address-header">
                  <p>{t(item.title)}</p>
                  {index !== editIndex && (
                    <div
                      onClick={() => {
                        setEditIndex(index)
                        setEditStatus(true)
                      }}
                    >
                      <EditOutlinedIcon style={{ color: "#CBBBFA" }} />
                    </div>
                  )}
                </div>
                {index !== editIndex && (
                  <div className="account-address-content">
                    <p>{item.info.name}</p>
                    <p>{item.info.address_1}</p>
                    <p>{`${item.info.city}, ${item.info.state} ${item.info.postcode}`}</p>
                    <p>{formatCountryName(item.info.country)}</p>
                  </div>
                )}
                {index !== editIndex && (
                  <button
                    className="delete-address"
                    onClick={() => {
                      setDeleteTitle(item.title)
                      setDeleteInfo(item.info)
                      setDeleteIndex(index)
                      setDeleteModal(true)
                    }}
                  >
                    {t("Delete address")}
                  </button>
                )}
                {index === editIndex && (
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                      onSave(values, actions)
                    }}
                    validationSchema={formSchema}
                    innerRef={formikRef}
                  >
                    {({ values, handleChange, setFieldValue, errors, touched, isSubmitting }) => (
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
                              handleChange(e)
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
                              handleChange(e)
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
                                  handleChange(e)
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
                                  handleChange(e)
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
                                    <MenuItem
                                      key={state.code}
                                      value={state.code}
                                      className="select-items"
                                    >
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
                                  handleChange(e)
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
                                  handleChange(e)
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
              </div>
            )
          })}
        </>
      )}
      {deleteIndex >= 0 && !isEmpty(deleteInfo) && (
        <DeleteAddress
          open={deleteModal}
          setOpen={setDeleteModal}
          deleteIndex={deleteIndex}
          deleteTitle={deleteTitle}
          deleteInfo={deleteInfo}
        />
      )}
      <Toast params={toastParams} resetStatuses={resetStatuses} />
    </div>
  )
}

export default observer(AddressBook)
