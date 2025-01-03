import { AddressParam } from "../../models/customer-data-params"

const AddressLists = [
  {
    id: 1,
    customer_id: 1,
    first_name: "Jin",
    last_name: "Zheng",
    company: null,
    address_1: "2020 Corydon Ave",
    address_2: null,
    address_3: null,
    city: "winnipeg",
    state: "MB",
    postcode: "R3P 0N2",
    country: "CA",
    email: "jinzh718@gmail.com",
    phone: "20432328768",
    address_type: "SHIPPING",
  },
  {
    id: 2,
    customer_id: 1,
    first_name: "Jin",
    last_name: "Zheng",
    company: null,
    address_1: "500 Sterling Lyon Pkwy",
    address_2: null,
    address_3: null,
    city: "winnipeg",
    state: "MB",
    postcode: "R3P 1E7",
    country: "CA",
    email: "jinzh718@gmail.com",
    phone: "20432328768",
    address_type: "BILLING",
  },
  {
    id: 3,
    customer_id: 2,
    first_name: "Zohn",
    last_name: "Smiss",
    company: null,
    address_1: "6650 Franklin Ave",
    address_2: null,
    address_3: null,
    city: "Los Angeles",
    state: "CA",
    postcode: "900 28",
    country: "US",
    email: "john.smiss@gmail.com",
    phone: "20432328768",
    address_type: "SHIPPING",
  },
  {
    id: 3,
    customer_id: 2,
    first_name: "Zohn",
    last_name: "Smiss",
    company: null,
    address_1: "6650 Franklin Ave",
    address_2: null,
    address_3: null,
    city: "Los Angeles",
    state: "CA",
    postcode: "900 28",
    country: "US",
    email: "john.smiss@gmail.com",
    phone: "20432328768",
    address_type: "BILLING",
  },
  {
    id: 4,
    customer_id: 3,
    first_name: "Eric",
    last_name: "Schiffer",
    company: null,
    address_1: "738 S New Hampshire Ave",
    address_2: null,
    address_3: null,
    city: "Los Angeles",
    state: "CA",
    postcode: "900 05",
    country: "US",
    email: "eric.schiffer@reqres.in",
    phone: "20432328768",
    address_type: "SHIPPING",
  },
  {
    id: 5,
    customer_id: 3,
    first_name: "Eric",
    last_name: "Schiffer",
    company: null,
    address_1: "525 12 Ave E",
    address_2: null,
    address_3: null,
    city: "regina",
    state: "SK",
    postcode: "S4N 5T7",
    country: "CA",
    email: "eric.schiffer@reqres.in",
    phone: "20432328768",
    address_type: "BILLING",
  },
] as AddressParam[]

export { AddressLists }
