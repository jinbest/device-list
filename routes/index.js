import Homepage from "../views/homepage"
import Insure from "../views/insure"
import Shop from "../views/shop"
import Trade from "../views/trade"
import Plans from "../views/plans"
import Service from "../views/service"
import FindStore from "../views/find-store"

const pageRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => <Homepage />,
    visible: false,
  },
  {
    path: "/service",
    name: "Service",
    component: () => <Service />,
    visible: true,
  },
  {
    path: "/insure",
    name: "Insure",
    component: () => <Insure />,
    visible: true,
  },
  {
    path: "/plans",
    name: "Plans",
    component: () => <Plans />,
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
    path: "/find-store",
    name: "Find Store",
    component: () => <FindStore />,
    visible: false,
  },
]

export { pageRoutes }
