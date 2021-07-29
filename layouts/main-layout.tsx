import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

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
