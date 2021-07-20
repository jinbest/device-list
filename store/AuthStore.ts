import { action, autorun, configure, observable, makeAutoObservable } from "mobx"
import { MockCredentialParam } from "../models/sign-params"

configure({ enforceActions: "always" })

export class AuthStore {
  @observable authUser = ""
  @observable mockCredential = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  } as MockCredentialParam

  constructor() {
    this.load()
    autorun(this.save)
    makeAutoObservable(this)
  }

  private save = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        AuthStore.name,
        JSON.stringify({
          authUser: this.authUser,
          mockCredential: this.mockCredential,
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
      Object.assign(this, JSON.parse(window.localStorage.getItem(AuthStore.name) || "{}"))
    }
  }

  @action
  setAuthUser = (authUser: string) => {
    this.authUser = authUser
    this.save()
  }

  @action
  setMockCredential = (mockCredential: MockCredentialParam) => {
    this.mockCredential = mockCredential
    this.save()
  }

  @action
  init = () => {
    this.setAuthUser("")
    this.setMockCredential({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    })
    this.save()
  }
}

export default new AuthStore()
