import React from "react"
import config from "../../static/config.json"
import _ from "lodash"
import { useTranslation } from "react-i18next"
import { InsureTableParam } from "../../models/insure-params"

const Section4 = () => {
  const thisData = _.cloneDeep(config.insure.section4)
  const [t] = useTranslation()

  return (
    <div className="insure-section4">
      <div className="container">
        <h1>{t(thisData.title)}</h1>
        <p className="content">{t(thisData.content)}</p>
        <table className="table-desktop">
          <tbody>
            <tr>
              <td className="no-border"></td>
              <td className="bg-blue">{t(thisData.tableData.header.bounce)}</td>
              <td>{t(thisData.tableData.header.applecare)}</td>
              <td>{t(thisData.tableData.header.carriers)}</td>
            </tr>
            {thisData.tableData.child.map((item: InsureTableParam, index: number) => (
              <tr key={index}>
                <td className="text-left">{t(item.header)}</td>
                <td className="bg-light-blue">
                  {item.bounce.toString() === "true" ? (
                    <img src="/img/icons/true.png" alt="true" />
                  ) : item.bounce.toString() === "false" ? (
                    <img src="/img/icons/false.png" alt="false" />
                  ) : (
                    item.bounce
                  )}
                </td>
                <td>
                  {item.applecare.toString() === "true" ? (
                    <img src="/img/icons/true.png" alt="true" />
                  ) : item.applecare.toString() === "false" ? (
                    <img src="/img/icons/false.png" alt="false" />
                  ) : (
                    item.applecare
                  )}
                </td>
                <td>
                  {item.carriers.toString() === "true" ? (
                    <img src="/img/icons/true.png" alt="true" />
                  ) : item.carriers.toString() === "false" ? (
                    <img src="/img/icons/false.png" alt="false" />
                  ) : (
                    item.carriers
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-mobile">
          <table>
            <tbody>
              <tr>
                <td className="no-border"></td>
                <td className="bg-blue">{t(thisData.tableData.header.bounce)}</td>
              </tr>
              {thisData.tableData.child.map((item: InsureTableParam, index: number) => (
                <tr key={index}>
                  <td className="text-left">{t(item.header)}</td>
                  <td className="bg-light-blue">
                    {item.bounce.toString() === "true" ? (
                      <img src="/img/icons/true.png" alt="true" />
                    ) : item.bounce.toString() === "false" ? (
                      <img src="/img/icons/false.png" alt="false" />
                    ) : (
                      item.bounce
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td className="no-border"></td>
                <td>{t(thisData.tableData.header.applecare)}</td>
              </tr>
              {thisData.tableData.child.map((item: InsureTableParam, index: number) => (
                <tr key={index}>
                  <td className="text-left">{t(item.header)}</td>
                  <td>
                    {item.applecare.toString() === "true" ? (
                      <img src="/img/icons/true.png" alt="true" />
                    ) : item.applecare.toString() === "false" ? (
                      <img src="/img/icons/false.png" alt="false" />
                    ) : (
                      item.applecare
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td className="no-border"></td>
                <td>{t(thisData.tableData.header.carriers)}</td>
              </tr>
              {thisData.tableData.child.map((item: InsureTableParam, index: number) => (
                <tr key={index}>
                  <td className="text-left">{t(item.header)}</td>
                  <td>
                    {item.carriers.toString() === "true" ? (
                      <img src="/img/icons/true.png" alt="true" />
                    ) : item.carriers.toString() === "false" ? (
                      <img src="/img/icons/false.png" alt="false" />
                    ) : (
                      item.carriers
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Section4
