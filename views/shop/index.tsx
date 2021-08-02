import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import BreadCrumbs from "../../components/bread-crumbs"
import ShopFilter from "./comp/shop-filter"
import { ProductParam } from "../../models/shop-page-params"
import { formatWarranty } from "../../service/hepler"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import CustomSelector from "../../components/custom-selector"
import { SelectorParam } from "../../models/custom-selector-param"
import { SORT_OPTIONS } from "../../static/mock/shop"
import dynamic from "next/dynamic"
import Close from "@material-ui/icons/Close"
import {
  DEVICE_CATEGORIES,
  ESTHETIC_CONDITIONS,
  BRANDS,
  PRODUCTS,
  DEVICE_STORAGES,
  DEVICE_COLORS,
  CARRIERS,
  SUPPLIERS,
  AVAILABILITIES,
} from "../../static/mock/shop"
import _ from "lodash"

const DynamicSwitch = dynamic(() => import("@material-ui/core/Switch"), { ssr: false })

const Shop = () => {
  const [t] = useTranslation()

  const [priceValue, setPriceValue] = useState<number[]>([50, 800])
  const [checkedCategories, setCheckedCategories] = useState<number[]>([] as number[])
  const [checkedEsthetics, setCheckedEsthetics] = useState<number[]>([] as number[])
  const [checkedBrands, setCheckedBrands] = useState<number[]>([] as number[])
  const [checkedProducts, setCheckedProducts] = useState<number[]>([] as number[])
  const [checkedStorages, setCheckedStorages] = useState<number[]>([] as number[])
  const [checkedColours, setCheckedColours] = useState<number[]>([] as number[])
  const [checkedCarriers, setCheckedCarriers] = useState<number[]>([] as number[])
  const [checkedVendors, setCheckedVendors] = useState<number[]>([] as number[])
  const [checkedAvailabilities, setCheckedAvailabilities] = useState<number[]>([] as number[])

  const [switchChecked, setSwitchChecked] = useState(false)
  const [sortBy, setSortBy] = useState<SelectorParam>({} as SelectorParam)

  return (
    <div className="shop">
      <div className="container">
        <BreadCrumbs data={["Home", "Shop", "All Devices"]} />

        <div className="shop-contents">
          <ShopFilter
            priceValue={priceValue}
            setPriceValue={setPriceValue}
            checkedCategories={checkedCategories}
            setCheckedCategories={setCheckedCategories}
            checkedEsthetics={checkedEsthetics}
            setCheckedEsthetics={setCheckedEsthetics}
            checkedBrands={checkedBrands}
            setCheckedBrands={setCheckedBrands}
            checkedProducts={checkedProducts}
            setCheckedProducts={setCheckedProducts}
            checkedStorages={checkedStorages}
            setCheckedStorages={setCheckedStorages}
            checkedColours={checkedColours}
            setCheckedColours={setCheckedColours}
            checkedCarriers={checkedCarriers}
            setCheckedCarriers={setCheckedCarriers}
            checkedVendors={checkedVendors}
            setCheckedVendors={setCheckedVendors}
            checkedAvailabilities={checkedAvailabilities}
            setCheckedAvailabilities={setCheckedAvailabilities}
          />

          <div className="shop-data-viewer">
            <div className="flex justify-between">
              <div className="shop-filtered-tip">
                {checkedCategories.map((it: number) => {
                  return (
                    <div key={it}>
                      <Close
                        onClick={() => {
                          const itIndex = checkedCategories.indexOf(it)
                          if (itIndex > -1) {
                            checkedCategories.splice(itIndex, 1)
                            setCheckedCategories([...checkedCategories])
                          }
                        }}
                      />
                      <p>{_.find(DEVICE_CATEGORIES, { id: it })?.name}</p>
                    </div>
                  )
                })}
                {checkedEsthetics.map((it: number) => {
                  return (
                    <div key={it}>
                      <Close
                        onClick={() => {
                          const itIndex = checkedEsthetics.indexOf(it)
                          if (itIndex > -1) {
                            checkedEsthetics.splice(itIndex, 1)
                            setCheckedEsthetics([...checkedEsthetics])
                          }
                        }}
                      />
                      <p>{_.find(ESTHETIC_CONDITIONS, { id: it })?.label}</p>
                    </div>
                  )
                })}
                {checkedBrands.map((it: number) => {
                  return (
                    <div key={it}>
                      <Close
                        onClick={() => {
                          const itIndex = checkedBrands.indexOf(it)
                          if (itIndex > -1) {
                            checkedBrands.splice(itIndex, 1)
                            setCheckedBrands([...checkedBrands])
                          }
                        }}
                      />
                      <p>{_.find(BRANDS, { id: it })?.name}</p>
                    </div>
                  )
                })}
                {checkedProducts.map((it: number) => {
                  return (
                    <div key={it}>
                      <Close
                        onClick={() => {
                          const itIndex = checkedProducts.indexOf(it)
                          if (itIndex > -1) {
                            checkedProducts.splice(itIndex, 1)
                            setCheckedProducts([...checkedProducts])
                          }
                        }}
                      />
                      <p>{_.find(PRODUCTS, { id: it })?.name}</p>
                    </div>
                  )
                })}
                {checkedStorages.map((it: number) => {
                  return (
                    <div key={it}>
                      <Close
                        onClick={() => {
                          const itIndex = checkedStorages.indexOf(it)
                          if (itIndex > -1) {
                            checkedStorages.splice(itIndex, 1)
                            setCheckedStorages([...checkedStorages])
                          }
                        }}
                      />
                      <p>{_.find(DEVICE_STORAGES, { id: it })?.label}</p>
                    </div>
                  )
                })}
                {checkedColours.map((it: number) => {
                  return (
                    <div key={it}>
                      <Close
                        onClick={() => {
                          const itIndex = checkedColours.indexOf(it)
                          if (itIndex > -1) {
                            checkedColours.splice(itIndex, 1)
                            setCheckedColours([...checkedColours])
                          }
                        }}
                      />
                      <p>{_.find(DEVICE_COLORS, { id: it })?.label}</p>
                    </div>
                  )
                })}
                {checkedCarriers.map((it: number) => {
                  return (
                    <div key={it}>
                      <Close
                        onClick={() => {
                          const itIndex = checkedCarriers.indexOf(it)
                          if (itIndex > -1) {
                            checkedCarriers.splice(itIndex, 1)
                            setCheckedCarriers([...checkedCarriers])
                          }
                        }}
                      />
                      <p>{_.find(CARRIERS, { id: it })?.label}</p>
                    </div>
                  )
                })}
                {checkedVendors.map((it: number) => {
                  return (
                    <div key={it}>
                      <Close
                        onClick={() => {
                          const itIndex = checkedVendors.indexOf(it)
                          if (itIndex > -1) {
                            checkedVendors.splice(itIndex, 1)
                            setCheckedVendors([...checkedVendors])
                          }
                        }}
                      />
                      <p>{_.find(SUPPLIERS, { id: it })?.name}</p>
                    </div>
                  )
                })}
                {checkedAvailabilities.map((it: number) => {
                  return (
                    <div key={it}>
                      <Close
                        onClick={() => {
                          const itIndex = checkedAvailabilities.indexOf(it)
                          if (itIndex > -1) {
                            checkedAvailabilities.splice(itIndex, 1)
                            setCheckedAvailabilities([...checkedAvailabilities])
                          }
                        }}
                      />
                      <p>{_.find(AVAILABILITIES, { id: it })?.label}</p>
                    </div>
                  )
                })}
              </div>
              <div className="flex align-center">
                <FormControlLabel
                  value="start"
                  style={{ minWidth: "155px" }}
                  control={
                    <DynamicSwitch
                      color="primary"
                      className="shop-switch"
                      checked={switchChecked}
                      onChange={() => {
                        setSwitchChecked(!switchChecked)
                      }}
                    />
                  }
                  label={t("In-stock Only")}
                  labelPlacement="start"
                />
                <div className="sort-by-selector">
                  <CustomSelector
                    title="Sort By"
                    options={SORT_OPTIONS}
                    selected={sortBy}
                    setSelected={setSortBy}
                  />
                </div>
              </div>
            </div>
            <div className="shop-product-container">
              {PRODUCTS.map((item: ProductParam, index: number) => {
                return (
                  <div key={index}>
                    <img src={item.img_src} alt={item.name} />
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <p className="shop-cost">{`$${item.cost}`}</p>
                      <p className="as-low-as">{`${t("As low as")} ${item.short_description}`}</p>
                      <p className="shop-warranty">{`${t("Warranty")}: ${formatWarranty(
                        item.included_warranty_duration_month,
                        "MONTH"
                      )}`}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
