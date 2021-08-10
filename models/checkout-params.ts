export type CheckoutProgressStatusParam =
  | "cart"
  | "account"
  | "shipping"
  | "payment"
  | "confirmation"

export interface ProgressShippingFormParam {
  firstName: string
  lastName: string
  companyName: string
  address_1: string
  address_2: string
  city: string
  postcode: string
  country: string
  state: string
  phone: string
}
