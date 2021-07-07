import Homepage from "../views/homepage"
import Insure from "../views/insure"
import Shop from "../views/shop"
import Trade from "../views/trade"
import Services from "../views/services"

const pageRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => <Homepage />,
    visible: false,
  },
  {
    path: "/insure",
    name: "Insure",
    component: () => <Insure />,
    visible: true,
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => <Shop />,
    visible: true,
  },
  {
    path: "/trade",
    name: "Trade",
    component: () => <Trade />,
    visible: true,
  },
  {
    path: "/services",
    name: "Services",
    component: () => <Services />,
    visible: true,
  },
]

export { pageRoutes }
