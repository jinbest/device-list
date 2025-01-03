import {
  CategoryParam,
  BrandParam,
  SupplierParam,
  ProductParam,
  FilterCheckItemParam,
} from "../../models/shop-page-params"
import { SelectorParam } from "../../models/selector-param"

const DEVICE_COLOR = {
  black: "black",
  gold: "gold",
  silver: "silver",
  spaceGray: "space gray",
  roseGold: "rose gold",
  white: "white",
  yellow: "yellow",
}

const DEVICE_CATEGORIES = [
  {
    id: 1,
    store_id: 1,
    name: "CellPhones",
    code: "CELLPHONE",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 1,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 2,
    store_id: 1,
    name: "Computer",
    code: "COPUTER",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 2,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 3,
    store_id: 1,
    name: "Tablet",
    code: "TABLET",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 3,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 4,
    store_id: 1,
    name: "Gaming",
    code: "GAMING",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 4,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 5,
    store_id: 1,
    name: "Wearables",
    code: "WEARABLES",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 5,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 6,
    store_id: 1,
    name: "Audio",
    code: "AUDIO",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 6,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 7,
    store_id: 1,
    name: "Smart Home",
    code: "SMART_HOME",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 7,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 8,
    store_id: 1,
    name: "Accessories",
    code: "ACCESSORIES",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 8,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
] as CategoryParam[]

const BRANDS = [
  {
    id: 1,
    store_id: 1,
    name: "Apple",
    code: "APPLE",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 1,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 2,
    store_id: 1,
    name: "Samsung",
    code: "SAMSUNG",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 2,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 3,
    store_id: 1,
    name: "Google",
    code: "GOOGLE",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 3,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 4,
    store_id: 1,
    name: "LG",
    code: "LG",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 4,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 5,
    store_id: 1,
    name: "OnePlus",
    code: "ONE_PLUS",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 5,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
  {
    id: 6,
    store_id: 1,
    name: "Essential",
    code: "ESSENTIAL",
    description: "",
    primary_search: true,
    advance_search: true,
    display_in_menu: true,
    sort_order: 6,
    image_src: "",
    is_system_default: true,
    is_enabled: true,
  },
] as BrandParam[]

const ESTHETIC_CONDITIONS = [
  {
    label: "New",
    value: "New",
    id: 1,
    order: 1,
  },
  {
    label: "Mint",
    value: "Mint",
    id: 2,
    order: 2,
  },
  {
    label: "Good",
    value: "Good",
    id: 3,
    order: 3,
  },
  {
    label: "Fair",
    value: "Fair",
    id: 4,
    order: 4,
  },
] as FilterCheckItemParam[]

const DEVICE_STORAGES = [
  {
    label: "4 GB",
    value: 4,
    id: 1,
    order: 1,
  },
  {
    label: "8 GB",
    value: 8,
    id: 2,
    order: 2,
  },
  {
    label: "16 GB",
    value: 16,
    id: 3,
    order: 3,
  },
  {
    label: "32 GB",
    value: 32,
    id: 4,
    order: 4,
  },
  {
    label: "64 GB",
    value: 64,
    id: 5,
    order: 5,
  },
  {
    label: "128 GB",
    value: 128,
    id: 6,
    order: 6,
  },
] as FilterCheckItemParam[]

const DEVICE_COLORS = [
  {
    label: "Black",
    value: DEVICE_COLOR.black,
    id: 1,
    order: 1,
  },
  {
    label: "Gold",
    value: DEVICE_COLOR.gold,
    id: 2,
    order: 2,
  },
  {
    label: "Silver",
    value: DEVICE_COLOR.silver,
    id: 3,
    order: 3,
  },
  {
    label: "Space Gray",
    value: DEVICE_COLOR.spaceGray,
    id: 4,
    order: 4,
  },
  {
    label: "Rose Gold",
    value: DEVICE_COLOR.roseGold,
    id: 5,
    order: 5,
  },
  {
    label: "White",
    value: DEVICE_COLOR.white,
    id: 6,
    order: 6,
  },
  {
    label: "Yellow",
    value: DEVICE_COLOR.yellow,
    id: 7,
    order: 7,
  },
] as FilterCheckItemParam[]

const CARRIERS = [
  {
    label: "AT&T",
    id: 1,
    value: "AT&T",
    order: 1,
  },
  {
    label: "Bell",
    id: 2,
    value: "Bell",
    order: 2,
  },
  {
    label: "Telus",
    id: 3,
    value: "Telus",
    order: 3,
  },
  {
    label: "Verizon",
    id: 4,
    value: "Verizon",
    order: 4,
  },
  {
    label: "Rogers",
    id: 5,
    value: "Rogers",
    order: 5,
  },
  {
    label: "Virgin Mobile",
    id: 6,
    value: "Virgin Mobile",
    order: 6,
  },
] as FilterCheckItemParam[]

const SUPPLIERS = [
  {
    id: 1,
    store_id: 1,
    location_id: 1,
    company_name: "Mobile Tech Lab",
    name: "Mobile Tech Lab",
    address: "",
    city: "",
    state: "",
    country: "CA",
    contact_no: "",
    email: "",
    rating: 5,
    is_enabled: true,
  },
  {
    id: 2,
    store_id: 1,
    location_id: 2,
    company_name: "Prado Wireless",
    name: "Prado Wireless",
    address: "",
    city: "",
    state: "",
    country: "CA",
    contact_no: "",
    email: "",
    rating: 5,
    is_enabled: true,
  },
  {
    id: 3,
    store_id: 1,
    location_id: 3,
    company_name: "Nanotech",
    name: "Nanotech",
    address: "",
    city: "",
    state: "",
    country: "CA",
    contact_no: "",
    email: "",
    rating: 5,
    is_enabled: true,
  },
  {
    id: 4,
    store_id: 1,
    location_id: 4,
    company_name: "NorthTech Solutions",
    name: "NorthTech Solutions",
    address: "",
    city: "",
    state: "",
    country: "CA",
    contact_no: "",
    email: "",
    rating: 5,
    is_enabled: true,
  },
  {
    id: 5,
    store_id: 1,
    location_id: 5,
    company_name: "Phonephix",
    name: "Phonephix",
    address: "",
    city: "",
    state: "",
    country: "CA",
    contact_no: "",
    email: "",
    rating: 5,
    is_enabled: true,
  },
  {
    id: 6,
    store_id: 1,
    location_id: 6,
    company_name: "Geebo",
    name: "Geebo",
    address: "",
    city: "",
    state: "",
    country: "CA",
    contact_no: "",
    email: "",
    rating: 5,
    is_enabled: true,
  },
] as SupplierParam[]

const AVAILABILITIES = [
  {
    label: "Online",
    value: "Online",
    id: 1,
    order: 1,
  },
  {
    label: "In-Store",
    value: "In-Store",
    id: 2,
    order: 2,
  },
] as FilterCheckItemParam[]

const PRODUCTS = [
  {
    id: 1,
    store_id: 1,
    brand_id: 1,
    name: "iPhone SE 2020",
    img_src: "/img/vendor-profile/shop/iPhone-SE-white.png",
    short_description: "$50/mo",
    description: "64 GB | White",
    storage: 64,
    supplier_id: 1,
    esthetic_id: 1,
    carrier_id: 1,
    color_id: 6,
    require_stock: true,
    cost: 500,
    included_warranty_duration_month: 12,
    sort_order: 1,
    available_in_store: true,
    available_online: true,
    category: [
      {
        category_id: 1,
      },
    ],
    brand: {
      id: 1,
      store_id: 1,
      name: "Apple",
      code: "APPLE",
      description: "",
      primary_search: true,
      advance_search: true,
      display_in_menu: true,
      sort_order: 1,
      image_src: "",
      is_system_default: true,
      is_enabled: true,
    },
  },
  {
    id: 2,
    store_id: 1,
    brand_id: 1,
    name: "iPad Pro 10.5",
    img_src: "/img/vendor-profile/shop/iPad-Pro-10.png",
    short_description: "$60/mo",
    description: "32 GB | Silver",
    storage: 32,
    supplier_id: 1,
    esthetic_id: 1,
    carrier_id: 1,
    color_id: 3,
    require_stock: false,
    cost: 650,
    included_warranty_duration_month: 6,
    sort_order: 2,
    available_in_store: true,
    available_online: false,
    category: [
      {
        category_id: 1,
      },
    ],
    brand: {
      id: 1,
      store_id: 1,
      name: "Apple",
      code: "APPLE",
      description: "",
      primary_search: true,
      advance_search: true,
      display_in_menu: true,
      sort_order: 1,
      image_src: "",
      is_system_default: true,
      is_enabled: true,
    },
  },
  {
    id: 3,
    store_id: 1,
    brand_id: 1,
    name: "iPhone 5c",
    img_src: "/img/vendor-profile/shop/iPhone-5c-Yellow.png",
    short_description: "$50/mo",
    description: "40 GB | Yellow",
    storage: 40,
    supplier_id: 1,
    esthetic_id: 1,
    carrier_id: 1,
    color_id: 7,
    require_stock: true,
    cost: 300,
    included_warranty_duration_month: 12,
    sort_order: 3,
    available_in_store: true,
    available_online: false,
    category: [
      {
        category_id: 1,
      },
    ],
    brand: {
      id: 1,
      store_id: 1,
      name: "Apple",
      code: "APPLE",
      description: "",
      primary_search: true,
      advance_search: true,
      display_in_menu: true,
      sort_order: 1,
      image_src: "",
      is_system_default: true,
      is_enabled: true,
    },
  },
  {
    id: 4,
    store_id: 1,
    brand_id: 1,
    name: "Apple Watch (Series 5)",
    img_src: "/img/vendor-profile/shop/apple-watch.png",
    short_description: "$50/mo",
    description: "40mm | GPS Only | Space Gray",
    storage: 20,
    supplier_id: 1,
    esthetic_id: 1,
    carrier_id: 1,
    color_id: 4,
    require_stock: false,
    cost: 300,
    included_warranty_duration_month: 12,
    sort_order: 4,
    available_in_store: false,
    available_online: true,
    category: [
      {
        category_id: 1,
      },
      {
        category_id: 2,
      },
    ],
    brand: {
      id: 1,
      store_id: 1,
      name: "Apple",
      code: "APPLE",
      description: "",
      primary_search: true,
      advance_search: true,
      display_in_menu: true,
      sort_order: 1,
      image_src: "",
      is_system_default: true,
      is_enabled: true,
    },
  },
  {
    id: 5,
    store_id: 1,
    brand_id: 2,
    name: "Samsung Galaxy S20",
    img_src: "/img/vendor-profile/shop/Samsung-Galaxy-S20.png",
    short_description: "$60/mo",
    description: "128 GB | Violet",
    storage: 128,
    supplier_id: 2,
    esthetic_id: 2,
    carrier_id: 2,
    color_id: 6,
    require_stock: true,
    cost: 300,
    included_warranty_duration_month: 12,
    sort_order: 5,
    available_in_store: false,
    available_online: false,
    category: [
      {
        category_id: 2,
      },
    ],
    brand: {
      id: 2,
      store_id: 1,
      name: "Samsung",
      code: "SAMSUNG",
      description: "",
      primary_search: true,
      advance_search: true,
      display_in_menu: true,
      sort_order: 2,
      image_src: "",
      is_system_default: true,
      is_enabled: true,
    },
  },
  {
    id: 6,
    store_id: 1,
    brand_id: 5,
    name: "OnePlus 8 Pro",
    img_src: "/img/vendor-profile/shop/OnePlus-8.png",
    short_description: "$60/mo",
    description: "60 GB | Glacial Green",
    storage: 60,
    supplier_id: 2,
    esthetic_id: 2,
    carrier_id: 2,
    color_id: 6,
    require_stock: true,
    cost: 500,
    included_warranty_duration_month: 6,
    sort_order: 6,
    available_in_store: false,
    available_online: true,
    category: [
      {
        category_id: 3,
      },
    ],
    brand: {
      id: 5,
      store_id: 1,
      name: "OnePlus",
      code: "ONE_PLUS",
      description: "",
      primary_search: true,
      advance_search: true,
      display_in_menu: true,
      sort_order: 5,
      image_src: "",
      is_system_default: true,
      is_enabled: true,
    },
  },
  {
    id: 7,
    store_id: 1,
    brand_id: 1,
    name: "iPhone 5c",
    img_src: "/img/vendor-profile/shop/iPhone-5c-Yellow.png",
    short_description: "$50/mo",
    description: "64 GB | Yellow",
    storage: 64,
    supplier_id: 1,
    esthetic_id: 1,
    carrier_id: 1,
    color_id: 7,
    require_stock: false,
    cost: 300,
    included_warranty_duration_month: 12,
    sort_order: 7,
    available_in_store: false,
    available_online: true,
    category: [
      {
        category_id: 1,
      },
    ],
    brand: {
      id: 1,
      store_id: 1,
      name: "Apple",
      code: "APPLE",
      description: "",
      primary_search: true,
      advance_search: true,
      display_in_menu: true,
      sort_order: 1,
      image_src: "",
      is_system_default: true,
      is_enabled: true,
    },
  },
  {
    id: 8,
    store_id: 1,
    brand_id: 1,
    name: "Apple Watch (Series 5)",
    img_src: "/img/vendor-profile/shop/apple-watch.png",
    short_description: "$50/mo",
    description: "40mm | GPS Only | Space Gray",
    storage: 40,
    supplier_id: 1,
    esthetic_id: 1,
    carrier_id: 1,
    color_id: 4,
    require_stock: true,
    cost: 300,
    included_warranty_duration_month: 12,
    sort_order: 8,
    available_in_store: true,
    available_online: false,
    category: [
      {
        category_id: 1,
      },
      {
        category_id: 2,
      },
    ],
    brand: {
      id: 1,
      store_id: 1,
      name: "Apple",
      code: "APPLE",
      description: "",
      primary_search: true,
      advance_search: true,
      display_in_menu: true,
      sort_order: 1,
      image_src: "",
      is_system_default: true,
      is_enabled: true,
    },
  },
  {
    id: 9,
    store_id: 1,
    brand_id: 5,
    name: "OnePlus 8 Pro",
    img_src: "/img/vendor-profile/shop/OnePlus-8.png",
    short_description: "$60/mo",
    description: "128 GB | Glacial Green",
    storage: 128,
    supplier_id: 2,
    esthetic_id: 2,
    carrier_id: 2,
    color_id: 6,
    require_stock: true,
    cost: 500,
    included_warranty_duration_month: 6,
    sort_order: 9,
    available_in_store: true,
    available_online: true,
    category: [
      {
        category_id: 3,
      },
    ],
    brand: {
      id: 5,
      store_id: 1,
      name: "OnePlus",
      code: "ONE_PLUS",
      description: "",
      primary_search: true,
      advance_search: true,
      display_in_menu: true,
      sort_order: 5,
      image_src: "",
      is_system_default: true,
      is_enabled: true,
    },
  },
  {
    id: 10,
    store_id: 1,
    brand_id: 1,
    name: "iPhone 5c",
    img_src: "/img/vendor-profile/shop/iPhone-5c-Yellow.png",
    short_description: "$50/mo",
    description: "64 GB | Yellow",
    storage: 64,
    supplier_id: 1,
    esthetic_id: 1,
    carrier_id: 1,
    color_id: 7,
    require_stock: false,
    cost: 300,
    included_warranty_duration_month: 12,
    sort_order: 10,
    available_in_store: true,
    available_online: false,
    category: [
      {
        category_id: 1,
      },
    ],
    brand: {
      id: 1,
      store_id: 1,
      name: "Apple",
      code: "APPLE",
      description: "",
      primary_search: true,
      advance_search: true,
      display_in_menu: true,
      sort_order: 1,
      image_src: "",
      is_system_default: true,
      is_enabled: true,
    },
  },
] as ProductParam[]

const SORT_OPTIONS = [
  {
    name: "Most Popular",
    code: 1,
  },
  {
    name: "Newest",
    code: 2,
  },
  {
    name: "Lowest Price",
    code: 3,
  },
  {
    name: "Highest Price",
    code: 4,
  },
] as SelectorParam[]

export {
  DEVICE_COLOR,
  DEVICE_CATEGORIES,
  BRANDS,
  ESTHETIC_CONDITIONS,
  DEVICE_STORAGES,
  DEVICE_COLORS,
  CARRIERS,
  SUPPLIERS,
  AVAILABILITIES,
  PRODUCTS,
  SORT_OPTIONS,
}
