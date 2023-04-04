import * as S from './styles'
import { Link } from 'react-router-dom'
import { NavigationContext } from '../../contexts/NavigationContext'
import { useContext } from 'react'

export const Home = () => {
  const { setSelectedOption } = useContext(NavigationContext)

  return (
    <S.ContainerHome>
      <S.ContainerText>
        <S.Subtitle>
          <p>SO, YOU WANT TO TRAVEL TO</p>
        </S.Subtitle>

        <S.Title>
          <h1>SPACE</h1>
        </S.Title>

        <S.TextInfo>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world
            experience!
          </p>
        </S.TextInfo>
      </S.ContainerText>
      
      <Link
        to={'/destination'}
      >
        <S.ContainerButton
          onClick={() => setSelectedOption({
            label: 'Destination',
            path: '/destination'
          })}
        >
         <div className='content'>EXPLORER</div>
        </S.ContainerButton>        
      </Link>
    </S.ContainerHome>
  )
}
