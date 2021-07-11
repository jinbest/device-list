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
        <table>
          <tbody>
            <tr>
              <td className="no-border"></td>
              <td>{t(thisData.tableData.header.bounce)}</td>
              <td>{t(thisData.tableData.header.applecare)}</td>
              <td>{t(thisData.tableData.header.carriers)}</td>
            </tr>
            {thisData.tableData.child.map((item: InsureTableParam, index: number) => (
              <tr key={index}>
                <td className="text-left">{t(item.header)}</td>
                <td>{item.bounce.toString()}</td>
                <td>{item.applecare.toString()}</td>
                <td>{item.carriers.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Section4
