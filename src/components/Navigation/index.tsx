import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Styles
import { GlobalStyle } from '../../styles.global'
import { ContainerNavigation, LiItem } from './styles'

type routeType = {
  label: 'Home' | 'Crew' | 'Destination' | 'Technology'
  path: string
}

const routes: routeType[] = [
  {label: 'Home', path: '/'},
  {label: 'Crew', path: '/crew'},
  {label: 'Destination', path: '/destination'},
  {label: 'Technology', path: '/technology'},
]

export const Navigation = () => {
  const getSelectedOption = () => {
    const currentPath = window.location.pathname
    return routes.find(route => route.path === currentPath)
  }

  const [selectedOption, setSelectedOption] = useState(getSelectedOption())
  const handleOptionClick = (route: routeType) => setSelectedOption(route)
  
  return (
    <ContainerNavigation>
      <ul>
        {routes.map((route, index) => (
          <NavLink
            key = {route.label}
            to = {index === 0 ? '/' : `/${route.label}`}
          >
            {selectedOption && (
              <GlobalStyle routeSelected={selectedOption.label} />
            )}

            <LiItem
              onClick = {() => handleOptionClick(route)}
              isSelected={route === selectedOption}
            >
              <span>{`0${index}`}</span> {route.label.toUpperCase()}
            </LiItem>
          </NavLink>
        ))}
      </ul>
    </ContainerNavigation>
    
  )
}
