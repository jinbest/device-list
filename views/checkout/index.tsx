import React, { useEffect } from "react"
import { observer } from "mobx-react"
import { authStore, shopStore } from "../../store"
import router from "next/router"
import EmptyCheckout from "./compo/empty-checkout"

const Checkout = () => {
  const emptyCheckout = shopStore.shopCarts.length === 0

  useEffect(() => {
    if (!authStore.authUser) {
      router.push("/")
      authStore.setProgressForCheckout(false)
    }
  }, [authStore.authUser])

  return (
    <div className="checkout">
      <div className="container">
        {emptyCheckout ? (
          <EmptyCheckout />
        ) : (
          <div>
            <p>main-checkout</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default observer(Checkout)
