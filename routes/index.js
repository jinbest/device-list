import Homepage from "../views/homepage"
import Insure from "../views/insure"
import Shop from "../views/shop"
import Trade from "../views/trade"
import Plans from "../views/plans"
import Service from "../views/service"
import MyAccount from "../views/account"
import FindStore from "../views/find-store"
import AboutUs from "../views/about-us"
import VenderProfile from "../views/vender-profile"

const pageRoutes = (slug) => {
  return [
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
      path: "/account",
      name: "My Account",
      component: () => <MyAccount />,
      visible: false,
    },
    {
      path: "/find-store",
      name: "Find Store",
      component: () => <FindStore />,
      visible: false,
    },
    {
      path: "/about",
      name: "About Us",
      component: () => <AboutUs />,
      visible: false,
    },
    {
      path: "/vendor/vendor-name",
      name: "Vendor Profile",
      component: () => <VenderProfile slug={slug} />,
      visible: false,
    },
  ]
}

export { pageRoutes }
