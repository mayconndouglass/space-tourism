import { Link } from 'react-router-dom'
import * as S from './styles'
import { GlobalStyle } from '../../styles.global'
import { useState } from 'react'

export const Home = () => {
  const [isClicked, setIsClicked] = useState(false)
  console.log(isClicked)
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
        <S.ContainerButton onClick={() => setIsClicked(true)}>
          <div className='content'>EXPLORER</div>
        </S.ContainerButton>
      </Link>

      {isClicked && (
        <>
          {console.log('entrou')}
          {console.log(isClicked)}
          <GlobalStyle routeSelected='Destination' />
        </>
      )}
    </S.ContainerHome>
  )
}
