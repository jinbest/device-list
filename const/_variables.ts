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

export { DAYS_OF_THE_WEEK, CHECKOUT_PROGRESS_STATUS }
