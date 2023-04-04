import { createContext, useState, ReactNode } from "react";
import { routeType } from "../types";

type ChildrenPropsType = {
  children: ReactNode
}

type initialType = {
  selectedOption: routeType
  setSelectedOption: (route: routeType) => void
}

const initialState = {
  selectedOption: {
    label: 'Home',
    path: '/'
  } as routeType,
  setSelectedOption: (route: routeType) => {}
}

export const NavigationContext = createContext<initialType>(initialState)

export const NavigationProvider = ({children}: ChildrenPropsType) => {
  const [selectedOption, setSelectedOption] = useState<routeType>(initialState.selectedOption)

  return (
    <NavigationContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </NavigationContext.Provider>  
  )
}
