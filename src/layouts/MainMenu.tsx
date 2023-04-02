import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

// Styles
import * as S from "./styles"

export const MainMenu = () => {
  return (
    <>
      <S.ContainerHeader>
        <Header />
      </S.ContainerHeader>
    
      <Outlet />
    </>
  )
}
