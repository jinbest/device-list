import React, { useState, useEffect } from "react"
import Drawer from "@material-ui/core/Drawer"
import LangDropdown from "./LangDropdown"
import { useTranslation } from "react-i18next"
import config from "../static/config.json"
import _ from "lodash"
import { useRouter } from "next/router"
import FindStoreModal from "./FindStoreModal"
import { DrawerItemType } from "../models/header-drawer-params"
import { NavParams } from "../models/nav-params"
import { MegaDataParam, MegaDataChildParam, AnchorType } from "../models/mega-params"
import SignModal from "./sign-modal/SignModal"

const HeaderDrawer = () => {
  const [t] = useTranslation()
  const router = useRouter()

  const navData = _.cloneDeep(config.headerData.navData.primary)
  const secondaryNav = _.cloneDeep(config.headerData.navData.secondary)
  const shopData = _.cloneDeep(config.megaData.data)

  const [state, setState] = useState({
    right: false,
  })
  const [openModal, setOpenModal] = useState(false)
  const [menuStep, setMenuStep] = useState(0)
  const [itemType, setItemType] = useState<DrawerItemType>("popular")
  const [shopIndex, setShopIndex] = useState(0)
  const [shopChildIndex, setShopChildIndex] = useState(0)
  const [openSignModal, setOpenSignModal] = useState(false)

  const toggleDrawer =
    (anchor: AnchorType, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  useEffect(() => {
    if (!state.right) {
      setMenuStep(0)
      setItemType("popular")
    }
  }, [state])

  return (
    <div id="menu">
      <img onClick={toggleDrawer("right", true)} src="img/icons/menu.png" alt="shop-icon" />
      <Drawer
        className="header-drawer"
        anchor={"right"}
        open={state["right"]}
        onClose={() => {
          setState({ right: false })
        }}
      >
        <div className="flex flex-column">
          <div>
            <div
              onClick={() => {
                setState({ right: false })
                router.push("/")
              }}
              className="drawer-logo"
            >
              <img src={navData.logo} alt="drawer-logo" />
            </div>

            <div className="dynamic-contents-container custom-scroll-bar">
              {menuStep === 0 && (
                <div>
                  <div
                    className="drawer-nav-item"
                    onClick={() => {
                      setMenuStep(1)
                      setItemType("popular")
                    }}
                    style={{ color: itemType === "popular" ? "#4360FA" : "" }}
                  >
                    <p>{t("Popular Devices")}</p>
                    {itemType === "popular" ? (
                      <img src="img/icons/arrow-blue-right.png" alt="arrow-blue-right" />
                    ) : (
                      <img src="img/icons/arrow-dark-right.png" alt="arrow-dark-right" />
                    )}
                  </div>
                  <div
                    className="drawer-nav-item"
                    onClick={() => {
                      setMenuStep(1)
                      setItemType("shop")
                    }}
                    style={{ color: itemType === "shop" ? "#4360FA" : "" }}
                  >
                    <p>{t("Shop")}</p>
                    {itemType === "shop" ? (
                      <img src="img/icons/arrow-blue-right.png" alt="arrow-blue-right" />
                    ) : (
                      <img src="img/icons/arrow-dark-right.png" alt="arrow-dark-right" />
                    )}
                  </div>
                  <div
                    className="drawer-nav-item"
                    onClick={() => {
                      router.push("/trade")
                      setState({ right: false })
                    }}
                  >
                    <p>{t("Trade")}</p>
                  </div>
                  <div
                    className="drawer-nav-item"
                    onClick={() => {
                      setMenuStep(1)
                      setItemType("services")
                    }}
                    style={{ color: itemType === "services" ? "#4360FA" : "" }}
                  >
                    <p>{t("Services")}</p>
                    {itemType === "services" ? (
                      <img src="img/icons/arrow-blue-right.png" alt="arrow-blue-right" />
                    ) : (
                      <img src="img/icons/arrow-dark-right.png" alt="arrow-dark-right" />
                    )}
                  </div>
                </div>
              )}

              {menuStep === 1 && itemType === "popular" && (
                <div>
                  <div
                    className="drawer-nav-item"
                    onClick={() => {
                      setMenuStep(0)
                    }}
                    style={{ justifyContent: "inherit" }}
                  >
                    <img src="img/icons/arrow-dark-left.png" alt="arrow-dark-left" />
                    <p style={{ marginLeft: "10px" }}>{t("Back")}</p>
                  </div>
                  {secondaryNav.map((item: string, index: number) => {
                    return (
                      <div className="drawer-nav-item" key={index}>
                        <p>{t(item)}</p>
                      </div>
                    )
                  })}
                </div>
              )}

              {menuStep === 1 && itemType === "services" && (
                <div>
                  <div
                    className="drawer-nav-item"
                    onClick={() => {
                      setMenuStep(0)
                    }}
                    style={{ justifyContent: "inherit" }}
                  >
                    <img src="img/icons/arrow-dark-left.png" alt="arrow-dark-left" />
                    <p style={{ marginLeft: "10px" }}>{t("Back")}</p>
                  </div>
                  {navData.nav.map((item: NavParams, index: number) => {
                    return (
                      <div
                        className="drawer-nav-item"
                        onClick={() => {
                          router.push(item.link)
                          setState({ right: false })
                        }}
                        key={index}
                      >
                        <p>{t(item.name)}</p>
                      </div>
                    )
                  })}
                </div>
              )}

              {menuStep === 1 && itemType === "shop" && (
                <div>
                  <div
                    className="drawer-nav-item"
                    onClick={() => {
                      setMenuStep(0)
                    }}
                    style={{ justifyContent: "inherit" }}
                  >
                    <img src="img/icons/arrow-dark-left.png" alt="arrow-dark-left" />
                    <p style={{ marginLeft: "10px" }}>{t("Back")}</p>
                  </div>
                  {shopData.map((item: MegaDataParam, index: number) => {
                    return (
                      <div
                        className="drawer-nav-item"
                        onClick={() => {
                          setMenuStep(2)
                          setShopIndex(index)
                        }}
                        key={index}
                      >
                        <p>{t(item.name)}</p>
                        <img src="img/icons/arrow-dark-right.png" alt="arrow-dark-right" />
                      </div>
                    )
                  })}
                </div>
              )}

              {menuStep === 2 && (
                <div>
                  <div
                    className="drawer-nav-item"
                    onClick={() => {
                      setMenuStep(1)
                    }}
                    style={{ justifyContent: "inherit" }}
                  >
                    <img src="img/icons/arrow-dark-left.png" alt="arrow-dark-left" />
                    <p style={{ marginLeft: "10px" }}>{t("Back")}</p>
                  </div>
                  {shopData[shopIndex].child.map((item: MegaDataChildParam, index: number) => {
                    return (
                      <div
                        className="drawer-nav-item"
                        onClick={() => {
                          setMenuStep(3)
                          setShopChildIndex(index)
                        }}
                        key={index}
                      >
                        <p>{t(item.name)}</p>
                        <img src="img/icons/arrow-dark-right.png" alt="arrow-dark-right" />
                      </div>
                    )
                  })}
                </div>
              )}

              {menuStep === 3 && (
                <div>
                  <div
                    className="drawer-nav-item"
                    onClick={() => {
                      setMenuStep(2)
                    }}
                    style={{ justifyContent: "inherit" }}
                  >
                    <img src="img/icons/arrow-dark-left.png" alt="arrow-dark-left" />
                    <p style={{ marginLeft: "10px" }}>{t("Back")}</p>
                  </div>
                  {shopData[shopIndex].child[shopChildIndex].data.map(
                    (item: string, index: number) => {
                      return (
                        <div className="drawer-nav-item" key={index}>
                          <p>{t(item)}</p>
                        </div>
                      )
                    }
                  )}
                </div>
              )}
            </div>
          </div>

          {menuStep === 0 && (
            <div style={{ borderTop: "1px solid #B5B5B5", marginTop: "10px", padding: "10px 0" }}>
              <div
                className="drawer-nav-item"
                onClick={() => {
                  setOpenModal(true)
                  setState({ right: false })
                }}
              >
                <p>{t("Find a Store")}</p>
              </div>
              <div
                className="drawer-nav-item"
                onClick={() => {
                  setState({ right: false })
                  setOpenSignModal(true)
                }}
                style={{ color: "#4360FA" }}
              >
                <p>{t("Log In")}</p>
              </div>
            </div>
          )}
        </div>
        <div className={menuStep === 0 ? "flex flex-column" : "hide"}>
          <div style={{ margin: "15px auto" }}>
            <LangDropdown />
          </div>
        </div>
      </Drawer>
      <FindStoreModal open={openModal} setOpen={setOpenModal} />
      <SignModal open={openSignModal} setOpen={setOpenSignModal} />
    </div>
  )
}

export default HeaderDrawer
