import { useContext, useState } from "react"

// Contexts
import { DataContext } from "../../contexts/DataContext"

// Components
import { PageTitle } from "../../components/PageTitle"

// Styles
import * as S from './styles'

export const Crew = () => {
  const { crew } = useContext(DataContext)
  const [crewSelected, setCrewSelected] = useState(crew[0])
  const { role, name, bio, images } = crewSelected

  return (
    <S.ContainerArea>
      <PageTitle number={'02'} title={'MEET YOUR CREW'} />

      <S.ContainerData>
        <S.ContainerInfo>
          <S.Role><h4>{role.toUpperCase()}</h4></S.Role>

          <S.Name><h4>{name.toUpperCase()}</h4></S.Name>

          <S.Bio><p>{bio}</p></S.Bio>

          <S.ContainerLinks>
            {crew.map(crew => (
              <S.PointLink
                key={crew.name}
                onClick={() => setCrewSelected(crew)}
                isSelected={crew.name === crewSelected.name}
              ></S.PointLink>
            ))}
          </S.ContainerLinks>
        </S.ContainerInfo>

        <S.ContainerImage>
          <img src={images.webp} alt="" />
        </S.ContainerImage>
      </S.ContainerData>
    </S.ContainerArea>
  )
}
