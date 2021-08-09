import { ProductParam } from "./shop-page-params"

export interface ShopCartParam extends ProductParam {
  device_kit_cost?: number
  locked?: boolean
  warranty_cost?: number
  total: number
}
