export interface MegaContentParam {
  text: string
  link: string
}

export interface MegaDataParam {
  name: string
  banner: MegaDataBannerParam
  child: MegaDataChildParam[]
}

export interface MegaDataBannerParam {
  title: string
  content: string
  logo: string
  bgCol: string
}

export interface MegaDataChildParam {
  name: string
  data: string[]
}
