import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const ContainerArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerLogo = styled.div`
  background-color: var(--white-color);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-left: 3rem;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 375px) {
    z-index: 10;
  }
`

export const MenuMobile = styled.div`
  display: none;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 375px) {
    display: block;
    z-index: 10;
  }
`
