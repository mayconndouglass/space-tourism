import { useContext, useState } from "react"

import { PageTitle } from "../../components/PageTitle"
// Contexts
import { DataContext } from "../../contexts/DataContext"

// Styles
import * as S from './styles'

export const Destination = () => {
  const { destinations } = useContext(DataContext)
  const [destinationSelected, setDestinationSelected] = useState(destinations[0])
  const {name, images, description, distance, travel } = destinationSelected

  return (
    <S.ContainerArea>
      <PageTitle number={'01'} title={'PICK YOUR DESTINATION'}></PageTitle>

      <S.ContainerData>
        <S.PageMenu>
          <ul>
            {destinations.map(destination => (
              <S.LiItem
                key={destination.name}
                onClick={() => setDestinationSelected(destination)}
                isSelected={destination.name === destinationSelected.name}
              >
                {destination.name.toUpperCase()}
              </S.LiItem>
            ))}
          </ul>
        </S.PageMenu>
        
        <S.ContainerImage>
            <img src={images.webp} alt="" />
        </S.ContainerImage>

        <S.ContainerInfo>
          <S.Title><h2>{name.toUpperCase()}</h2></S.Title>

          <S.Description><p>{description}</p></S.Description>

          <S.InfoText>
            <hr />

            <div className="content">
              <div className="infoItem">
                <span>AVG. DISTANCE</span>
                 <p>{distance}</p>
              </div>
              
              <div className="infoItem">
                <span>EST. TRAVEL TIME</span>
                <p>{travel}</p>
              </div>
            </div> 
              
          </S.InfoText>
        </S.ContainerInfo>
      </S.ContainerData>
    </S.ContainerArea>
  )
}
