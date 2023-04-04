import { createContext } from "react";

import {data} from '../data/data'
import { ChildrenPropsType } from "../types";

export const DataContext = createContext(data)

export const DataProvider = ({children}: ChildrenPropsType) => {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}
