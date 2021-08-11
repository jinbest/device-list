import { action, autorun, configure, observable, makeAutoObservable } from "mobx"
import _ from "lodash"
import { mockShopCarts } from "../static/mock/shop-cart"
import { ShopCartParam } from "../models/shop-cart"
import { CheckoutProgressStatusParam } from "../models/checkout-params"
import { CHECKOUT_PROGRESS_STATUS } from "../const/_variables"
import { ProgressShippingFormParam } from "../models/checkout-params"
import statesData from "../const/statesData"

configure({ enforceActions: "always" })

export class ShopStore {
  @observable shopCarts = _.cloneDeep(mockShopCarts)
  @observable progressStatus = CHECKOUT_PROGRESS_STATUS.cart
  @observable orderAddress = {} as ProgressShippingFormParam
  @observable billingAddress = {} as ProgressShippingFormParam

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
  init = () => {
    this.setShopCarts([])
    this.progressStatus = CHECKOUT_PROGRESS_STATUS.cart
    this.orderAddress = {} as ProgressShippingFormParam
    this.billingAddress = {} as ProgressShippingFormParam
    this.save()
  }
}

export default new ShopStore()
