import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Search from "./Search"
import { NavParams, SecondaryNavParams, SecondaryNavType } from "../models/nav-params"
import config from "../static/config.json"
import _ from "lodash"
import LangDropdown from "./LangDropdown"
import { useTranslation } from "react-i18next"
import FindStoreMenu from "./FindStoreMenu"
import HeaderDrawer from "./HeaderDrawer"
import MegaMenu from "./MegaMenu"
import ServiceMenu from "./ServiceMenu"

const Header = () => {
  const [t] = useTranslation()

  const router = useRouter()
  const thisPage = _.cloneDeep(config.headerData.navData)
  const secondaryNav = [] as SecondaryNavParams[]
  thisPage.secondary.forEach((item) => {
    secondaryNav.push({
      name: item.name,
      type: item.type as SecondaryNavType,
    })
  })

  const [path, setPath] = useState("/")
  const [searchKey, setSearchKey] = useState("")
  const [filter, setFilter] = useState<SecondaryNavType>("flashSale")

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
        <p className="brand-login">{t("Log In")}</p>
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
          {secondaryNav.map((item: SecondaryNavParams, index: number) => {
            return (
              <p
                key={index}
                style={{ color: item.type === filter ? "#4360fa" : "" }}
                onClick={() => {
                  setFilter(item.type)
                }}
              >
                {t(item.name)}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
