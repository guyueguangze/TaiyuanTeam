import Layout from "@/pages/Layout"
export const TestRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: "/test",
      },
    ],
  },
]
