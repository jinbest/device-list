import React from "react"
import { observer } from "mobx-react"
import { authStore } from "../../../store"
import { useTranslation } from "react-i18next"

const ContactPreferences = () => {
  const [t] = useTranslation()

  return (
    <div className="account-details">
      <p className="details-title">{t(authStore.accountData.contantPreferences.title)}</p>
    </div>
  )
}

export default observer(ContactPreferences)
