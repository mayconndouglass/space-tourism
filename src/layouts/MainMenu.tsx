import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export const MainMenu = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
