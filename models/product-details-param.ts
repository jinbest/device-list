export interface WorkWithParam {
  id: number
  name: string
  img_src: string
}

export interface ProductColorParam {
  id: number
  color: string
}

export interface ProductStorageParam {
  id: number
  value: number
}

export interface ProductConditionParam {
  id: number
  name: string
  code: string
  availability: boolean
  cost: number
}

export interface ProductSelectParam {
  label: string
  value: number | string
}
