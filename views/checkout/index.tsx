import React, { useState, useEffect } from "react"
import { observer } from "mobx-react"
import { shopStore, authStore } from "../../store"
import EmptyCheckout from "./compo/empty-checkout"
import ProgressBar from "./compo/progress-bar"
import { CheckoutProgressStatusParam } from "../../models/checkout-params"
import { CHECKOUT_PROGRESS_STATUS, SHIPPING_STEP_STATUS } from "../../const/_variables"
import _ from "lodash"
import { ShopCartParam } from "../../models/shop-cart"
import Toast from "../../components/toast/toast"
import { ToastMsgParams } from "../../components/toast/toast-msg-params"
import SignModal from "../../components/sign-modal/sign-modal"
import BackSVG from "../../components/svg/back-svg"
import CheckoutComponent from "./compo/checkout-component"
import ProgressCart from "./compo/progress-cart"
import ProgressShipping from "./compo/progress-shipping"

const Checkout = () => {
  const [progressStatus, setProgressStatus] = useState<CheckoutProgressStatusParam>(
    CHECKOUT_PROGRESS_STATUS.cart
  )
  const [proVal, setProVal] = useState(10)
  const [shopCarts, setShopCarts] = useState<ShopCartParam[]>(_.cloneDeep(shopStore.shopCarts))
  const [emptyCheckout, setEmptyCheckout] = useState(shopStore.shopCarts.length === 0)
  const [totalCost, setTotalCost] = useState(0)
  const [toastParams, setToastParams] = useState<ToastMsgParams>({} as ToastMsgParams)
  const [openSignModal, setOpenSignModal] = useState(false)
  const [shippingStepStatus, setShippingStepStatus] = useState(SHIPPING_STEP_STATUS.order_address)

  useEffect(() => {
    setShopCarts(_.cloneDeep(shopStore.shopCarts))
  }, [shopStore.shopCarts])

  useEffect(() => {
    setEmptyCheckout(shopCarts.length === 0)

    let cost = 0
    shopCarts.forEach((item: ShopCartParam) => {
      cost += item.cost * item.total
      if (item.device_kit && item.device_kit_cost) {
        cost += item.device_kit_cost * item.total
      }
      if (item.screen_protector && item.screen_protector_cost) {
        cost += item.screen_protector_cost * item.total
      }
      if (item.cost_include_warranty && item.warranty_cost) {
        cost += item.warranty_cost * item.total
      }
    })
    setTotalCost(cost)
  }, [shopCarts])

  useEffect(() => {
    if (progressStatus === CHECKOUT_PROGRESS_STATUS.cart) {
      setProVal(10)
      shopStore.setInitialOrderAddress()
      shopStore.setInitialBillingAddress()
    } else if (progressStatus === CHECKOUT_PROGRESS_STATUS.account) {
      setProVal(37)
    } else if (progressStatus === CHECKOUT_PROGRESS_STATUS.shipping) {
      setProVal(60)
    } else if (progressStatus === CHECKOUT_PROGRESS_STATUS.payment) {
      setProVal(82)
    } else {
      setProVal(100)
    }
  }, [progressStatus])

  useEffect(() => {
    setProgressStatus(shopStore.progressStatus)
  }, [shopStore.progressStatus])

  const handleCheckout = () => {
    shopStore.setShopCarts(shopCarts)
    if (authStore.authUser) {
      shopStore.setProgressStatus(CHECKOUT_PROGRESS_STATUS.shipping)
    } else {
      shopStore.setProgressStatus(CHECKOUT_PROGRESS_STATUS.account)
      authStore.setProgressForCheckout(true)
      setOpenSignModal(true)
    }
  }

  const resetStatuses = () => {
    setToastParams({
      msg: "",
      isError: false,
      isWarning: false,
      isInfo: false,
      isSuccess: false,
    })
  }

  const _back_button_visible_ = () => {
    return (
      progressStatus !== CHECKOUT_PROGRESS_STATUS.cart &&
      progressStatus !== CHECKOUT_PROGRESS_STATUS.confirmation
    )
  }

  const handleBack = () => {
    if (progressStatus === CHECKOUT_PROGRESS_STATUS.account) {
      shopStore.setProgressStatus(CHECKOUT_PROGRESS_STATUS.cart)
    } else if (progressStatus === CHECKOUT_PROGRESS_STATUS.shipping) {
      if (shippingStepStatus === SHIPPING_STEP_STATUS.order_address) {
        shopStore.setProgressStatus(CHECKOUT_PROGRESS_STATUS.account)
      } else if (shippingStepStatus === SHIPPING_STEP_STATUS.billing_address) {
        setShippingStepStatus(SHIPPING_STEP_STATUS.order_address)
      } else if (shippingStepStatus === SHIPPING_STEP_STATUS.confirm_order_address) {
        setShippingStepStatus(SHIPPING_STEP_STATUS.billing_address)
      } else if (shippingStepStatus === SHIPPING_STEP_STATUS.confirm_billing_address) {
        setShippingStepStatus(SHIPPING_STEP_STATUS.confirm_order_address)
      }
    } else if (progressStatus === CHECKOUT_PROGRESS_STATUS.payment) {
      shopStore.setProgressStatus(CHECKOUT_PROGRESS_STATUS.shipping)
      setShippingStepStatus(SHIPPING_STEP_STATUS.order_address)
    }
  }

  return (
    <div className="checkout">
      <div className="container">
        <ProgressBar value={proVal} />

        {_back_button_visible_() && (
          <div className="back-to-top" onClick={handleBack}>
            <BackSVG color="#BDBFC3" />
          </div>
        )}

        {emptyCheckout ? (
          <EmptyCheckout />
        ) : (
          <div className="checkout-main-container">
            <div className="left-side">
              {(progressStatus === CHECKOUT_PROGRESS_STATUS.cart ||
                progressStatus === CHECKOUT_PROGRESS_STATUS.account) && (
                <ProgressCart shopCarts={shopCarts} setShopCarts={setShopCarts} />
              )}

              {progressStatus === CHECKOUT_PROGRESS_STATUS.shipping && (
                <ProgressShipping
                  shippingStepStatus={shippingStepStatus}
                  setShippingStepStatus={setShippingStepStatus}
                />
              )}
            </div>

            <div className="right-side">
              <CheckoutComponent
                shopCarts={shopCarts}
                handleCheckout={handleCheckout}
                progressStatus={progressStatus}
                totalCost={totalCost}
              />
            </div>
          </div>
        )}
      </div>

      <SignModal open={openSignModal} setOpen={setOpenSignModal} setToastParams={setToastParams} />
      <Toast params={toastParams} resetStatuses={resetStatuses} />
    </div>
  )
}

export default observer(Checkout)
