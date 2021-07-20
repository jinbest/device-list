export interface LocationParam {
  address_1: string
  address_2: string | null
  address_3: string | null
  business_page_link: string | null
  city: string
  country: string
  description: string | null
  email: string
  id: number
  image_url: string | null
  is_main: boolean
  is_voided: boolean
  latitude: number
  location_name: string
  longitude: number
  phone: string | null
  postcode: string
  state: string
  store_id: number
  timezone: string
  locHour: LocationHourParam
  locAvailability: string[]
  location_hours?: any[]
}

export interface LocationHourParam {
  open: string
  close: string
}
