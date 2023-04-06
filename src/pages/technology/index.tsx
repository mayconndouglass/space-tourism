import { useContext, useState } from "react"
import { DataContext } from "../../contexts/DataContext"
import { PageTitle } from "../../components/PageTitle"
import * as S from './styles'

export const Technology = () => {
  const { technology } = useContext(DataContext)
  const [technologySelected, setTechnologySelected] = useState(technology[0])

  return (
    <S.ContainerArea>
      <div className="pageTitle">
        <PageTitle number={'03'} title={'SPACE LAUCH 101'}/>
      </div>

      <S.ContainerData>
        <S.ContainerInfo>
          <S.ContainerLinks>
            {technology.map((technology, index) => (
              <S.LinkCircle
                key={technology.name}
                onClick={() => setTechnologySelected(technology)}
                isSelected={technology.name === technologySelected.name}
              >
                <span>{index + 1}</span>
              </S.LinkCircle>
            ))}
          </S.ContainerLinks>
          
          <S.ContainerContent>
            <S.Subtitle><h4>THE TERMINOLOGY</h4></S.Subtitle>

            <S.Title>
              <h1>{technologySelected.name.toUpperCase()}</h1>
            </S.Title>
          
            <S.Description>
              <p>{technologySelected.description}</p>
            </S.Description>
          </S.ContainerContent>
        </S.ContainerInfo>
      
        <S.ContainerImage>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={technologySelected.images.landscape}
            />
            <img src={technologySelected.images.portrait} alt=''/>
          </picture>
          
        </S.ContainerImage>
      </S.ContainerData>
    </S.ContainerArea>
  )
}
