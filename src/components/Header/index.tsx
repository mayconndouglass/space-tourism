import * as S from './styles'

// Images
import logo from '../../assets/shared/logo.svg'
import menuMobile from '../../assets/shared/icon-hamburger.svg'

// Components
import { Navigation } from '../Navigation'

export const Header = () => {
 
  return (
    <S.ContainerArea>
      <S.ContainerLogo>
        <img src={logo} alt='' />
      </S.ContainerLogo>

      <Navigation />

      <S.MenuMobile>
        <img src={menuMobile} alt="Menu Mobile" />
      </S.MenuMobile>
    </S.ContainerArea>
  )
}
