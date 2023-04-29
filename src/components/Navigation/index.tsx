import { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'

// Styles
import { GlobalStyle } from '../../styles.global'
import { ContainerNavigation, LiItem } from './styles'

// Types
import { routeType } from '../../types'

// Contexts
import { NavigationContext } from '../../contexts/NavigationContext'

const routes: routeType[] = [
  { label: 'home', path: '/' },
  { label: 'destination', path: '/destination' },
  { label: 'crew', path: '/crew' },
  { label: 'technology', path: '/technology' },
]

const getSelectedOption = () => {
  const currentPath = window.location.pathname
  return routes.find(route => route.path === currentPath)
}

export const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  const handleOptionClick = (route: routeType) => setSelectedOption(route)
  const { selectedOption, setSelectedOption } = useContext(NavigationContext)

  useEffect(() => {
    const teste = getSelectedOption()
    setSelectedOption(teste as routeType)
  }, [])

  return (
    <ContainerNavigation isOpen={isOpen}>
      <ul>
        {routes.map((route, index) => (
          <NavLink
            key={route.label}
            to={index === 0 ? '/' : `/${route.label}`}
          >
            {selectedOption && (
              <GlobalStyle routeSelected={selectedOption.label} />
            )}

            <LiItem
              onClick={() => handleOptionClick(route)}
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
