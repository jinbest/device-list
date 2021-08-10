import React, { useState, useEffect } from "react"
import { shopStore, authStore } from "../store"
import { observer } from "mobx-react"
import { withStyles } from "@material-ui/core/styles"
import Menu, { MenuProps } from "@material-ui/core/Menu"
import { useTranslation } from "react-i18next"
import router from "next/router"
import { ShopCartParam } from "../models/shop-cart"
import { formatAsMoney } from "../service/hepler"
import CalculatorButton from "./calculator-button"
import _ from "lodash"
import SignModal from "./sign-modal/sign-modal"
import { ToastMsgParams } from "./toast/toast-msg-params"
import Toast from "./toast/toast"

const StyledMenu = withStyles({
  paper: {
    boxShadow: "0 8px 15px 5px rgba(0,0,0,0.25)",
    overflow: "inherit !important",
    background: "white",
    height: 816,
    width: 500,
    maxHeight: "calc(100vh - 200px)",
    maxWidth: "calc(100vw - 25px)",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))

const ShopCart = () => {
  const [t] = useTranslation()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [shopCarts, setShopCarts] = useState<ShopCartParam[]>(_.cloneDeep(shopStore.shopCarts))
  const [addCarts, setAddCarts] = useState(_.cloneDeep(shopCarts.map((v) => v.total)))
  const [totalCost, setTotalCost] = useState(0)
  const [openSignModal, setOpenSignModal] = useState(false)
  const [toastParams, setToastParams] = useState<ToastMsgParams>({} as ToastMsgParams)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setShopCarts(_.cloneDeep(shopStore.shopCarts))
  }

  useEffect(() => {
    setShopCarts(_.cloneDeep(shopStore.shopCarts))
    setAddCarts(_.cloneDeep(shopStore.shopCarts.map((v) => v.total)))
  }, [shopStore.shopCarts])

  useEffect(() => {
    let cost = 0
    shopStore.shopCarts.forEach((item: ShopCartParam, index: number) => {
      cost += item.cost * addCarts[index]
      if (item.device_kit_cost) {
        cost += item.device_kit_cost
      }
      if (item.cost_include_warranty && item.warranty_cost) {
        cost += item.warranty_cost
      }
    })
    setTotalCost(cost)
  }, [addCarts, shopStore.shopCarts])

  const resetStatuses = () => {
    setToastParams({
      msg: "",
      isError: false,
      isWarning: false,
      isInfo: false,
      isSuccess: false,
    })
  }

  return (
    <React.Fragment>
      <div onClick={handleOpen} style={{ position: "relative", cursor: "pointer" }}>
        <img
          src="/img/icons/shop.png"
          alt="shop-icon"
          aria-controls="shop-cart-dropdown"
          aria-haspopup="true"
        />
        {shopCarts.length ? (
          <div className="shop-cart-badge">
            <p>{shopCarts.length}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <StyledMenu
        id="shop-cart-dropdown"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="shop-cart">
          {!shopCarts.length ? (
            <div className="empty-cart">
              <p>{t("Your cart is empty")}</p>
              <button
                onClick={() => {
                  shopStore.setShopCarts(shopCarts)
                  handleClose()
                  router.push("/shop")
                }}
              >
                {t("Shop Now")}
              </button>
            </div>
          ) : (
            <div className="shop-carts-container">
              <h3>{t("Your cart")}</h3>
              <div className="shop-carts-main custom-scroll-bar">
                {shopCarts.map((item: ShopCartParam, index: number) => {
                  return (
                    <div key={index}>
                      <img src={item.img_src} alt={item.img_alt} />
                      <div>
                        <div>
                          <p className="bold">{item.name}</p>
                          <p className="bold">{formatAsMoney(item.cost)}</p>
                        </div>
                        <div>
                          <p>{item.description}</p>
                        </div>
                        {!item.locked && (
                          <div>
                            <p>{t("Unlocked")}</p>
                          </div>
                        )}
                        <div style={{ margin: "15px 0" }}>
                          <p
                            className="shop-cart-remove-btn"
                            onClick={() => {
                              _.remove(shopCarts, (o) => o.id === item.id)
                              setShopCarts([...shopCarts])
                            }}
                          >
                            {t("Remove")}
                          </p>
                          <CalculatorButton
                            addCarts={addCarts[index]}
                            setAddCarts={(val) => {
                              addCarts[index] = val
                              setAddCarts([...addCarts])
                              shopCarts[index].total = val
                              setShopCarts([...shopCarts])
                            }}
                          />
                        </div>
                        {item.device_kit_cost && (
                          <div>
                            <p className="bold">{t("DeviceKit")}</p>
                            <p className="bold">{formatAsMoney(item.device_kit_cost)}</p>
                          </div>
                        )}
                        {item.device_kit_cost && (
                          <div style={{ margin: "5px 0" }}>
                            <p
                              className="shop-cart-remove-btn"
                              onClick={() => {
                                shopCarts[index].device_kit_cost = undefined
                                setShopCarts([...shopCarts])
                              }}
                            >
                              {t("Remove")}
                            </p>
                          </div>
                        )}
                        {item.cost_include_warranty && (
                          <div>
                            <p className="bold">{`${item.included_warranty_duration_month} ${t(
                              "Month Warranty"
                            )}`}</p>
                            <p className="bold">{formatAsMoney(item.warranty_cost)}</p>
                          </div>
                        )}
                        {item.cost_include_warranty && (
                          <div style={{ margin: "5px 0" }}>
                            <p
                              className="shop-cart-remove-btn"
                              onClick={() => {
                                shopCarts[index].cost_include_warranty = false
                                setShopCarts([...shopCarts])
                              }}
                            >
                              {t("Remove")}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-between align-center" style={{ padding: "25px 15px" }}>
                <p className="bold">{t("Subtotal")}</p>
                <p className="bold">{formatAsMoney(totalCost)}</p>
              </div>

              <div className="check-button">
                <button
                  onClick={() => {
                    shopStore.setShopCarts(shopCarts)
                    handleClose()
                    if (authStore.authUser || authStore.progressForCheckout) {
                      router.push("/checkout")
                    } else {
                      authStore.setProgressForCheckout(true)
                      setOpenSignModal(true)
                    }
                  }}
                >
                  {t("Checkout")}
                </button>
              </div>
            </div>
          )}
        </div>
      </StyledMenu>

      <SignModal open={openSignModal} setOpen={setOpenSignModal} setToastParams={setToastParams} />
      <Toast params={toastParams} resetStatuses={resetStatuses} />
    </React.Fragment>
  )
}

export default observer(ShopCart)
