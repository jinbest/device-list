import React, { useState } from "react"
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined"
import Radio, { RadioProps } from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import { useTranslation } from "react-i18next"
import { ProductParam } from "../../../models/shop-page-params"
import { FormControlLabel, FormControl } from "@material-ui/core"

type Props = {
  product: ProductParam
}

const ProductTowardsCertified = ({ product }: Props) => {
  const [t] = useTranslation()

  const [addCarts, setAddCarts] = useState(1)

  return (
    <div className="product-towards-certified">
      <div className="shadow-card">
        <h2>{t("In Store")}</h2>
        <p style={{ margin: "8px 0" }}>
          <span>
            <CheckOutlinedIcon style={{ color: "#54BA71", marginRight: "5px" }} />
          </span>
          <span className="bold" style={{ marginRight: "10px" }}>
            {t("2 in stock")}
          </span>
          <span>71 Greentord Avenue Winnipeg MB</span>
        </p>
        <p style={{ margin: "8px 0" }}>
          <span>
            <CheckOutlinedIcon style={{ color: "#54BA71", marginRight: "5px" }} />
          </span>
          <span className="bold" style={{ marginRight: "10px" }}>
            {t("4 in stock")}
          </span>
          <span>4160 Mailing Street, Iqaluit NU</span>
        </p>
        <p className="see-more">{t("See More")}</p>
      </div>

      <div className="shadow-card">
        <h2>
          <span>
            <CheckOutlinedIcon style={{ color: "#54BA71", marginRight: "5px" }} />
          </span>
          {t("Online")}
        </h2>
        <FormControl component="fieldset">
          <RadioGroup defaultValue="store_pick" aria-label="online-radio" name="customized-radios">
            <FormControlLabel
              value="store_pick"
              control={<StyledRadio />}
              label={t("In Store Pick Up")}
            />
            <p style={{ paddingLeft: "15px" }}>
              {t("Buy online, and pick it up at 71 Greenford Avenue, Winnipeg")}
            </p>
            <FormControlLabel
              value="ship_home"
              control={<StyledRadio />}
              label={t("Ship to Home")}
            />
          </RadioGroup>
        </FormControl>
        <p className="see-more" style={{ marginTop: "15px" }}>
          {t("Estimate Shipping")}
        </p>
      </div>

      <div className="shadow-card">
        <div className="product-total-cost">
          <p className="bold">{product.name}</p>
          <p className="bold">$529.00</p>
        </div>
        <p>64GB | Red | Good Condition</p>
        <p>{t("Unlocked")}</p>
        <div className="product-total-cost">
          <p className="bold">{t("DeviceKit")}</p>
          <p className="bold">$1.99</p>
        </div>
        <div className="product-total-cost underlined">
          <p className="bold">{t("12 Month Warranty")}</p>
          <p className="bold">$0.00</p>
        </div>
        <div className="product-total-cost" style={{ paddingTop: "20px" }}>
          <p className="bold">{t("Subtotal")}</p>
          <p className="bold">$530.99</p>
        </div>
        <div className="product-total-cost blue-text">
          <p className="bold">{t("As Low as")}</p>
          <p className="bold">$21.99/month</p>
        </div>
        <div className="add-to-cart">
          <div style={{ marginRight: "10px" }}>
            <div
              onClick={() => {
                setAddCarts(Math.max(addCarts - 1, 0))
              }}
            >
              <RemoveIcon />
            </div>
            <p>{addCarts}</p>
            <div
              onClick={() => {
                setAddCarts(addCarts + 1)
              }}
            >
              <AddIcon />
            </div>
          </div>
          <button
            style={{
              opacity: addCarts === 0 ? 0.7 : "",
              cursor: addCarts === 0 ? "inherit" : "",
            }}
            disabled={addCarts === 0}
          >
            {t("Add to Cart")}
          </button>
        </div>
      </div>

      <div className="shadow-card certified-logo-container">
        <div className="certified-logo">
          <img src="/img/product/certified-logo.svg" alt="certified-logo" />
        </div>
      </div>
    </div>
  )
}

export default ProductTowardsCertified

function StyledRadio(props: RadioProps) {
  const classes = useStyles()

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  )
}

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow: "inset 0 0 0 1px #054DFA, inset 0 -1px 0 #054DFA",
    backgroundColor: "white",
    backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#054DFA !important",
    backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
})
