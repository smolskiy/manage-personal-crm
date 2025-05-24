import { NavLink, Outlet } from "react-router";
import { cn } from "@/shared/utils";

export const MainLayout = () => {
  return (
    <div className="grid grid-cols-[300px_1fr]">
      <div className="space-y-1 pl-1 ">
        <div>
          <NavLink className={({ isActive }) => cn(isActive && 'shadow shadow-amber-400', "block")}
                   to="/users">Users</NavLink>
        </div>
        <div>
          <NavLink className={({ isActive }) => cn(isActive && 'shadow shadow-amber-400', "block")}
                   to="/departments">Departments</NavLink>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}