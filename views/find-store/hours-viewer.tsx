import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { getRegularHours, getConvertHourType } from "../../service/hepler"
import { DAYS_OF_THE_WEEK } from "../../const/_variables"
import { LocationParam } from "../../models/location-param"

type Props = {
  location: LocationParam
}

const HoursViewer = ({ location }: Props) => {
  const classes = useStyles()
  const [t] = useTranslation()

  return (
    <>
      <Typography className={classes.cardTitle}>{t("Store Hours")}</Typography>
      {location.hours.length ? (
        <>
          {getRegularHours(location.hours).map((it, index) => (
            <div key={index} className={classes.container}>
              <div className={classes.weekday}>
                <Typography className={classes.cardText}>
                  {t(DAYS_OF_THE_WEEK[it.day]).substring(0, 3)}:
                </Typography>
              </div>
              <div className={classes.time}>
                <Typography className={classes.cardText}>
                  {!it.open || !it.close
                    ? it.by_appointment_only
                      ? t("Call to book appointment")
                      : t("Closed")
                    : getConvertHourType(it.open, location.timezone, location.timezone) +
                      "-" +
                      getConvertHourType(it.close, location.timezone, location.timezone)}
                </Typography>
              </div>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default HoursViewer

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      width: "100%",
      marginBottom: "5px",
    },
    weekday: {
      width: "50px",
      margin: 0,
      padding: 0,
    },
    time: {
      width: "calc(100% - 50px)",
      margin: 0,
      padding: 0,
    },
    cardTitle: {
      fontSize: "18px",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      marginBottom: "10px",
      ["@media (max-width:1400px)"]: {
        fontSize: "15px",
      },
      ["@media (max-width:960px)"]: {
        fontSize: "18px",
      },
      ["@media (max-width:700px)"]: {
        fontSize: "15px",
        marginBottom: "5px",
      },
      ["@media (max-width:400px)"]: {
        fontSize: "14px",
      },
    },
    cardText: {
      fontSize: "15px",
      fontFamily: "Montserrat",
      marginBottom: "5px",
      color: "black",
      ["@media (max-width:1400px)"]: {
        fontSize: "13px",
      },
      ["@media (max-width:960px)"]: {
        fontSize: "15px",
      },
      ["@media (max-width:700px)"]: {
        fontSize: "13px",
        marginBottom: "3px",
      },
      ["@media (max-width:400px)"]: {
        fontSize: "12px",
        marginBottom: "2px",
      },
    },
  })
)
