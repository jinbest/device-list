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
import { PRODUCTS } from "../../static/mock/shop"
import ShopFilterTip from "./comp/shop-filter-tip"
import Setting from "../../components/svg/setting"
import FilterDrawer from "./comp/filter-drawer"

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
  const [filterDrawerView, setFilterDrawerView] = useState(false)

  return (
    <div className="shop">
      <div className="container">
        <BreadCrumbs data={["Home", "Shop", "All Devices"]} />

        <div className="shop-contents">
          <div className="shop-filter-desktop">
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
          </div>

          <div className="shop-data-viewer">
            <div className="shop-tip-switch-sortby">
              <div className="shop-filter-tip-container">
                <ShopFilterTip
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
              </div>
              <div className="switch-and-sortby">
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
                  <div
                    className="shop-mobile-filter-switcher"
                    onClick={() => {
                      setFilterDrawerView(true)
                    }}
                  >
                    <Setting />
                    <p>{t("Filter")}</p>
                  </div>
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
                      <button>{t("Add to favourites")}</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <FilterDrawer open={filterDrawerView} setOpen={setFilterDrawerView}>
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
      </FilterDrawer>
    </div>
  )
}

export default Shop
