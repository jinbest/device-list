import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

type Props = {
  children?: any
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="main-layout-child">{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
