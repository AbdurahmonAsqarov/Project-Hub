
import { Outlet } from "react-router-dom"

export const RouterLayout = () => {
  return (
    <>
      <header className="relative z-40">
        <div className="w-[100vw] h-[100vh] bg-[#1E1E20]">
          <Outlet />
        </div>
      </header>
    </>
  )
}

