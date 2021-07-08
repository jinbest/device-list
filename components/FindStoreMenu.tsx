import React, { useState } from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Menu, { MenuProps } from "@material-ui/core/Menu"
import { useTranslation } from "react-i18next"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [t] = useTranslation()
  const classes = useStyles()

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

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    init()
    setAnchorEl(null)
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

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("post", code, state)
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
      </StyledMenu>
    </div>
  )
}

export default FindStoreMenu
