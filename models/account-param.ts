import { AddressTypeParam, AddressParam } from "./customer-data-params"

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

export interface AddressBookParam {
  title: string
  type: AddressTypeParam
  info: AddressParam
}

// export interface AddressInfoParam {
//   name: string
//   address_1: string
//   address_2: string
//   city: string
//   state: string
//   postcode: string
//   country: string
// }

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

export interface PaymentParam {
  type: string
  name: string
  logos: ImageDataParam[]
  cardInfo: PaymentCardInfoParam
}

export interface PaymentCardInfoParam {
  name: string
  number: string
  expiryDate: string
  cvv: string
}

export interface ImageDataParam {
  img_src: string
  alt: string
}
