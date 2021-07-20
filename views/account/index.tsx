import React, { useEffect } from "react"
import { observer } from "mobx-react"
import { authStore } from "../../store"
import { useRouter } from "next/router"

const MyAccount = () => {
  const router = useRouter()

  useEffect(() => {
    if (!authStore.authUser) {
      router.push("/")
    }
  }, [authStore.authUser])

  return <div>MyAccount</div>
}

export default observer(MyAccount)
