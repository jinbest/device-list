import { isEmpty } from "lodash"
import React from "react"

type Props = {
  placeholder?: string
  value: string
  handleChange: (val: string) => void
  handleIconClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  style?: any
  className?: string
}

const Search = ({ value, placeholder, handleChange, handleIconClick, style, className }: Props) => {
  return (
    <div
      className={className ? `search ${className}` : "search"}
      style={!isEmpty(style) ? style : {}}
    >
      <input
        value={value ?? ""}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder ?? "Stores, devices, services ..."}
      />
      <span>
        <img src="/img/icons/search.png" alt="search-icon" onClick={handleIconClick} />
      </span>
    </div>
  )
}

export default Search
