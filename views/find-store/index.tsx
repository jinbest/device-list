import React, { useState } from "react"
import { locationsData } from "../../static/mock/mock-data"
import { LocationParam } from "../../models/location-param"
import { findIndex, isEmpty } from "lodash"
import dynamic from "next/dynamic"

const DynamicWholeMap = dynamic(() => import("./whole-map"), { ssr: false })

const FindStore = () => {
  const [selectLocation, setSelectLocation] = useState<LocationParam>(locationsData[0])
  const [locationID, setLocationID] = useState(0)

  const handleLocationID = (id: number) => {
    setLocationID(id)
    const locIndex = findIndex(locationsData, { id: id })
    if (locIndex > -1) {
      setSelectLocation(locationsData[locIndex])
    }
  }

  return (
    <div>
      {!isEmpty(selectLocation) && (
        <DynamicWholeMap
          selectedLocation={selectLocation}
          handleLocationID={handleLocationID}
          location_id={locationID}
        />
      )}
    </div>
  )
}

export default FindStore
