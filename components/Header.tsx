import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Search from "./Search"
import config from "../static/config.json"
import _ from "lodash"
import LangDropdown from "./LangDropdown"
import { useTranslation } from "react-i18next"
import FindStoreMenu from "./FindStoreMenu"
import HeaderDrawer from "./HeaderDrawer"
import MegaMenu from "./MegaMenu"
import ServiceMenu from "./ServiceMenu"
import SignModal from "./sign-modal/SignModal"

const Header = () => {
  const [t] = useTranslation()

  const router = useRouter()
  const thisPage = _.cloneDeep(config.headerData.navData)
  const secondaryNav = thisPage.secondary

  const [path, setPath] = useState("/")
  const [searchKey, setSearchKey] = useState("")
  const [filter, setFilter] = useState("Flash Sale!")
  const [openSignModal, setOpenSignModal] = useState(false)

  const handleIconClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    console.log("searchKey", searchKey)
    setSearchKey("")
  }

  useEffect(() => {
    setPath(router.asPath)
  }, [router])

  return (
    <div className="header">
      <div className="header-brand">
        <FindStoreMenu />
        <LangDropdown />
        <p
          className="brand-login"
          onClick={() => {
            setOpenSignModal(true)
          }}
        >
          {t("Log In")}
        </p>
      </div>
      <div className="header-content-1">
        <div className="logo">
          <Link href="/">
            <a>
              <img src={thisPage.primary.logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="search-container-desktop">
          <Search
            value={searchKey}
            handleChange={(val) => {
              setSearchKey(val)
            }}
            handleIconClick={handleIconClick}
          />
        </div>
        <div className="flex">
          <div className="nav-link">
            <MegaMenu />
            <Link href="/trade">
              <a style={{ color: path === "/trade" ? "#4360fa" : "" }}>{t("Trade")}</a>
            </Link>
            <ServiceMenu />
          </div>
          <div className="nav-buttons">
            <img src="img/icons/heart.png" alt="heart-icon" />
            <img src="img/icons/shop.png" alt="shop-icon" />
            <HeaderDrawer />
          </div>
        </div>
      </div>
      <div className="search-container-mobile">
        <Search
          value={searchKey}
          handleChange={(val) => {
            setSearchKey(val)
          }}
          handleIconClick={handleIconClick}
        />
      </div>
      <div className="header-content-2">
        <div>
          {secondaryNav.map((item: string, index: number) => {
            return (
              <p
                key={index}
                style={{ color: item === filter ? "#4360fa" : "" }}
                onClick={() => {
                  setFilter(item)
                }}
              >
                {t(item)}
              </p>
            )
          })}
        </div>
      </div>
      <SignModal open={openSignModal} setOpen={setOpenSignModal} />
    </div>
  )
}

export default Header
