import React, { useState, useEffect } from "react"
import { ProductParam } from "../../models/shop-page-params"
import BreadCrumbs from "../../components/bread-crumbs"
import _, { isEmpty } from "lodash"
import { useTranslation } from "react-i18next"
import {
  WorkWithParam,
  ProductColorParam,
  ProductStorageParam,
  ProductConditionParam,
} from "../../models/product-details-param"
import {
  WORKS_WITH,
  PRODUCT_COLORS,
  PRODUCT_STORAGES,
  PRODUCT_CONDITIONS,
} from "../../static/mock/product"
import { Checkbox, FormControlLabel, FormGroup, FormControl } from "@material-ui/core"

type Props = {
  product: ProductParam
}

const Section1 = ({ product }: Props) => {
  const [t] = useTranslation()

  const [work, setWork] = useState<WorkWithParam>(WORKS_WITH[0])
  const [selectedColor, setSelectedColor] = useState<ProductColorParam>(PRODUCT_COLORS[0])
  const [selectedStorage, setSelectedStorage] = useState<ProductStorageParam>(PRODUCT_STORAGES[0])
  const [selectedCondition, setSelectedCondition] = useState<ProductConditionParam>(
    {} as ProductConditionParam
  )
  const [deviceKit, setDeviceKit] = useState(false)
  const [screenProtector, setScreenProtector] = useState(false)

  useEffect(() => {
    const filtered = _.filter(PRODUCT_CONDITIONS, (o) => o.availability)
    if (filtered && filtered.length) {
      setSelectedCondition(filtered[0])
    }
  }, [PRODUCT_CONDITIONS])

  const _getWorkTheme_ = (item: WorkWithParam) => {
    if (work.id !== item.id) {
      return {}
    } else {
      return {
        background: "#28BC83",
        color: "white",
        border: "none",
      }
    }
  }

  return (
    <div className="product-section1">
      <div className="container">
        {product.brand && !isEmpty(product.brand) && (
          <BreadCrumbs data={["Buy", product.brand.name, product.name]} color="black" />
        )}

        <div className="product-contents">
          <div className="product-explanation">
            <div className="product-screens">
              <div className="main-screens">
                <div className="product-front-screen">
                  <img src={product.img_src} alt={product.name} />
                </div>
              </div>

              <div className="product-abstract">
                <h1>{product.name}</h1>

                <h2>{t("Works with")}</h2>
                <div className="works-with">
                  {WORKS_WITH.map((item: WorkWithParam, index: number) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setWork(item)
                        }}
                        style={_getWorkTheme_(item)}
                      >
                        {item.img_src ? (
                          <img src={item.img_src} alt={item.name} />
                        ) : (
                          <p>{t(item.name)}</p>
                        )}
                      </div>
                    )
                  })}
                </div>

                <h2>{`${t("Starting From")} $435.00 - $820.00`}</h2>

                <h2>{t("Colour")}</h2>
                <div className="product-colors">
                  {PRODUCT_COLORS.map((item: ProductColorParam, index: number) => {
                    return (
                      <div
                        key={index}
                        style={{
                          background: item.color,
                          border: selectedColor.id === item.id ? "5px solid #BDBFC3" : "",
                          opacity: selectedColor.id === item.id ? 1 : "",
                        }}
                        onClick={() => {
                          setSelectedColor(item)
                        }}
                      />
                    )
                  })}
                </div>

                <h2>{t("Storage")}</h2>
                <div className="product-storages">
                  {PRODUCT_STORAGES.map((item: ProductStorageParam, index: number) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedStorage(item)
                        }}
                        style={{
                          background: selectedStorage.id === item.id ? "#28BC83" : "",
                          border: selectedStorage.id === item.id ? "#28BC83" : "",
                        }}
                      >
                        <p
                          style={{
                            color: selectedStorage.id === item.id ? "white" : "",
                          }}
                        >{`${item.value} GB`}</p>
                      </div>
                    )
                  })}
                </div>

                <h2>{t("Product Condition")}</h2>
                <div className="product-conditions">
                  {PRODUCT_CONDITIONS.map((item: ProductConditionParam, index: number) => {
                    return (
                      <div
                        key={index}
                        style={{
                          opacity: item.availability ? 1 : 0.3,
                          cursor: item.availability ? "pointer" : "",
                        }}
                        onClick={() => {
                          if (item.availability) setSelectedCondition(item)
                        }}
                      >
                        <div
                          className="condition-header"
                          style={{ background: selectedCondition.id === item.id ? "#28bc83" : "" }}
                        >
                          <p style={{ color: selectedCondition.id === item.id ? "white" : "" }}>
                            {t(item.name.toUpperCase())}
                          </p>
                        </div>
                        <div className="condition-body">
                          <p
                            style={{ color: selectedCondition.id === item.id ? "#28bc83" : "" }}
                          >{`$${item.cost}`}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="product-description">
                  <p>
                    {t(
                      "Very minor scratches on the body. For smartphones and tablets: the screen is completely intact and without scratches."
                    )}
                  </p>
                </div>

                <h2>{t("Add Ons")}</h2>
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={deviceKit}
                          onChange={(e) => {
                            setDeviceKit(e.target.checked)
                          }}
                          name="deviceKit"
                          color="primary"
                        />
                      }
                      label={t("DeviceKit")}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={screenProtector}
                          onChange={(e) => {
                            setScreenProtector(e.target.checked)
                          }}
                          name="screenProtector"
                          color="primary"
                        />
                      }
                      label={t("Screen Protector")}
                    />
                  </FormGroup>
                </FormControl>
              </div>
            </div>

            <div className="similar-products">SIMILAR PRODUCTS</div>

            <div className="quality-grading">QUALITY GRADING</div>
          </div>

          <div className="product-towards-certified">product-towards-certified</div>
        </div>
      </div>
    </div>
  )
}

export default Section1
