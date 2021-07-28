import React from "react"
import MainLayout from "../layouts/MainLayout"
import { useRouter } from "next/router"
import { pageRoutes } from "../routes"
import _ from "lodash"

export default function Index() {
  const router = useRouter()
  let slug = ""

  const path = router.asPath.split("#")[0].split("/")

  if (path.length === 3 && path[1] === "vender") {
    slug = path[2]
    path[2] = "vender-name"
  }

  const pathString = path.join("/")

  const pathIndex = Math.max(_.findIndex(pageRoutes(slug), { path: pathString }), 0)

  return <MainLayout>{pageRoutes(slug)[pathIndex].component()}</MainLayout>
}
