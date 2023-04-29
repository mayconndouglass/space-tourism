import { ReactNode } from "react"

export type routeType = {
  label: 'home' | 'crew' | 'destination' | 'technology'
  path: string
}

export type ChildrenPropsType = {
  children: ReactNode
}
