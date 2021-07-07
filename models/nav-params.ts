export interface NavParams {
  name: string
  link: string
}

export interface SecondaryNavParams {
  name: string
  type: SecondaryNavType
}

export type SecondaryNavType =
  | "flashSale"
  | "iPhone"
  | "macBook"
  | "iPhoneXR"
  | "iPhone11"
  | "iPad"
  | "iMac"
  | "iPhone8"
  | "laptops"
  | "monitors"
  | "tablet"
  | "audio"
  | "gamingLaptop"
  | "samsungGalaxy"
  | "iphone12"
