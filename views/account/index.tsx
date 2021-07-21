import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import { authStore } from "../../store"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { isEmpty } from "lodash"

const MyAccount = () => {
  const router = useRouter()
  const [t] = useTranslation()
  const keys = Object.keys(authStore.accountData)

  const [tab, setTab] = useState(0)
  const [detailsTitle, setDetailsTitle] = useState("")
  const [detailsContent, setDetailsContent] = useState("")

  useEffect(() => {
    if (!authStore.authUser) {
      router.push("/")
    }
  }, [authStore.authUser])

  useEffect(() => {
    const title = _getTitle_(keys[tab], authStore.accountData),
      content = _getContent_(keys[tab], authStore.accountData)
    setDetailsTitle(title)
    setDetailsContent(content)
  }, [tab])

  const handleSignOut = () => {
    authStore.setAuthUser("")
  }

  const _getTitle_ = (key: string, obj: Record<string, any>) => {
    return obj[key].title
  }

  const _getContent_ = (key: string, obj: Record<string, any>) => {
    if (!obj[key].content) return ""
    return obj[key].content
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
        <div className="account-details">
          <p className="details-title">{t(detailsTitle)}</p>
          {detailsContent && <p className="details-content">{t(detailsContent)}</p>}
        </div>
      </div>
    </div>
  )
}

export default observer(MyAccount)
