import { action, autorun, configure, observable, makeAutoObservable } from "mobx"
import _ from "lodash"
import { mockShopCarts } from "../static/mock/shop-cart"
import { ShopCartParam } from "../models/shop-cart"
import { CheckoutProgressStatusParam } from "../models/checkout-params"
import { CHECKOUT_PROGRESS_STATUS } from "../const/_variables"

configure({ enforceActions: "always" })

export class ShopStore {
  @observable shopCarts = _.cloneDeep(mockShopCarts)
  @observable progressStatus = CHECKOUT_PROGRESS_STATUS.cart

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
  init = () => {
    this.setShopCarts([])
    this.progressStatus = CHECKOUT_PROGRESS_STATUS.cart
    this.save()
  }
}

export default new ShopStore()
