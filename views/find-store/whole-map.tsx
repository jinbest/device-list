import React, { useEffect, useState } from "react"
import { createStyles, makeStyles } from "@material-ui/core"
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import { Map } from "leaflet"
import LocationsAccordion from "./location-accordion"
import { getAddress } from "../../service/hepler"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { locationsData } from "../../static/mock/mock-data"
import _ from "lodash"
import { LocationParam } from "../../models/location-param"
import { useTranslation } from "react-i18next"
import DownArrow from "../../components/svg/down-arrow"
import UpArrow from "../../components/svg/up-arrow"
import SearchIcon from "../../components/svg/search-icon"
import { Checkbox, FormControlLabel, FormGroup, FormControl } from "@material-ui/core"

const icon = L.icon({ iconUrl: "/img/icons/marker.png" })

type Props = {
  selectedLocation: LocationParam
  handleLocationID: (id: number) => void
  location_id: number
}

const WholeMap = ({ selectedLocation, handleLocationID, location_id }: Props) => {
  const locations = _.cloneDeep(locationsData)
  const [t] = useTranslation()

  const classes = useStyles()
  let centerX = 49.865759
  let centerY = -97.211811
  let zoom = 6
  const [map, setMap] = useState<null | Map>(null)
  const [postCode, setPostCode] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)
  const [filterValues, setFilterValues] = useState({
    appointment: false,
    booking: false,
    financing: false,
    curbside: false,
    authorized: false,
  })
  // const [isFinding, setIsFinding] = useState(false)

  useEffect(() => {
    if (selectedLocation) {
      centerX = selectedLocation.latitude
      centerY = selectedLocation.longitude
      zoom = 14
    } else if (locations && locations.length > 0) {
      const longitudes = locations.map((v) => v.longitude)
      const latitudes = locations.map((v) => v.latitude)
      const pCenterX = latitudes.reduce((a, b) => a + b, 0) / 5
      const pCenterY = longitudes.reduce((a, b) => a + b, 0) / 5
      const maxRadiusX = Math.max(...latitudes.map((v) => v - centerX))
      const maxRadiusY = Math.max(...longitudes.map((v) => v - centerY))
      const pZoom = 17 / (Math.max(maxRadiusX, maxRadiusY) / 5 + 3)
      centerX = pCenterX
      centerY = pCenterY
      zoom = pZoom
    } else {
      centerX = 49.865759
      centerY = -97.211811
      zoom = 6
    }
    if (map) {
      map.setView([centerX, centerY], zoom)
    }
  }, [selectedLocation, map])

  const openPopup = (marker: any) => {
    if (marker && typeof window !== "undefined") {
      window.setTimeout(() => {
        marker.openPopup()
      }, 1000)
    }
  }

  const handleClickSearchButton = (e: any) => {
    e.preventDefault()
    if (!postCode) return
    findLocation()
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress, false)
    return () => {
      document.removeEventListener("keydown", onKeyPress, false)
    }
  }, [postCode, filterValues])

  const onKeyPress = (event: any) => {
    if (event.key === "Enter" && postCode) {
      findLocation()
    }
  }

  const findLocation = () => {
    console.log("postCode", postCode, filterValues)
    setPostCode("")
    setFilterValues({
      appointment: false,
      booking: false,
      financing: false,
      curbside: false,
      authorized: false,
    })
    setFilterOpen(false)
  }

  return (
    <div>
      <div className={classes.map}>
        <div className={classes.mobileSearchContainer}>
          <input
            value={postCode}
            onChange={(e) => {
              setPostCode(e.target.value)
            }}
            placeholder={t("Enter your address, city and province, or postal code")}
            className="find-store-custom-input"
          />
          <button className="find-store-button" onClick={handleClickSearchButton}>
            <span className="button-text">{t("Find stores")}</span>
            <span className="button-icon">
              <SearchIcon color="white" />
            </span>
          </button>
        </div>

        <MapContainer
          center={[centerX, centerY]}
          zoom={zoom}
          scrollWheelZoom={false}
          whenCreated={setMap}
          className={classes.mapContainer}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {[selectedLocation].length &&
            [selectedLocation].map((element, index) => {
              return (
                <Marker
                  position={[element.latitude, element.longitude]}
                  key={index}
                  ref={openPopup}
                  icon={icon}
                >
                  <Popup>
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
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h2 className={classes.popupWrapper}>{getAddress(element)}</h2>
                    </a>
                  </Popup>
                </Marker>
              )
            })}
        </MapContainer>
      </div>

      <div className={classes.customContainer}>
        <div className={classes.searchContainer}>
          <input
            value={postCode}
            onChange={(e) => {
              setPostCode(e.target.value)
            }}
            placeholder={t("Enter your address, city and province, or postal code")}
            className="find-store-custom-input"
          />
          <div>
            <div className={classes.filterComponent}>
              <p
                onClick={() => {
                  setFilterOpen(!filterOpen)
                }}
              >
                {t("Filter By")}
                <span>
                  {filterOpen ? <UpArrow color="#B5B5B5" /> : <DownArrow color="#B5B5B5" />}
                </span>
              </p>
              {filterOpen && (
                <div className="find-store-filter-component">
                  <FormControl component="fieldset">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={filterValues.appointment || false}
                            onChange={(e) => {
                              filterValues.appointment = e.target.checked
                              setFilterValues({ ...filterValues })
                            }}
                            name="appointment"
                            color="primary"
                          />
                        }
                        label={t("In-store appointments")}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={filterValues.booking || false}
                            onChange={(e) => {
                              filterValues.booking = e.target.checked
                              setFilterValues({ ...filterValues })
                            }}
                            name="booking"
                            color="primary"
                          />
                        }
                        label={t("Online Booking")}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={filterValues.financing || false}
                            onChange={(e) => {
                              filterValues.financing = e.target.checked
                              setFilterValues({ ...filterValues })
                            }}
                            name="financing"
                            color="primary"
                          />
                        }
                        label={t("Financing Available")}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={filterValues.curbside}
                            onChange={(e) => {
                              filterValues.curbside = e.target.checked
                              setFilterValues({ ...filterValues })
                            }}
                            name="curbside"
                            color="primary"
                          />
                        }
                        label={t("Curbside pick-up")}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={filterValues.authorized}
                            onChange={(e) => {
                              filterValues.authorized = e.target.checked
                              setFilterValues({ ...filterValues })
                            }}
                            name="authorized"
                            color="primary"
                          />
                        }
                        label={t("Apple authorized")}
                      />
                    </FormGroup>
                  </FormControl>
                </div>
              )}
            </div>
            <button className="find-store-button" onClick={handleClickSearchButton}>
              <span className="button-text">{t("Find stores")}</span>
            </button>
          </div>
        </div>
        <LocationsAccordion handleLocationID={handleLocationID} location_id={location_id} />
      </div>
    </div>
  )
}

export default WholeMap

const useStyles = makeStyles(() =>
  createStyles({
    map: {
      height: "100vh",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      overflow: "hidden !important",
      ["@media (max-width:960px)"]: {
        height: "600px",
        position: "relative",
      },
      ["@media (max-width:360px)"]: {
        height: "500px",
      },
    },
    mapContainer: {
      height: "100vh",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1,
      ["@media (max-width:960px)"]: {
        height: "600px",
      },
    },
    customContainer: {
      position: "relative",
      maxWidth: "1440px",
      margin: "0 auto",
      paddingTop: "35px",
      zIndex: 2,
      width: "calc(100% - 40px)",
      height: 0,
      ["@media (max-width:960px)"]: {
        height: "fit-content",
        padding: "35px 0",
      },
    },
    searchContainer: {
      width: "100%",
      height: "50px",
      marginBottom: "20px",
      background: "white",
      boxShadow: "0px 5px 8px 3px rgb(0 0 0 / 20%)",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& input": {
        ["@media (max-width:960px)"]: {
          display: "none",
        },
      },
      "& > div": {
        height: "100%",
        display: "flex",
        "& .find-store-button": {
          ["@media (max-width:960px)"]: {
            display: "none",
          },
        },
      },
      ["@media (max-width:960px)"]: {
        background: "transparent",
        boxShadow: "none",
        maxWidth: "768px",
        margin: "0 auto 10px",
        height: "40px",
      },
    },
    filterComponent: {
      width: "180px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      "& > p": {
        color: "#B5B5B5",
        fontSize: "16px",
        cursor: "pointer",
        "& span": {
          marginLeft: "10px",
        },
      },
      ["@media (max-width:960px)"]: {
        border: "1px solid #B5B5B5",
        borderRadius: "5px",
        "& > p": {
          fontSize: "14px",
          "& span": {
            marginLeft: "75px !important",
          },
        },
      },
    },
    mobileSearchContainer: {
      display: "none",
      width: "calc(100% - 40px)",
      left: "20px",
      height: "50px",
      background: "white",
      boxShadow: "0px 5px 8px 3px rgb(0 0 0 / 20%)",
      borderRadius: "5px",
      position: "absolute",
      zIndex: 2,
      top: "35px",
      ["@media (max-width:960px)"]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      ["@media (max-width:600px)"]: {
        height: "40px",
        "& input": {
          fontSize: "10px",
        },
      },
    },
    popupWrapper: {
      fontSize: "12px !important",
    },
    item1: {
      maxWidth: "500px",
      margin: "auto",
      order: 1,
      ["@media (max-width:960px)"]: {
        order: 2,
      },
    },
    item2: {
      height: "fit-content",
      order: 2,
      ["@media (max-width:960px)"]: {
        order: 1,
      },
    },
  })
)
