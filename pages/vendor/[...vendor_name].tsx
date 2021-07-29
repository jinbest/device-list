import React from "react"
import MainLayout from "../../layouts/main-layout"
import VendorProfile from "../../views/vendor-profile"
import { useRouter } from "next/router"

export default function vendor() {
  const router = useRouter()
  const { vendor_name } = router.query

  return <MainLayout>{vendor_name && <VendorProfile slug={vendor_name} />}</MainLayout>
}
