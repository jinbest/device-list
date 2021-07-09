import React, { useState } from "react"
import Drawer from "@material-ui/core/Drawer"
import { useTranslation } from "react-i18next"
import config from "../static/config.json"
import _ from "lodash"
import { NavParams } from "../models/nav-params"
import { useRouter } from "next/router"

type Anchor = "top" | "left" | "bottom" | "right"

const ServiceMenu = () => {
  const [t] = useTranslation()
  const router = useRouter()
  const thisData = _.cloneDeep(config.headerData.navData.primary.nav)

  const [state, setState] = useState({
    right: false,
  })

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
    <div>
      <p onClick={toggleDrawer("right", true)}>
        {t("Services")}
        {!state.right ? (
          <span>
            <img src="img/icons/scale-up.png" alt="mega-scale-up" />
          </span>
        ) : (
          <span>
            <img src="img/icons/scale-down.png" alt="mega-scale-down" />
          </span>
        )}
      </p>
      <Drawer
        className={"mega-drawer"}
        anchor={"right"}
        open={state["right"]}
        onClose={() => {
          setState({ right: false })
        }}
      >
        <div className="mega-nav-container">
          <div>
            {thisData.map((item: NavParams, index: number) => {
              return (
                <div
                  key={index}
                  className="mega-nav-item"
                  onClick={() => {
                    setState({ right: false })
                    router.push(item.link)
                  }}
                >
                  <p>{t(item.name)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default ServiceMenu
