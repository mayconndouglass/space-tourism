import { useState } from 'react'
import * as S from './styles'

// Images
import logo from '../../../public/assets/shared/logo.svg'
import menuMobile from '../../../public/assets/shared/icon-hamburger.svg'
import closeMenuMobile from '../../../public/assets/shared/icon-close.svg'

// Components
import { Navigation } from '../Navigation'

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <S.ContainerArea>
      <S.ContainerLogo>
        <img src={logo} alt='' />
      </S.ContainerLogo>

      <Navigation isOpen={isOpen} />

      <S.MenuMobile
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ?
          <img src={closeMenuMobile} alt="Menu Mobile" />
          :
          <img src={menuMobile} alt="Menu Mobile" />
        }
      </S.MenuMobile>
    </S.ContainerArea>
  )
}
