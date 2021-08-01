import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import BreadCrumbs from "../../components/bread-crumbs"
import ShopFilter from "./comp/shop-filter"
import { PRODUCTS } from "../../static/mock/shop"
import { ProductParam } from "../../models/shop-page-params"
import { formatWarranty } from "../../service/hepler"

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
            <p style={{ marginLeft: "auto" }}>{t("In-Stock Only")}</p>
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
