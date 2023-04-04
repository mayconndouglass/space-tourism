import { ReactNode } from "react"

export type routeType = {
  label: 'Home' | 'Crew' | 'Destination' | 'Technology'
  path: string
}

export type ChildrenPropsType = {
  children: ReactNode
}
