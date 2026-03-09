import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const BudgetContext = createContext()

export const BudgetProvider = ({ children }) => {

  const [budget, setBudget] = useState(null)

  useEffect(() => {

    const fetchBudget = async () => {

      try {

        const res = await axios.get(
          "http://localhost:8000/api/users/budget",
          { withCredentials: true }
        )

        setBudget(res.data)

      } catch (error) {
        console.log(error)
      }

    }

    fetchBudget()

  }, [])

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  )

}