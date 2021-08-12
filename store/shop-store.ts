import { action, autorun, configure, observable, makeAutoObservable } from "mobx"
import _ from "lodash"
import { mockShopCarts } from "../static/mock/shop-cart"
import { ShopCartParam } from "../models/shop-cart"
import {
  CheckoutProgressStatusParam,
  DeliveryOptionParam,
  SelectedLocationParam,
} from "../models/checkout-params"
import { CHECKOUT_PROGRESS_STATUS, DELIVERY_OPTIONS, PAYMENT_OPTIONS } from "../const/_variables"
import { ProgressShippingFormParam, PaymentOptionParam } from "../models/checkout-params"
import { PaymentCardInfoParam } from "../models/account-param"
import statesData from "../const/statesData"

configure({ enforceActions: "always" })

export class ShopStore {
  @observable shopCarts = _.cloneDeep(mockShopCarts)
  @observable progressStatus = CHECKOUT_PROGRESS_STATUS.cart
  @observable orderAddress = {} as ProgressShippingFormParam
  @observable billingAddress = {} as ProgressShippingFormParam
  @observable deliveryOption = DELIVERY_OPTIONS.ground.code
  @observable selectedLocation = {} as SelectedLocationParam
  @observable paymentMethod = PAYMENT_OPTIONS.credit_debit.code
  @observable creditCardInfo = {} as PaymentCardInfoParam

  constructor() {
    this.load()
    autorun(this.save)
    makeAutoObservable(this)
  }

  private save = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        ShopStore.name,
        JSON.stringify({
          shopCarts: this.shopCarts,
          progressStatus: this.progressStatus,
          orderAddress: this.orderAddress,
          billingAddress: this.billingAddress,
          deliveryOption: this.deliveryOption,
          selectedLocation: this.selectedLocation,
          paymentMethod: this.paymentMethod,
          creditCardInfo: this.creditCardInfo,
        })
      )
    }
  }

  @action
  private load = () => {
    if (
      typeof window !== "undefined" &&
      window.localStorage !== null &&
      typeof window.localStorage !== "undefined"
    ) {
      Object.assign(this, JSON.parse(window.localStorage.getItem(ShopStore.name) || "{}"))
    }
  }

  @action
  setShopCarts = (shopCarts: ShopCartParam[]) => {
    this.shopCarts = shopCarts
    this.save()
  }

  @action
  setProgressStatus = (progressStatus: CheckoutProgressStatusParam) => {
    this.progressStatus = progressStatus
    this.save()
  }

  @action
  setOrderAddress = (val: ProgressShippingFormParam) => {
    this.orderAddress = val
    this.save()
  }

  @action
  setInitialOrderAddress = () => {
    this.orderAddress = {
      firstName: "",
      lastName: "",
      companyName: "",
      address_1: "",
      address_2: "",
      city: "",
      postcode: "",
      country: "CA",
      state: statesData["CA"][0].code,
      phone: "",
      billing_address: false,
    } as ProgressShippingFormParam
    this.save()
  }

  @action
  setInitialBillingAddress = () => {
    this.billingAddress = {
      firstName: "",
      lastName: "",
      companyName: "",
      address_1: "",
      address_2: "",
      city: "",
      postcode: "",
      country: "CA",
      state: statesData["CA"][0].code,
      phone: "",
      billing_address: false,
    } as ProgressShippingFormParam
    this.save()
  }

  @action
  setBillingAddress = (val: ProgressShippingFormParam) => {
    this.billingAddress = val
    this.save()
  }

  @action
  setDeliveryOption = (val: DeliveryOptionParam) => {
    this.deliveryOption = val
    this.save()
  }

  @action
  setSelectedLocation = (val: SelectedLocationParam) => {
    this.selectedLocation = val
    this.save()
  }

  @action
  setPaymentMethod = (val: PaymentOptionParam) => {
    this.paymentMethod = val
    this.save()
  }

  @action
  setCreditCardInfo = (val: PaymentCardInfoParam) => {
    this.creditCardInfo = val
    this.save()
  }

  @action
  init = () => {
    this.setShopCarts([])
    this.progressStatus = CHECKOUT_PROGRESS_STATUS.cart
    this.orderAddress = {} as ProgressShippingFormParam
    this.billingAddress = {} as ProgressShippingFormParam
    this.deliveryOption = DELIVERY_OPTIONS.ground.code
    this.selectedLocation = {} as SelectedLocationParam
    this.paymentMethod = PAYMENT_OPTIONS.credit_debit.code
    this.creditCardInfo = {} as PaymentCardInfoParam
    this.save()
  }
}

export default new ShopStore()
