import { CheckPassParam } from "../models/check-pass-params"
import { LocationParam } from "../models/location-param"
import moment from "moment-timezone"

export function ValidateEmail(e: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(e)
}

export function CheckConfPass(confPass: string, pass: string) {
  if (pass === confPass) {
    return true
  } else {
    return false
  }
}

export function CheckPassword(pass: string) {
  const result: CheckPassParam = {
    status: false,
    msg: "Password is too weak.",
    strength: "Weak",
    letter: false,
    number: false,
    character: false,
  }
  if (!pass) {
    return result
  }
  if (pass.length < 8) {
    result.msg = "Password Should be 8 Characters at least."
    if (pass.match(/[A-Z]+/) || pass.match(/[a-z]+/)) {
      result.letter = true
    }
    if (pass.match(/[0-9]+/)) {
      result.number = true
    }
  } else {
    let strength = 0
    result.character = true
    if (pass.match(/[a-z]+/)) {
      strength += 1
      result.letter = true
    }
    if (pass.match(/[A-Z]+/)) {
      strength += 1
      result.letter = true
    }
    if (pass.match(/[0-9]+/)) {
      strength += 1
      result.number = true
    }
    if (pass.match(/[$@#&!]+/)) {
      strength += 1
    }
    if (strength < 2) {
      result.msg = "Password is too weak."
    } else if (strength < 3) {
      result.status = true
      result.msg = "Password is fair."
      result.strength = "Fair"
    } else {
      result.status = true
      result.msg = "Password is strong."
      result.strength = "Strong"
    }
  }
  return result
}

export function getAddress(location: LocationParam) {
  if (!location) return ""
  return `${location.address_1}, ${location.address_2 ? location.address_2 + ", " : ""}${
    location.city ? location.city + ", " : ""
  } ${location.state ? location.state + " " : ""} ${
    location.postcode
      ? location.postcode.substring(0, 3) +
        " " +
        location.postcode.substring(3, location.postcode.length)
      : ""
  }`
}

export function phoneFormatString(phnumber: string) {
  let formatPhnumber: string = phnumber,
    countrycode = "",
    Areacode = "",
    number = ""
  if (phnumber.length <= 10 && phnumber.length > 6) {
    countrycode = phnumber.substring(0, 3)
    Areacode = phnumber.substring(3, 6)
    number = phnumber.substring(6, phnumber.length)
    formatPhnumber = "(" + countrycode + ") " + Areacode + "-" + number
  } else if (phnumber.length > 10) {
    countrycode = phnumber.substring(phnumber.length - 10, phnumber.length - 7)
    Areacode = phnumber.substring(phnumber.length - 7, phnumber.length - 4)
    number = phnumber.substring(phnumber.length - 4, phnumber.length)
    formatPhnumber =
      phnumber.substring(0, phnumber.length - 10) +
      " (" +
      countrycode +
      ") " +
      Areacode +
      "-" +
      number
  }
  return formatPhnumber
}

export function getHourType(hourStr: string) {
  if (!hourStr) return "12:00 a.m"
  const ptr = hourStr.split(":")
  let hour = 12,
    minute = "00",
    AP = "a.m."
  if (ptr.length > 0) {
    hour = parseInt(ptr[0])
    if (hour >= 12) {
      AP = "p.m."
    } else {
      AP = "a.m."
    }
  }
  if (ptr.length > 1) {
    minute = ptr[1]
  }
  return `${hour % 12 === 0 ? 12 : hour % 12}:${minute} ${AP}`
}

export function isPassedTime(hourStr: string) {
  if (!hourStr) return true

  const today = new Date(),
    y = today.getFullYear(),
    m = today.getMonth(),
    d = today.getDate()
  const ptr = hourStr.split(":")

  let h = 12,
    min = 0
  if (ptr.length > 0) h = Number(ptr[0])
  if (ptr.length > 1) min = Number(ptr[1])

  const cntStamp = new Date(y, m, d, h, min).getTime()

  return cntStamp < new Date().getTime()
}

const formatHHMM = (val: number) => {
  if (val < 10) {
    return `0${val}`
  } else {
    return val.toString()
  }
}

export function getConvertHourType(
  hour: string,
  defaultTz: string | undefined,
  convertTz: string | null
) {
  if (!defaultTz || !convertTz || !hour) {
    return getHourType(hour)
  }
  const defaultOffset = moment().tz(defaultTz).utcOffset() / 60,
    convertOffset = moment().tz(convertTz).utcOffset() / 60,
    diff = convertOffset - defaultOffset,
    ptr = hour.split(":"),
    convertedMin = (diff + Number(ptr[0])) * 60 + Number(ptr[1])
  if (convertedMin <= 0 || convertedMin >= 1440) {
    return getHourType(hour)
  }
  const newHour = `${formatHHMM(Math.floor(convertedMin / 60))}:${formatHHMM(convertedMin % 60)}`
  return getHourType(newHour)
}

export function getRegularHours(hours: any[]) {
  return hours
    .map((v) => v)
    .filter((p) => {
      return p.type == "REGULAR"
    })
    .sort((d) => d.day)
}
