import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { useTranslation } from "react-i18next"

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

  const handleClose = () => {
    init()
    setOpen(false)
  }

  const init = () => {
    setCode("")
    setState({
      appointment: false,
      booking: false,
      financing: false,
      curbside: false,
      authorized: false,
    })
  }

  const [state, setState] = useState({
    appointment: false,
    booking: false,
    financing: false,
    curbside: false,
    authorized: false,
  })
  const [code, setCode] = useState("")

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const { appointment, booking, financing, curbside, authorized } = state

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("post", code, state)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="find-store-modal"
    >
      <form className="find-store-menu-container" onSubmit={handleSubmit}>
        <p className="store-menu-title" style={{ marginBottom: "20px" }}>
          {t("Find a Store")}
        </p>
        <label className="post-code-label" htmlFor="post-code">
          {t("Enter your address or postal code")}
        </label>
        <input
          className="post-code-input"
          id="post-code"
          value={code}
          onChange={(e) => {
            setCode(e.target.value)
          }}
        />
        <FormControl component="fieldset" className={classes.formControl}>
          <p className="store-menu-title">{t("Filter store by")}</p>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={appointment}
                  onChange={handleChange}
                  name="appointment"
                  color="primary"
                />
              }
              label={t("In-store appointments")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={booking}
                  onChange={handleChange}
                  name="booking"
                  color="primary"
                />
              }
              label={t("Online Booking")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={financing}
                  onChange={handleChange}
                  name="financing"
                  color="primary"
                />
              }
              label={t("Financing Available")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={curbside}
                  onChange={handleChange}
                  name="curbside"
                  color="primary"
                />
              }
              label={t("Curbside pick-up")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={authorized}
                  onChange={handleChange}
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
      </form>
    </Modal>
  )
}

export default FindStoreModal
