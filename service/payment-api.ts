import axios from "axios"
import Config from "../config/config"

export default class PaymentClient {
  private static instance: PaymentClient

  private constructor() {
    // EMPTY
  }

  public static getInstance(): PaymentClient {
    if (!PaymentClient.instance) {
      PaymentClient.instance = new PaymentClient()
    }

    return PaymentClient.instance
  }

  async post<T>(
    url: string,
    body?: Record<string, any>,
    options?: Record<string, any>
  ): Promise<T> {
    const passcode = this.getPassCode()

    return (
      await axios.post(url, body, {
        headers: {
          Authorization: passcode,
          // Passcode: Config.PAYMENT_ACCESS_CODE,
          // "Sub-Merchant-Id": Config.MERCHANT_ID,
        },
        params: {
          ...(options != null ? options : {}),
        },
      })
    ).data as T
  }

  getPassCode() {
    // const encodedString = Buffer.from(Config.MERCHANT_ID).toString("base64")
    return `Passcode MzgzNjEwMDYyOjlmZEQwOEZBNWY0RjQ4ZTE4NzUwQWZjMTgwRDEyMjMx`
  }

  getMerchantID() {
    return Config.MERCHANT_ID
  }
}
