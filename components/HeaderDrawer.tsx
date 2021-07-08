import React, { useState } from "react"
import Drawer from "@material-ui/core/Drawer"
import LangDropdown from "./LangDropdown"
import { useTranslation } from "react-i18next"
import config from "../static/config.json"
import _ from "lodash"
import { useRouter } from "next/router"
import { NavParams } from "../models/nav-params"
import FindStoreModal from "./FindStoreModal"

type Anchor = "top" | "left" | "bottom" | "right"

const HeaderDrawer = () => {
  const [t] = useTranslation()
  const router = useRouter()

  const navData = _.cloneDeep(config.headerData.navData.primary)

  const [state, setState] = useState({
    right: false,
  })
  const [openModal, setOpenModal] = useState(false)

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

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
          <div
            onClick={() => {
              setState({ right: false })
              router.push("/")
            }}
            className="drawer-logo"
          >
            <img src={navData.logo} alt="drawer-logo" />
          </div>
          {navData.nav.map((item: NavParams, index: number) => {
            return (
              <div
                className="drawer-nav-item"
                key={index}
                onClick={() => {
                  router.push(item.link)
                  setState({ right: false })
                }}
              >
                <p>{item.name}</p>
              </div>
            )
          })}
        </div>
        <div className="flex flex-column">
          <button
            className="store-menu-submit"
            type="button"
            onClick={() => {
              setOpenModal(true)
              setState({ right: false })
            }}
          >
            {t("Find a Store")}
          </button>
          <div style={{ margin: "15px auto" }}>
            <LangDropdown />
          </div>
        </div>
      </Drawer>
      <FindStoreModal open={openModal} setOpen={setOpenModal} />
    </div>
  )
}

export default HeaderDrawer
