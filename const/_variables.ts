import { CheckoutProgressStatusParam } from "../models/checkout-params"

const DAYS_OF_THE_WEEK: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const CHECKOUT_PROGRESS_STATUS = {
  cart: "cart" as CheckoutProgressStatusParam,
  account: "account" as CheckoutProgressStatusParam,
  shipping: "shipping" as CheckoutProgressStatusParam,
  payment: "payment" as CheckoutProgressStatusParam,
  confirmation: "confirmation" as CheckoutProgressStatusParam,
}

const SHIPPING_STEP_STATUS = {
  order_address: "order_address",
  billing_address: "billing_address",
  confirm_order_address: "confirm_order_address",
  confirm_billing_address: "confirm_billing_address",
}

const SHIPPING_FORM_TITLE = {
  order_address: "Where do you want your order sent?",
  billing_address: "What's your billing address?",
  confirm_order_address: "Confirm your delivery address",
  confirm_billing_address: "Confirm your billing address",
}

export { DAYS_OF_THE_WEEK, CHECKOUT_PROGRESS_STATUS, SHIPPING_STEP_STATUS, SHIPPING_FORM_TITLE }
