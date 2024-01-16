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
        path: "/achievementDetail",
        element: LazyLoad(React.lazy(() => import("@/pages/AchievementDetail"))),
      },
      {
        path: "/news",
        element: LazyLoad(React.lazy(() => import("@/pages/News"))),
      },
      {
        path: "/awards",
        element: LazyLoad(React.lazy(() => import("@/pages/Awards"))),
      },
      {
        path: "/blog",
        element: LazyLoad(React.lazy(() => import("@/pages/Blog"))),
      },
      {
        path: "/course",
        element: LazyLoad(React.lazy(() => import("@/pages/Course"))),
      },
      {
        path: "/courseDetail",
        element: LazyLoad(React.lazy(() => import("@/pages/CourseDetail"))),
      },
      {
        path: "/gallery",
        element: LazyLoad(React.lazy(() => import("@/pages/Gallery"))),
      },
      {
        path: "/media",
        element: LazyLoad(React.lazy(() => import("@/pages/Media"))),
      },
      {
        path: "/publications",
        element: LazyLoad(React.lazy(() => import("@/pages/Publications"))),
      },
      {
        path: "/talks",
        element: LazyLoad(React.lazy(() => import("@/pages/Talks"))),
      },
      {
        path: "/team",
        element: LazyLoad(React.lazy(() => import("@/pages/Team"))),
      },
      {
        path: "/memberDetail",
        element: LazyLoad(React.lazy(() => import("@/pages/MemberDetail"))),
      },
    ],
  },
]
