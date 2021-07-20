import React, { useEffect, useState } from "react"
import { createStyles, makeStyles } from "@material-ui/core"
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import { Map } from "leaflet"
import LocationsAccordion from "./LocationAccordion"
import { getAddress } from "../../service/hepler"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { locationsData } from "../../static/mock-data"
import _ from "lodash"
import { LocationParam } from "../../models/location-param"

const icon = L.icon({ iconUrl: "/img/icons/marker.png" })

type Props = {
  selectedLocation: LocationParam
  handleLocationID: (id: number) => void
  location_id: number
}

const WholeMap = ({ selectedLocation, handleLocationID, location_id }: Props) => {
  const locations = _.cloneDeep(locationsData)

  const classes = useStyles()
  let centerX = 49.865759
  let centerY = -97.211811
  let zoom = 6
  const [map, setMap] = useState<null | Map>(null)
  // const [postCode, setPostCode] = useState("")
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

  // const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   setPostCode(e.target.value)
  // }

  // const handleClickSearchButton = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   e.preventDefault()
  //   if (!postCode) return
  //   findLocation()
  // }

  // useEffect(() => {
  //   document.addEventListener("keydown", onKeyPress, false)
  //   return () => {
  //     document.removeEventListener("keydown", onKeyPress, false)
  //   }
  // }, [postCode])

  // const onKeyPress = async (event: any) => {
  //   if (event.key === "Enter" && postCode) {
  //     findLocation()
  //   }
  // }

  // const findLocation = () => {
  //   console.log("postCode", postCode)
  // }

  return (
    <div>
      <div className={classes.customContainer}>
        <div className={classes.customComponent}>
          {/* <FindStoreSearch
              placeholder={t("Enter your postal code")}
              color="rgba(0,0,0,0.8)"
              bgcolor="white"
              border="rgba(0,0,0,0.2)"
              buttonCol={"black"}
              value={postCode}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChangeSearch(e)
              }}
              handleButtonClick={async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                await handleClickSearchButton(e)
              }}
              isSubmit={isFinding}
            /> */}
          <LocationsAccordion handleLocationID={handleLocationID} location_id={location_id} />
        </div>
      </div>

      <div className={classes.map}>
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
        top: "170px",
        height: "600px",
      },
      ["@media (max-width:360px)"]: {
        top: "100px",
        height: "500px",
      },
    },
    mapContainer: {
      height: "100vh",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      ["@media (max-width:960px)"]: {
        height: "600px",
      },
    },
    customContainer: {
      position: "absolute",
      zIndex: 2,
      width: "100%",
      height: 0,
      ["@media (max-width:960px)"]: {
        paddingTop: "50px",
      },
    },
    popupWrapper: {
      fontSize: "12px !important",
    },
    customComponent: {
      maxWidth: "1440px",
      width: "95%",
      padding: "100px 0 50px",
      margin: "0 0 0 100px",
      height: 0,
      ["@media (max-width:1600px)"]: {
        margin: "auto !important",
      },
      ["@media (max-width:960px)"]: {
        padding: "0 0 50px",
      },
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
