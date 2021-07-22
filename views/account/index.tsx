import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import { authStore } from "../../store"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { isEmpty } from "lodash"
import MyDetails from "./compo/MyDetails"
import AddressBook from "./compo/AddressBook"
import MyOrders from "./compo/MyOrders"
import MyReturns from "./compo/MyReturns"
import PaymentMethods from "./compo/PaymentMethods"
import ContactPreferences from "./compo/ContactPreferences"
import NeedHelp from "./compo/NeedHelp"

const MyAccount = () => {
  const router = useRouter()
  const [t] = useTranslation()
  const keys = Object.keys(authStore.accountData)

  const [tab, setTab] = useState(0)

  useEffect(() => {
    if (!authStore.authUser) {
      router.push("/")
    }
  }, [authStore.authUser])

  const handleSignOut = () => {
    authStore.setAuthUser("")
  }

  const _getTitle_ = (key: string, obj: Record<string, any>) => {
    return obj[key].title
  }

  return (
    <div className="my-account">
      <div className="container">
        <div className="account-menu-bar">
          <div>
            {!isEmpty(authStore.accountData) && (
              <>
                {keys.map((item: string, index: number) => (
                  <p
                    key={index}
                    style={{ color: index === tab ? "#4360FA" : "" }}
                    onClick={() => {
                      setTab(index)
                    }}
                  >
                    {t(_getTitle_(item, authStore.accountData))}
                  </p>
                ))}
              </>
            )}
          </div>
          <div>
            <p className="underline" onClick={handleSignOut}>
              {t("Sign Out")}
            </p>
          </div>
        </div>
        {tab === 0 && <MyDetails />}
        {tab === 1 && <AddressBook />}
        {tab === 2 && <MyOrders />}
        {tab === 3 && <MyReturns />}
        {tab === 4 && <PaymentMethods />}
        {tab === 5 && <ContactPreferences />}
        {tab === 6 && <NeedHelp />}
      </div>
    </div>
  )
}

export default observer(MyAccount)
