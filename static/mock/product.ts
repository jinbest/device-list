const WORKS_WITH = [
  {
    id: 1,
    name: "unlocked",
    img_src: "",
  },
  {
    id: 2,
    name: "rogers",
    img_src: "/img/product/work-with/rogers.png",
  },
  {
    id: 3,
    name: "bell",
    img_src: "/img/product/work-with/bell.png",
  },
  {
    id: 4,
    name: "telus",
    img_src: "/img/product/work-with/telus.png",
  },
  {
    id: 5,
    name: "koodo",
    img_src: "/img/product/work-with/koodo.png",
  },
  {
    id: 6,
    name: "fido",
    img_src: "/img/product/work-with/fido.png",
  },
  {
    id: 7,
    name: "virqin",
    img_src: "/img/product/work-with/virqin.png",
  },
]

const PRODUCT_COLORS = [
  {
    id: 1,
    color: "#980110",
  },
  {
    id: 2,
    color: "#28BC83",
  },
  {
    id: 3,
    color: "#ffffff",
  },
]

const PRODUCT_STORAGES = [
  {
    id: 1,
    value: 64,
  },
  {
    id: 2,
    value: 128,
  },
]

const PRODUCT_CONDITIONS = [
  {
    id: 1,
    name: "new",
    code: "NEW",
    availability: false,
    cost: 820,
  },
  {
    id: 2,
    name: "mint",
    code: "MINT",
    availability: true,
    cost: 675,
  },
  {
    id: 3,
    name: "good",
    code: "GOOD",
    availability: true,
    cost: 529,
  },
  {
    id: 4,
    name: "fair",
    code: "FAIR",
    availability: false,
    cost: 435,
  },
]

export { WORKS_WITH, PRODUCT_COLORS, PRODUCT_STORAGES, PRODUCT_CONDITIONS }
