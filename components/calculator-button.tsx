import React from "react"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"

type Props = {
  addCarts: number
  setAddCarts: (val: number) => void
}

const CalculatorButton = ({ addCarts, setAddCarts }: Props) => {
  return (
    <div className="calculator-button">
      <div
        onClick={() => {
          setAddCarts(Math.max(addCarts - 1, 0))
        }}
      >
        <RemoveIcon />
      </div>
      <p>{addCarts}</p>
      <div
        onClick={() => {
          setAddCarts(addCarts + 1)
        }}
      >
        <AddIcon />
      </div>
    </div>
  )
}

export default CalculatorButton
