import React, { useState, useEffect } from "react"
import { createStyles, makeStyles } from "@material-ui/core"
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined"
import CallSplitIcon from "@material-ui/icons/CallSplit"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import BlockIcon from "@material-ui/icons/Block"
import {
  getAddress,
  phoneFormatString,
  getHourType,
  isPassedTime,
  getCloseTime,
} from "../../service/hepler"
import { locationsData } from "../../static/mock-data"
import _ from "lodash"
import LeftArrow from "../../components/svg/LeftArrow"
import RightArrow from "../../components/svg/RightArrow"
import { LocationParam } from "../../models/location-param"
import HoursViewer from "./HoursViewer"

type Props = {
  location_id: number
  handleLocationID: (id: number) => void
}

const LocationsAccordion = ({ handleLocationID, location_id }: Props) => {
  const locations = _.cloneDeep(locationsData)
  const [t] = useTranslation()

  const classes = useStyles()
  const [expanded, setExpanded] = useState<number | false>(0)

  useEffect(() => {
    const locIndex = _.findIndex(locations, { id: location_id })
    if (locIndex > -1) {
      setExpanded(locIndex)
    }
  }, [locations, location_id])

  const handleChange = (panel: number) => (_: React.ChangeEvent<any>, isExpanded: boolean) => {
    if (isExpanded) {
      handleLocationID(locations[panel].id)
      setExpanded(panel)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <LeftArrow color="white" />
        <p>{`${locations.length} ${t("Stores near you")}`}</p>
      </div>
      <div
        className="flex align-center"
        style={{ padding: "0 20px", height: "45px", background: "#EFEFEF", fontSize: "14px" }}
      >
        <img
          src="/img/icons/marker.png"
          style={{ width: "27px", height: "35px", margin: "5px 15px 0 0" }}
        />
        <p>{t("DeviceList Authorized Dealer")}</p>
      </div>
      <div className="accordion-container">
        {locations.map((element: LocationParam, index: number) => {
          const closeTime = getCloseTime(element.hours, "REGULAR")
          return (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              className={classes.accordion}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.accordionSummary}
              >
                <div className="flex justify-between align-center">
                  <div className="flex align-center">
                    <img
                      src="/img/icons/marker.png"
                      style={{ width: "27px", height: "35px", margin: "5px 5px 0 0" }}
                    />
                    <h2 className={classes.summaryTitle}>{element.location_name}</h2>
                  </div>
                  <RightArrow color="#4360FA" />
                </div>
                <h2 className={classes.summaryContent}>{getAddress(element)}</h2>
                <div className={classes.directions}>
                  <a
                    href={`${
                      element.business_page_link != null
                        ? element.business_page_link
                        : `https://www.google.com/maps/search/?api=1&query=${getAddress(element)
                            .split(" ")
                            .join("+")}`
                    }`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <CallSplitIcon style={{ color: "#CBBBFA" }} />
                    <span>{t("Directions")}</span>
                  </a>
                  <a
                    href={element.phone ? `tel:${element.phone}` : ""}
                    className={classes.phoneText}
                  >
                    <PhoneEnabledOutlinedIcon style={{ color: "#CBBBFA" }} />
                    <span
                      style={{
                        color: "blue",
                      }}
                    >
                      {element.phone && phoneFormatString(element.phone)}
                    </span>
                  </a>
                </div>
                <div className={classes.locationHour}>
                  {isPassedTime(closeTime) ? (
                    <p>
                      <span>
                        <BlockIcon style={{ color: "#FC6530" }} />
                      </span>
                      <span>{t("Closed")}</span> {`${t("opens at")} ${getHourType(closeTime)}`}
                    </p>
                  ) : (
                    <p>
                      <span>
                        <CheckCircleIcon style={{ color: "#A0E744" }} />
                      </span>
                      <span>{t("Open")}</span> {`${t("until")} ${getHourType(closeTime)}`}
                    </p>
                  )}
                </div>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <div className={classes.locationAvailability}>
                  {element.locAvailability?.map((item: string, index: number) => {
                    return <p key={index}>{t(item)}</p>
                  })}
                </div>
                <div className={classes.detailsButton}>
                  <button>{t("Book Appointment")}</button>
                  <button>{t("Make my store")}</button>
                </div>
                <HoursViewer location={element} />
              </AccordionDetails>
            </Accordion>
          )
        })}
      </div>
    </div>
  )
}

export default LocationsAccordion

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      borderRadius: "5px",
      background: "white",
      maxWidth: "450px",
      boxShadow: "0px 5px 8px 3px rgb(0 0 0 / 20%)",
      ["@media (max-width:960px)"]: {
        margin: "auto",
        maxWidth: "768px",
      },
    },
    banner: {
      height: "45px",
      borderRadius: "5px 5px 0 0",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      background: "#4360FA",
      "& > p": {
        color: "white",
        fontSize: "16px",
        marginLeft: "25px",
      },
    },
    accordion: {
      margin: "0 !important",
      "& .MuiAccordionSummary-content": {
        margin: "0 !important",
        display: "block !important",
        padding: "5px 0",
      },
    },
    accordionSummary: {
      borderTop: "1px solid rgba(0,0,0,0.1)",
      padding: "0 20px 0px",
      ["@media (max-width:1200px)"]: {
        padding: "0 15px 0px",
        "& .MuiButtonBase-root": {
          padding: "5px",
        },
      },
    },
    accordionDetails: {
      display: "block",
      padding: "5px 30px",
    },
    locationAvailability: {
      display: "flex",
      flexWrap: "wrap",
      "& p": {
        padding: "0 15px",
        height: "25px",
        background: "#D4DFFC",
        width: "fit-content",
        margin: "0 5px 5px 0",
        display: "flex",
        alignItems: "center",
        fontSize: "12px",
      },
    },
    detailsButton: {
      display: "flex",
      flexWrap: "wrap",
      margin: "10px 0 5px",
      "& button": {
        background: "transparent",
        outline: "none",
        border: "1px solid #4360FA",
        borderRadius: "5px",
        height: "27px",
        padding: "0 15px",
        color: "#4360FA",
        fontSize: "12px",
        margin: "0 5px 5px 0",
        cursor: "pointer",
        "&:hover": {
          opacity: 0.7,
        },
      },
    },
    summaryTitle: {
      fontSize: "16px",
      margin: 0,
      padding: "10px 0",
      fontFamily: "Montserrat",
      fontWeight: 600,
      color: "#4360FA",
    },
    summaryContent: {
      fontSize: "14px",
      margin: 0,
      padding: "0 0 5px",
      fontWeight: "normal",
    },
    directions: {
      display: "flex",
      paddingBottom: "5px",
      "& a": {
        display: "flex",
        alignItems: "center",
        marginRight: "15px",
        "& svg": {
          marginRight: "0px",
          width: "18px",
        },
      },
      "& span": {
        color: "black !important",
        marginLeft: "10px",
        fontSize: "14px",
        "&:hover": {
          opacity: 0.6,
        },
      },
      ["@media (max-width:1200px)"]: {
        "& svg": {
          fontSize: "1rem",
        },
        "& a": {
          marginRight: "10px",
        },
      },
    },
    phoneText: {
      marginLeft: "10px",
      textDecoration: "none",
      "&:hover": {
        opacity: 0.6,
      },
      ["@media (max-width:1200px)"]: {
        marginLeft: "0px",
      },
    },
    getAppoint: {
      width: "fit-content",
      fontSize: "13px !important",
      lineHeight: "15px",
      color: "white",
      borderRadius: "20px",
      height: "25px",
      outline: "none",
      cursor: "pointer",
      margin: "5px 3px",
      border: "none",
      padding: "0 10px",
      "&:hover": {
        opacity: 0.8,
      },
      ["@media (max-width:1200px)"]: {
        fontSize: "11px !important",
        whiteSpace: "nowrap",
      },
    },
    locationHour: {
      "& p": {
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        "& span": {
          fontWeight: "bold",
          fontFamily: "Montserrat Bold",
          marginRight: "5px",
          "& svg": {
            width: "20px",
          },
        },
      },
    },
  })
)
