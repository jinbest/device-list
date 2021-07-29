import React from "react"
import { useTranslation } from "react-i18next"
import BreadCrumbs from "../../components/bread-crumbs"
import ShopFilter from "./comp/shop-filter"

const Shop = () => {
  const [t] = useTranslation()

  return (
    <div className="shop">
      <div className="container">
        <BreadCrumbs data={["Home", "Shop", "All Devices"]} />

        <div className="shop-contents">
          <ShopFilter />

          <div className="shop-data-viewer">
            <p style={{ marginLeft: "auto" }}>{t("In-Stock Only")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
