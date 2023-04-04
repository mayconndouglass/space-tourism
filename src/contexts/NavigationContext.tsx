import { createContext, useState } from "react";
import { routeType, ChildrenPropsType } from "../types";

type initialContextType = {
  selectedOption: routeType
  setSelectedOption: (route: routeType) => void
}

const initialContext = {
  selectedOption: {
    label: 'Home',
    path: '/'
  } as routeType,
  setSelectedOption: (route: routeType) => {}
}

export const NavigationContext = createContext<initialContextType>(initialContext)

export const NavigationProvider = ({children}: ChildrenPropsType) => {
  const initialState = initialContext.selectedOption
  const [selectedOption, setSelectedOption] = useState<routeType>(initialState)

  return (
    <NavigationContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </NavigationContext.Provider>  
  )
}
