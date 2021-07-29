import React from "react"
import { useTranslation } from "react-i18next"
import PriceSlider from "./price-slider"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const ShopFilter = () => {
  const [t] = useTranslation()

  return (
    <div className="shop-filter-container">
      <PriceSlider />
      <div className="shop-filter-accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="device-type-content"
            id="device-type"
          >
            <Typography className="accordion-summary">{t("Device Type")}</Typography>
          </AccordionSummary>
          <AccordionDetails>device-type</AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="esthetic-condition-content"
            id="esthetic-condition"
          >
            <Typography className="accordion-summary">{t("Esthetic Condition")}</Typography>
          </AccordionSummary>
          <AccordionDetails>esthetic-condition</AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="brand-content"
            id="brand"
          >
            <Typography className="accordion-summary">{t("Brand")}</Typography>
          </AccordionSummary>
          <AccordionDetails>brand</AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="model-content"
            id="model"
          >
            <Typography className="accordion-summary">{t("Model")}</Typography>
          </AccordionSummary>
          <AccordionDetails>model</AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default ShopFilter
