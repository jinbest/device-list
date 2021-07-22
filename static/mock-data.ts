import { AddressParam } from "../models/account-param"

const bannerData = [
  {
    title: "Give your old phone a new home.",
    content:
      "Set a price, list a device and make bank. Join Canada’s go-to marketplace for used devices.",
    button: {
      text: "",
      link: "",
      visible: false,
    },
  },
  {
    title: "Chromebooks & Laptops",
    content: "Premium laptops without the premium prices.",
    button: {
      text: "",
      link: "",
      visible: false,
    },
  },
  {
    title: "All you need for a home office.",
    content: "",
    button: {
      text: "Shop Now",
      link: "/shop",
      visible: true,
    },
  },
]

const lookingFor = [
  {
    title: "Phones",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img_src: "img/home/devices/phones.png",
    alt: "phones",
    visible: true,
    order: 1,
    vertical: true,
  },
  {
    title: "Laptops",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img_src: "img/home/devices/laptops.png",
    alt: "laptops",
    visible: true,
    order: 2,
    vertical: true,
  },
  {
    title: "Wearables",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img_src: "img/home/devices/wearables.png",
    alt: "wearables",
    visible: true,
    order: 3,
    vertical: true,
  },
  {
    title: "Tablets",
    content: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.",
    img_src: "img/home/devices/tablets.png",
    alt: "tablets",
    visible: true,
    order: 4,
    vertical: false,
  },
  {
    title: "Accessories",
    content: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.",
    img_src: "img/home/devices/accessories.png",
    alt: "accessories",
    visible: true,
    order: 5,
    vertical: false,
  },
]

const locationsData = [
  {
    id: 1,
    vendor_id: 1,
    location_name: "Mobile Tech Lab",
    is_main: true,
    description: "",
    address_1: "2020 Corydon Ave",
    address_2: "",
    address_3: "",
    business_page_link: "",
    city: "winnipeg",
    country: "CA",
    postcode: "",
    state: "MB",
    email: "eosarhemen@gmail.com",
    is_voided: false,
    latitude: 49.865759,
    longitude: -97.211811,
    distance: 1000,
    phone: "2042215898",
    timezone: "America/Winnipeg",
    locAvailability: [
      "Financing Available",
      "Apple Authorized",
      "Online Booking",
      "Curbside PickUp",
    ],
    hours: [
      {
        id: 22,
        location_id: 1,
        vendor_id: 1,
        by_appointment_only: false,
        close: "17:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 0,
        deleted_by: null,
        deleted_date: null,
        is_voided: false,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "23:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 0,
        deleted_by: null,
        deleted_date: null,
        id: 1,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 1,
        deleted_by: null,
        deleted_date: null,
        id: 23,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 1,
        deleted_by: null,
        deleted_date: null,
        id: 2,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "17:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 2,
        deleted_by: null,
        deleted_date: null,
        id: 24,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 2,
        deleted_by: null,
        deleted_date: null,
        id: 3,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 3,
        deleted_by: null,
        deleted_date: null,
        id: 25,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 3,
        deleted_by: null,
        deleted_date: null,
        id: 4,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 4,
        deleted_by: null,
        deleted_date: null,
        id: 5,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 4,
        deleted_by: null,
        deleted_date: null,
        id: 26,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 5,
        deleted_by: null,
        deleted_date: null,
        id: 6,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 5,
        deleted_by: null,
        deleted_date: null,
        id: 27,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 6,
        deleted_by: null,
        deleted_date: null,
        id: 7,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 6,
        deleted_by: null,
        deleted_date: null,
        id: 28,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
    ],
  },
  {
    id: 2,
    vendor_id: 1,
    location_name: "NorthTech Solutions",
    is_main: true,
    description: "",
    address_1: "208 Sinaa",
    address_2: "",
    address_3: "",
    business_page_link: "",
    city: "Iqaluit",
    country: "CA",
    postcode: "",
    state: "NU",
    email: "eosarhemen@gmail.com",
    is_voided: false,
    latitude: 49.865759,
    longitude: -97.211811,
    distance: 3000,
    phone: "8672024132",
    timezone: "America/Winnipeg",
    locAvailability: ["Financing Available", "Online Booking"],
    hours: [
      {
        id: 22,
        location_id: 1,
        vendor_id: 1,
        by_appointment_only: false,
        close: "17:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 0,
        deleted_by: null,
        deleted_date: null,
        is_voided: false,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 0,
        deleted_by: null,
        deleted_date: null,
        id: 1,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 1,
        deleted_by: null,
        deleted_date: null,
        id: 23,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 1,
        deleted_by: null,
        deleted_date: null,
        id: 2,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "17:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 2,
        deleted_by: null,
        deleted_date: null,
        id: 24,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 2,
        deleted_by: null,
        deleted_date: null,
        id: 3,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 3,
        deleted_by: null,
        deleted_date: null,
        id: 25,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 3,
        deleted_by: null,
        deleted_date: null,
        id: 4,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 4,
        deleted_by: null,
        deleted_date: null,
        id: 5,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 4,
        deleted_by: null,
        deleted_date: null,
        id: 26,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 5,
        deleted_by: null,
        deleted_date: null,
        id: 6,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 5,
        deleted_by: null,
        deleted_date: null,
        id: 27,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 6,
        deleted_by: null,
        deleted_date: null,
        id: 7,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 6,
        deleted_by: null,
        deleted_date: null,
        id: 28,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
    ],
  },
  {
    id: 3,
    vendor_id: 1,
    location_name: "Nanotech Repair",
    is_main: true,
    description: "",
    address_1: "2743 Avonhurst Drive",
    address_2: "",
    address_3: "",
    business_page_link: "",
    city: "Regina",
    country: "CA",
    postcode: "",
    state: "SK",
    email: "eosarhemen@gmail.com",
    is_voided: false,
    latitude: 49.865759,
    longitude: -97.211811,
    distance: 5000,
    phone: "3065696266",
    timezone: "America/Winnipeg",
    locAvailability: ["Financing Available", "Curbside PickUp"],
    hours: [
      {
        id: 22,
        location_id: 1,
        vendor_id: 1,
        by_appointment_only: false,
        close: "17:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 0,
        deleted_by: null,
        deleted_date: null,
        is_voided: false,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "23:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 0,
        deleted_by: null,
        deleted_date: null,
        id: 1,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 1,
        deleted_by: null,
        deleted_date: null,
        id: 23,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 1,
        deleted_by: null,
        deleted_date: null,
        id: 2,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "17:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 2,
        deleted_by: null,
        deleted_date: null,
        id: 24,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 2,
        deleted_by: null,
        deleted_date: null,
        id: 3,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 3,
        deleted_by: null,
        deleted_date: null,
        id: 25,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 3,
        deleted_by: null,
        deleted_date: null,
        id: 4,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 4,
        deleted_by: null,
        deleted_date: null,
        id: 5,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 4,
        deleted_by: null,
        deleted_date: null,
        id: 26,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 5,
        deleted_by: null,
        deleted_date: null,
        id: 6,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 5,
        deleted_by: null,
        deleted_date: null,
        id: 27,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 6,
        deleted_by: null,
        deleted_date: null,
        id: 7,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "",
        vendor_id: 1,
        type: "REGULAR",
      },
      {
        by_appointment_only: false,
        close: "20:00:00",
        created_by: "admin",
        created_date: "2021-07-20T16:44:40+00:00",
        day: 6,
        deleted_by: null,
        deleted_date: null,
        id: 28,
        is_voided: false,
        location_id: 1,
        modified_by: "admin",
        modified_date: "2021-07-20T16:44:40+00:00",
        open: "09:00:00",
        vendor_id: 1,
        type: "HOLIDAY",
      },
    ],
  },
]

const accountData = {
  myDetails: {
    title: "My Details",
    content: "Feel free to edit any of your information so your account is up to date.",
    info: {
      first_name: "John",
      last_name: "Smith",
      email: "johmsmith@gmail.com",
      phone: "12041234567",
    },
  },
  addressBook: {
    title: "Address Book",
    address: [] as AddressParam[],
  },
  myOrders: {
    title: "My Orders",
    orders: [
      {
        date: "2021-05-01",
        order: 99999,
        status: "IN TRANSIT",
        data: {
          name: "iPhone 5c",
          capacity: "64 GB",
          color: "Yellow",
          cost: 300,
          img_src: "/img/account/iphone-5c.png",
          warranty: 12,
          warranty_unit: "MONTH",
        },
      },
      {
        date: "2020-12-15",
        order: 99998,
        status: "DELIVERED",
        data: {
          name: "Apple Watch (Series 5)",
          capacity: "40 mm",
          color: "Space Gray",
          cost: 300,
          img_src: "/img/account/iphone-5c.png",
          warranty: 12,
          warranty_unit: "month",
        },
      },
      {
        date: "2020-06-07",
        order: 99967,
        status: "CANCELLED",
        data: {
          name: "Apple Watch (Series 5)",
          capacity: "40 mm",
          color: "Space Gray",
          cost: 300,
          img_src: "/img/account/iphone-5c.png",
          warranty: 12,
          warranty_unit: "month",
        },
      },
      {
        date: "2020-04-15",
        order: 99754,
        status: "RETURNED",
        data: {
          name: "iPhone 9",
          capacity: "64 GB",
          color: "Gray",
          cost: 300,
          img_src: "/img/account/iphone-5c.png",
          warranty: 12,
          warranty_unit: "month",
        },
      },
    ],
  },
  myReturns: {
    title: "My Returns",
  },
  paymentMethods: {
    title: "Payment Methods",
  },
  contantPreferences: {
    title: "Contact Preferences",
  },
  needHelp: {
    title: "Need Help?",
  },
}

export { bannerData, lookingFor, locationsData, accountData }