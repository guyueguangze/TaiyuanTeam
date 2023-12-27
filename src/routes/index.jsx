import React from "react"
import { useRoutes, Navigate } from "react-router-dom"
import { UserLayoutRouter } from "@/routes/modules/Layout"
import { ErrorRouter } from "./modules/Error"

export const rootRouter = [
  ...UserLayoutRouter,

  ...ErrorRouter,
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
]
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}
export default Router
