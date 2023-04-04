import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext"

export const Crew = () => {
  const data = useContext(DataContext)
  
  return (
    <>CrewPage</>
  )
}
