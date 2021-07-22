export interface AddressBookFormParam {
  address_1: string
  address_2: string
  city: string
  state: string
  country: string
  postcode: string
  billing?: boolean
  delivery?: boolean
}

export interface SelectParam {
  name: string
  code: string
}

export interface AddressParam {
  title: string
  type: "billing" | "delivery"
  info: AddressInfoParam
}

export interface AddressInfoParam {
  name: string
  address_1: string
  address_2: string
  city: string
  state: string
  postcode: string
  country: string
}

export interface MyOrdersParam {
  date: string
  order: number
  status: string
  data: MyOrdersChildParam
}

export interface MyOrdersChildParam {
  name: string
  capacity: string
  color: string
  cost: number
  img_src: string
  warranty: number | null
  warranty_unit: string | null
}
