import styled from "styled-components"

interface isSelectedProps {
  isSelected: boolean
}

export const LiItem = styled.li<isSelectedProps>`
  position: relative;
  padding: 5px;

  span {
    color: var(--white-color);
    margin-right: 0.5rem;
    font-weight: 700;
  }

  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    bottom: -32px;
    background-color: var(--white-color);
    visibility: ${props => props.isSelected ? 'visible' : 'hidden'};
  }

  &:hover {
    cursor: pointer;
    
    &::before {
      visibility: visible;
      transition:  visibility 0.3s;
      background-color: var(--white-color);
      opacity: 0.4;
    }
  }

  @media (max-width: 375px) {
    display: flex;

    &::before {
      visibility: hidden;
    }

    &:hover {   
      &::before {
        visibility: hidden;
      }
    }
  }
    
`

interface PropsMenuMobile {
  isOpen: boolean
}

export const ContainerNavigation = styled.nav<PropsMenuMobile>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 4%);
  backdrop-filter: blur(20px);
  width: 830px;
  height: 96px;
  font-family: var(--font-barlow-condensed);
  font-weight: 400;
  color: var(--white-color);
  position: relative;
  /* transition: all 12s ease-in-out;
  transform: translatex(100%); */
  transition: all;
  transition-duration: 300ms;
  
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  &::before {
    content: "";
    height: 1px;
    width: 473px;
    background-color: rgba(255, 255, 255, 20%);
    position: absolute;
    top: 50%;
    left: -52%;
  }

  @media (max-width: 768px) {
    width: 450px;
    font-size: 14px;

    &::before {
      display: none;
    }

    ul {
      align-items: start;

      span {
        display: none;
      }
    }
  }

  @media (max-width: 375px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    transition: all;
    transition-duration: 300ms;
    right: ${props => (props.isOpen ? '0' : '-100%')};
    /* transform: ${props => props.isOpen ? 'translatex(0)' : 'translatex(100%)'};
    transition: transform 1s ease-in-out; */
    padding: 118px 0 0 32px;
    z-index: 1;
    position: absolute;
    width: 70%;
    height: 100vh;
    top: 0;
    /* right: 0; */
    font-size: 16px;
    letter-spacing: 2.7px;
    line-height: 19.5px;

    ul {
      flex-direction: column;
      gap: 2rem;

      span {
        display: block;
      }
    }
  }
`