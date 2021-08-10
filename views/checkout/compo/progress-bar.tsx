import React from "react"
import LinearProgress from "@material-ui/core/LinearProgress"
import { Theme, makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"

type StyleParam = {
  color: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: (props: StyleParam) => props.color ?? "#F36B26",
  },
}))

type Props = {
  value: number
}

const ProgressBar = ({ value }: Props) => {
  const [t] = useTranslation()

  const param = {
    color: value === 100 ? "#4360FA" : "#F36B26",
  }
  const classes = useStyles(param)

  return (
    <div className="checkout-progress-bar">
      <div className="progress-label">
        <p>{t("Cart")}</p>
        <p>{t("Account")}</p>
        <p>{t("Shipping")}</p>
        <p>{t("Payment")}</p>
        <p>{t("Confirmation")}</p>
      </div>
      <LinearProgress
        variant="determinate"
        value={value}
        classes={{
          root: classes.root,
          colorPrimary: classes.colorPrimary,
          bar: classes.bar,
        }}
      />
    </div>
  )
}

export default ProgressBar
