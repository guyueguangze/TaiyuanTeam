import React, { Suspense } from "react"
import { Navigate } from "react-router-dom"
import About from "@/pages/About"
import Layout from "@/pages/Layout"
import LazyLoad from "../utils/LazyLoad"
// https://hanlab.mit.edu/
export const UserLayoutRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <About />,
      },
      {
        path: "/news",
        element: LazyLoad(React.lazy(() => import("@/pages/News"))),
      },
      {
        path: "/axswards",
        element: LazyLoad(React.lazy(() => import("@/pages/Awards"))),
      },
      {
        path: "/Blog",
        element: LazyLoad(React.lazy(() => import("@/pages/Blog"))),
      },
      {
        path: "/Course",
        element: LazyLoad(React.lazy(() => import("@/pages/Course"))),
      },
      {
        path: "/Gallery",
        element: LazyLoad(React.lazy(() => import("@/pages/Gallery"))),
      },
      {
        path: "/Media",
        element: LazyLoad(React.lazy(() => import("@/pages/Media"))),
      },
      {
        path: "/Publications",
        element: LazyLoad(React.lazy(() => import("@/pages/Publications"))),
      },
      {
        path: "/Talks",
        element: LazyLoad(React.lazy(() => import("@/pages/Talks"))),
      },
      {
        path: "/Team",
        element: LazyLoad(React.lazy(() => import("@/pages/Team"))),
      },
    ],
  },
]
