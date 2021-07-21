import React from "react"
import { observer } from "mobx-react"
import { authStore } from "../../../store"
import { useTranslation } from "react-i18next"

const MyOrders = () => {
  const [t] = useTranslation()

  return (
    <div className="account-details">
      <p className="details-title">{t(authStore.accountData.myOrders.title)}</p>
    </div>
  )
}

export default observer(MyOrders)
