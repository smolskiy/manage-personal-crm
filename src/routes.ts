import { createBrowserRouter } from "react-router";
import { UsersPage } from "./pages/users/users.page.tsx";
import { MainLayout } from "@/layouts/main.layout.tsx";
import { DepartmentsPage } from "@/pages/departments/departments.page.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "users",
        Component: UsersPage
      },
      {
        path: "departments",
        Component: DepartmentsPage
      },
    ]
  }
])
