import React, { useState } from "react"
import Drawer from "@material-ui/core/Drawer"
import { useTranslation } from "react-i18next"
import config from "../static/config.json"
import _ from "lodash"
import {
  MegaContentParam,
  MegaDataParam,
  // MegaDataBannerParam,
  // MegaDataChildParam,
} from "../models/mega-params"
import Link from "next/link"

type Anchor = "top" | "left" | "bottom" | "right"

const MegaMenu = () => {
  const [t] = useTranslation()
  const thisData = _.cloneDeep(config.megaData)
  const contents = thisData.contents,
    data = thisData.data

  const [state, setState] = useState({
    right: false,
  })
  const [dataIndex, setDataIndex] = useState(0)

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
        className="mega-drawer"
        anchor={"right"}
        open={state["right"]}
        onClose={() => {
          setState({ right: false })
        }}
      >
        <div className="mega-details">
          <div className="mega-details-banner" style={{ background: data[dataIndex].banner.bgCol }}>
            <div>
              <p className="mega-banner-title">{t(data[dataIndex].banner.title)}</p>
              <p>{t(data[dataIndex].banner.content)}</p>
              <button>{t("View All")}</button>
            </div>
            <img src={data[dataIndex].banner.logo} alt={`mega-banner-${dataIndex}`} />
          </div>
        </div>
        <div className="mega-nav-container">
          <div style={{ borderBottom: "1px solid #E1E1E1" }}>
            {data.map((item: MegaDataParam, index: number) => {
              return (
                <div
                  key={index}
                  className="mega-nav-item"
                  onClick={() => {
                    setDataIndex(index)
                  }}
                >
                  <p style={{ color: dataIndex === index ? "#4360FA" : "" }}>{t(item.name)}</p>
                </div>
              )
            })}
          </div>
          <div>
            {contents.map((item: MegaContentParam, index: number) => {
              return (
                <div key={index} className="mega-nav-item">
                  <Link href={item.link}>
                    <a>{t(item.text)}</a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default MegaMenu
